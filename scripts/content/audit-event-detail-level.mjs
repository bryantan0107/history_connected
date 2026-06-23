import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import {
  collectContentEvents,
  getEventDetailAudit,
  readJson,
  repoRoot,
  walkJsonFiles,
  writeJson
} from "./content-utils.mjs";

const writeApproved = process.argv.includes("--write-approved");
const contentRoot = path.join(repoRoot, "content");
const approvedDir = path.join(contentRoot, "approved");
const sourceNotesDir = path.join(contentRoot, "source-notes");
const outputJson = path.join(sourceNotesDir, "event-detail-level-audit.json");
const outputMd = path.join(sourceNotesDir, "event-detail-level-audit.md");
const generatedPath = path.join(repoRoot, "outputs", "generated-content.js");
const dataPath = path.join(repoRoot, "outputs", "data.js");

const approved = collectContentEvents(approvedDir);
const approvedIds = new Set(approved.events.map((event) => event.id));
const generatedEvents = loadGeneratedEvents();
const runtimeEvents = loadRuntimeEvents();
const legacyEvents = runtimeEvents.filter((event) => event.id && !approvedIds.has(event.id));

if (writeApproved) annotateApprovedFiles();

const approvedRows = approved.events.map((event) => classifyEvent(event, "approved"));
const generatedRows = generatedEvents.map((event) => classifyEvent(event, "generated"));
const legacyRows = legacyEvents.map((event) => classifyEvent(event, "legacy"));
const rows = [...approvedRows, ...generatedRows, ...legacyRows];

const report = {
  generatedAt: new Date().toISOString(),
  writeApproved,
  counts: {
    approved: summarize(approvedRows),
    generated: summarize(generatedRows),
    legacy: summarize(legacyRows),
    all: summarize(rows)
  },
  approved: approvedRows,
  generated: generatedRows,
  legacy: legacyRows,
  missingImage: rows.filter((row) => row.missing.image.length),
  missingModalFields: rows.filter((row) => row.missing.modal.length),
  missingLinks: rows.filter((row) => row.missing.baseFields.length || row.missing.baseArrays.length)
};

writeJson(outputJson, report);
fs.writeFileSync(outputMd, renderMarkdown(report), "utf8");

console.log("Event detail level audit");
console.log(`- approved: ${formatSummary(report.counts.approved)}`);
console.log(`- generated: ${formatSummary(report.counts.generated)}`);
console.log(`- legacy/runtime only: ${formatSummary(report.counts.legacy)}`);
console.log(`- report: ${path.relative(repoRoot, outputJson)}`);
if (writeApproved) console.log("- approved JSON files were annotated with detailLevel");

function annotateApprovedFiles() {
  walkJsonFiles(approvedDir).forEach((filePath) => {
    const data = readJson(filePath);
    if (!Array.isArray(data.events)) return;
    let changed = false;
    data.events = data.events.map((event) => {
      if (event.detailLevel) return event;
      changed = true;
      return {
        ...event,
        detailLevel: getEventDetailAudit(event).suggestedLevel
      };
    });
    if (changed) writeJson(filePath, data);
  });
}

function loadGeneratedEvents() {
  if (!fs.existsSync(generatedPath)) return [];
  const sandbox = {};
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(generatedPath, "utf8"), sandbox);
  return Array.isArray(sandbox.HISTORY_GENERATED_CONTENT?.events)
    ? sandbox.HISTORY_GENERATED_CONTENT.events
    : [];
}

function loadRuntimeEvents() {
  if (!fs.existsSync(dataPath)) return [];
  const sandbox = { console };
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  if (fs.existsSync(generatedPath)) {
    vm.runInContext(fs.readFileSync(generatedPath, "utf8"), sandbox);
  }
  vm.runInContext(`${fs.readFileSync(dataPath, "utf8")}\nglobalThis.__HISTORY_DATA__ = HISTORY_DATA;`, sandbox);
  return Array.isArray(sandbox.__HISTORY_DATA__?.events)
    ? sandbox.__HISTORY_DATA__.events
    : [];
}

function classifyEvent(event, sourceKind) {
  const audit = getEventDetailAudit(event);
  const level = event.detailLevel || audit.suggestedLevel;
  return {
    id: event.id || "",
    title: event.title || "",
    titleZh: event.titleZh || "",
    year: event.year ?? null,
    sourceKind,
    sourceFile: event.__sourceFile ? path.relative(repoRoot, event.__sourceFile) : "",
    explicitDetailLevel: event.detailLevel || "",
    suggestedDetailLevel: audit.suggestedLevel,
    effectiveDetailLevel: level,
    hasBase: audit.hasBase,
    hasFullModal: audit.hasFullModal,
    hasFullImage: audit.hasFullImage,
    isPlaceholder: audit.isPlaceholder,
    missing: audit.missing
  };
}

function summarize(classifiedRows) {
  return classifiedRows.reduce((acc, row) => {
    acc.total += 1;
    acc[row.effectiveDetailLevel] = (acc[row.effectiveDetailLevel] || 0) + 1;
    if (row.suggestedDetailLevel !== row.effectiveDetailLevel) acc.levelMismatches += 1;
    if (row.missing.image.length) acc.missingImage += 1;
    if (row.missing.modal.length) acc.missingModalFields += 1;
    if (row.missing.baseFields.length || row.missing.baseArrays.length) acc.missingLinks += 1;
    return acc;
  }, {
    total: 0,
    full: 0,
    slice: 0,
    "needs-review": 0,
    levelMismatches: 0,
    missingImage: 0,
    missingModalFields: 0,
    missingLinks: 0
  });
}

function formatSummary(summary) {
  return `${summary.total} total / ${summary.full} full / ${summary.slice} slice / ${summary["needs-review"]} needs-review`;
}

function renderMarkdown(reportData) {
  const legacyNeedsReview = reportData.legacy
    .filter((row) => row.effectiveDetailLevel === "needs-review")
    .slice(0, 80);
  const approvedNeedsReview = reportData.approved
    .filter((row) => row.effectiveDetailLevel === "needs-review")
    .slice(0, 80);
  return `# Event Detail Level Audit

Generated: ${reportData.generatedAt}

## Summary

| Source | Total | Full | Slice | Needs review | Missing image | Missing modal fields | Missing links |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Approved | ${rowFor(reportData.counts.approved)} |
| Generated | ${rowFor(reportData.counts.generated)} |
| Legacy/runtime only | ${rowFor(reportData.counts.legacy)} |

## Approved Needs Review

${renderRows(approvedNeedsReview)}

## Legacy Needs Review Sample

${renderRows(legacyNeedsReview)}

Full machine-readable report: \`content/source-notes/event-detail-level-audit.json\`
`;
}

function rowFor(summary) {
  return [
    summary.total,
    summary.full,
    summary.slice,
    summary["needs-review"],
    summary.missingImage,
    summary.missingModalFields,
    summary.missingLinks
  ].join(" | ");
}

function renderRows(classifiedRows) {
  if (!classifiedRows.length) return "_None._";
  return classifiedRows
    .map((row) => `- \`${row.id}\` (${row.year ?? "unknown"}): ${row.title || row.titleZh || "(untitled)"}`)
    .join("\n");
}
