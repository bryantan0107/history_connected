import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { repoRoot, writeJson } from "./content-utils.mjs";

const DEFAULT_YEARS = [1914, 1918, 1929, 1939, 1945, 1949, 1969, 1979, 1989, 1991, 2000];
const DEFAULT_PLACE_IDS = [
  "united-states",
  "china",
  "japan",
  "britain-uk",
  "france",
  "german-lands",
  "russia",
  "india",
  "turkey-anatolia",
  "mexico-mesoamerica",
  "egypt-north-africa",
  "west-africa"
];
const DEFAULT_ROW_IDS = [
  "state-empire",
  "war-military",
  "economy-trade",
  "religion-belief",
  "science-technology",
  "entertainment-media",
  "art",
  "architecture",
  "computing-pc",
  "networks-internet"
];

const args = parseArgs(process.argv.slice(2));
const years = parseCsvArg(args.years, Number).filter((year) => Number.isFinite(year));
const placeIds = parseCsvArg(args.places, String);
const rowIds = parseCsvArg(args.rows, String);
const reportId = args.id || "modern-global-slice-1900-2000";
const outputJson = path.join(repoRoot, "content", "source-notes", `${reportId}-slice-coverage.json`);
const outputMd = path.join(repoRoot, "content", "source-notes", `${reportId}-slice-coverage.md`);

const data = loadRuntimeData();
const lensById = new Map((data.lenses || []).map((lens) => [lens.id, lens]));
const trackById = new Map((data.lensTracks || []).map((track) => [track.id, track]));
const placeById = new Map((data.places || []).map((place) => [place.id, place]));
const tracksByLens = groupBy(data.lensTracks || [], (track) => track.parentLensId);

const rows = rowIds.map((rowId) => {
  const track = trackById.get(rowId);
  if (track) return { type: "track", id: rowId, title: track.title, parentLensId: track.parentLensId };
  const lens = lensById.get(rowId);
  if (lens) return { type: "lens", id: rowId, title: lens.title };
  return null;
}).filter(Boolean);

const cells = [];
years.forEach((year) => {
  placeIds.forEach((placeId) => {
    rows.forEach((row) => {
      const events = findCellEvents(year, placeId, row);
      const activeRegionPhases = findActiveRegionPhases(year, placeId, row);
      const activeLensPhases = findActiveLensPhases(year, row);
      cells.push({
        year,
        placeId,
        placeTitle: placeById.get(placeId)?.title || placeId,
        rowId: row.id,
        rowType: row.type,
        rowTitle: row.title,
        eventCount: events.length,
        eventIds: events.map((event) => event.id),
        eventTitles: events.map((event) => event.title),
        activeRegionPhaseIds: activeRegionPhases.map((phase) => phase.id),
        activeRegionPhaseTitles: activeRegionPhases.map((phase) => phase.title),
        activeLensPhaseIds: activeLensPhases.map((phase) => phase.id),
        activeLensPhaseTitles: activeLensPhases.map((phase) => phase.title)
      });
    });
  });
});

const missingCells = cells.filter((cell) => cell.eventCount === 0);
const coveredCells = cells.filter((cell) => cell.eventCount > 0);
const highValueGaps = rankMissingCells(missingCells).slice(0, 120);
const report = {
  generatedAt: new Date().toISOString(),
  reportId,
  scope: { years, placeIds, rowIds },
  totals: {
    cells: cells.length,
    covered: coveredCells.length,
    missing: missingCells.length,
    coverageRatio: cells.length ? Number((coveredCells.length / cells.length).toFixed(4)) : 0
  },
  byYear: summarizeBy(cells, "year"),
  byPlace: summarizeBy(cells, "placeId"),
  byRow: summarizeBy(cells, "rowId"),
  highValueGaps,
  cells
};

writeJson(outputJson, report);
fs.writeFileSync(outputMd, renderMarkdown(report), "utf8");

console.log("Slice coverage audit");
console.log(`- scope: ${years.length} year(s) x ${placeIds.length} region(s) x ${rows.length} row(s)`);
console.log(`- covered: ${report.totals.covered}/${report.totals.cells} (${Math.round(report.totals.coverageRatio * 100)}%)`);
console.log(`- report: ${path.relative(repoRoot, outputJson)}`);

function parseArgs(rawArgs) {
  return rawArgs.reduce((acc, arg) => {
    const match = arg.match(/^--([^=]+)=(.*)$/);
    if (match) acc[match[1]] = match[2];
    return acc;
  }, {
    years: DEFAULT_YEARS.join(","),
    places: DEFAULT_PLACE_IDS.join(","),
    rows: DEFAULT_ROW_IDS.join(",")
  });
}

function parseCsvArg(value, mapper) {
  return String(value || "")
    .split(",")
    .map((item) => mapper(String(item).trim()))
    .filter((item) => item !== "" && item !== null && item !== undefined);
}

function loadRuntimeData() {
  const generatedPath = path.join(repoRoot, "outputs", "generated-content.js");
  const dataPath = path.join(repoRoot, "outputs", "data.js");
  const ctx = { console };
  ctx.globalThis = ctx;
  vm.createContext(ctx);
  if (fs.existsSync(generatedPath)) {
    vm.runInContext(fs.readFileSync(generatedPath, "utf8"), ctx, { filename: generatedPath });
  }
  vm.runInContext(`${fs.readFileSync(dataPath, "utf8")}\nglobalThis.__DATA__ = HISTORY_DATA;`, ctx, { filename: dataPath });
  return ctx.__DATA__;
}

function findCellEvents(year, placeId, row) {
  return (data.events || [])
    .filter((event) => eventMatchesYear(event, year))
    .filter((event) => eventMatchesPlace(event, placeId))
    .filter((event) => eventMatchesRow(event, row))
    .sort((a, b) => rankImportance(a) - rankImportance(b) || String(a.title).localeCompare(String(b.title)));
}

function eventMatchesYear(event, year) {
  const start = typeof event.startYear === "number" ? event.startYear : event.year;
  const end = typeof event.endYear === "number" ? event.endYear : event.year;
  return start <= year && end >= year;
}

function eventMatchesPlace(event, placeId) {
  if (!placeId) return true;
  if ((event.placeIds || []).includes(placeId)) return true;
  if (event.primaryPlaceId === placeId) return true;
  return false;
}

function eventMatchesRow(event, row) {
  if (row.type === "track") {
    return event.primaryTrackId === row.id || (event.trackIds || []).includes(row.id);
  }
  const eventTrackIds = event.trackIds || [];
  const lensHasTracks = (tracksByLens.get(row.id) || []).length > 0;
  if (lensHasTracks && eventTrackIds.length) return false;
  if (event.primaryLensId) return event.primaryLensId === row.id;
  return (event.lensIds || []).includes(row.id);
}

function findActiveRegionPhases(year, placeId, row) {
  const lensId = row.type === "track" ? row.parentLensId : row.id;
  return (data.regionPhases || [])
    .filter((phase) => phase.placeId === placeId)
    .filter((phase) => yearInPeriod(year, phase))
    .filter((phase) => !lensId || (phase.lensIds || []).includes(lensId))
    .sort((a, b) => periodDuration(a) - periodDuration(b))
    .slice(0, 3);
}

function findActiveLensPhases(year, row) {
  return (data.lineageNodes || [])
    .filter((phase) => row.type === "track"
      ? (phase.trackIds || []).includes(row.id)
      : phase.lensId === row.id && !(phase.trackIds || []).length)
    .filter((phase) => yearInPeriod(year, phase))
    .sort((a, b) => periodDuration(a) - periodDuration(b))
    .slice(0, 3);
}

function yearInPeriod(year, item) {
  const start = typeof item.startYear === "number" ? item.startYear : item.year;
  const end = typeof item.endYear === "number" ? item.endYear : item.year;
  if (start === undefined || end === undefined) return false;
  return year >= start && year < end;
}

function periodDuration(item) {
  if (typeof item.startYear !== "number" || typeof item.endYear !== "number") return Infinity;
  return Math.max(0, item.endYear - item.startYear);
}

function rankImportance(event) {
  const ranks = { core: 0, supporting: 1, candidate: 2 };
  return ranks[event.importance] ?? 1;
}

function groupBy(items, keyFn) {
  return items.reduce((map, item) => {
    const key = keyFn(item);
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(item);
    return map;
  }, new Map());
}

function summarizeBy(items, field) {
  const grouped = groupBy(items, (item) => String(item[field]));
  return [...grouped.entries()]
    .map(([id, group]) => ({
      id,
      total: group.length,
      covered: group.filter((cell) => cell.eventCount > 0).length,
      missing: group.filter((cell) => cell.eventCount === 0).length,
      coverageRatio: Number((group.filter((cell) => cell.eventCount > 0).length / group.length).toFixed(4))
    }))
    .sort((a, b) => a.coverageRatio - b.coverageRatio || b.total - a.total);
}

function rankMissingCells(missing) {
  return missing
    .map((cell) => {
      const score = (cell.activeRegionPhaseIds.length ? 2 : 0) + (cell.activeLensPhaseIds.length ? 2 : 0);
      return { ...cell, priorityScore: score };
    })
    .sort((a, b) => b.priorityScore - a.priorityScore
      || a.year - b.year
      || a.placeId.localeCompare(b.placeId)
      || a.rowId.localeCompare(b.rowId));
}

function renderMarkdown(reportData) {
  const topGaps = reportData.highValueGaps.slice(0, 40)
    .map((cell) => `- ${cell.year} · ${cell.placeTitle} · ${cell.rowTitle} — region phase: ${cell.activeRegionPhaseTitles[0] || "none"}; lens phase: ${cell.activeLensPhaseTitles[0] || "none"}`)
    .join("\n");
  return `# Slice Coverage Audit

Generated: ${reportData.generatedAt}

Scope: ${reportData.scope.years.length} years × ${reportData.scope.placeIds.length} regions × ${reportData.scope.rowIds.length} rows

Coverage: ${reportData.totals.covered}/${reportData.totals.cells} cells (${Math.round(reportData.totals.coverageRatio * 100)}%)

## Lowest Coverage By Row

${renderSummaryRows(reportData.byRow.slice(0, 20))}

## Lowest Coverage By Region

${renderSummaryRows(reportData.byPlace.slice(0, 20))}

## High Value Missing Cells

${topGaps || "_None._"}

Full report: \`content/source-notes/${reportData.reportId}-slice-coverage.json\`
`;
}

function renderSummaryRows(rows) {
  if (!rows.length) return "_None._";
  return rows.map((row) => `- ${row.id}: ${row.covered}/${row.total} covered (${Math.round(row.coverageRatio * 100)}%)`).join("\n");
}
