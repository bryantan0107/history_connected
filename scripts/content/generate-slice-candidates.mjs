import path from "node:path";
import { eventIdFromTitle, hasArrayValue, hasText, readJson, repoRoot, writeJson } from "./content-utils.mjs";

const args = parseArgs(process.argv.slice(2));

if (args.help || !args.input) {
  printUsage();
  process.exit(args.help ? 0 : 1);
}

const inputPath = path.resolve(repoRoot, args.input);
const input = readJson(inputPath);
const batchId = args.batchId || input.batchId;
if (!batchId) {
  console.error("Missing batchId. Provide --batch-id=... or input.batchId.");
  process.exit(1);
}

const rawEvents = Array.isArray(input.events) ? input.events : [];
if (!rawEvents.length) {
  console.error(`No events found in ${args.input}`);
  process.exit(1);
}

const events = rawEvents.map((event) => normalizeSliceCandidate(event, batchId));
const issues = events.flatMap(validateSliceCandidate);

if (issues.length) {
  console.error(`Slice candidate generation failed with ${issues.length} issue(s):`);
  issues.slice(0, 80).forEach((issue) => console.error(`- ${issue}`));
  if (issues.length > 80) console.error(`...and ${issues.length - 80} more`);
  process.exit(1);
}

const outputPath = args.output
  ? path.resolve(repoRoot, args.output)
  : path.join(repoRoot, "content", "candidates", "slice-packs", batchId, "generated-candidates.json");

writeJson(outputPath, {
  batchId,
  detailLevel: "slice",
  reviewStatus: "candidate",
  sourceInput: path.relative(repoRoot, inputPath),
  events
});

console.log(`Generated ${events.length} slice candidate(s): ${path.relative(repoRoot, outputPath)}`);

function parseArgs(rawArgs) {
  return rawArgs.reduce((acc, arg) => {
    const match = arg.match(/^--([^=]+)=(.*)$/);
    if (match) {
      acc[toCamelCase(match[1])] = match[2];
    } else if (arg === "--help" || arg === "-h") {
      acc.help = true;
    }
    return acc;
  }, {});
}

function toCamelCase(value) {
  return value.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
}

function normalizeSliceCandidate(event, batchId) {
  const title = event.title || "";
  const year = event.year;
  const id = event.id || eventIdFromTitle(title, year);
  const trackIds = event.trackIds || (event.primaryTrackId ? [event.primaryTrackId] : []);
  const lensIds = event.lensIds || (event.primaryLensId ? [event.primaryLensId] : []);
  const placeIds = event.placeIds || (event.primaryPlaceId ? [event.primaryPlaceId] : []);
  const phaseIds = event.phaseIds || (event.primaryPhaseId ? [event.primaryPhaseId] : []);
  const regionPhaseIds = event.regionPhaseIds || (event.primaryRegionPhaseId ? [event.primaryRegionPhaseId] : []);

  return {
    id,
    year,
    title,
    titleZh: event.titleZh || "",
    summary: event.summary || "",
    summaryZh: event.summaryZh || "",
    detailLevel: "slice",
    placeIds,
    primaryPlaceId: event.primaryPlaceId || placeIds[0] || "",
    lensIds,
    primaryLensId: event.primaryLensId || lensIds[0] || "",
    trackIds,
    primaryTrackId: event.primaryTrackId || trackIds[0] || "",
    phaseIds,
    primaryPhaseId: event.primaryPhaseId || phaseIds[0] || "",
    regionPhaseIds,
    primaryRegionPhaseId: event.primaryRegionPhaseId || regionPhaseIds[0] || "",
    sourceRefs: event.sourceRefs || [],
    sourceNotes: event.sourceNotes || [`Slice candidate for ${batchId}; requires Codex review before approval.`],
    reviewStatus: "candidate",
    image: event.image || "",
    imageAlt: event.imageAlt || "",
    imageCaption: event.imageCaption || "",
    imageCaptionZh: event.imageCaptionZh || "",
    imageCredit: event.imageCredit || "",
    imageSourceUrl: event.imageSourceUrl || ""
  };
}

function validateSliceCandidate(event) {
  const issues = [];
  ["id", "year", "title", "primaryPlaceId", "primaryLensId", "primaryPhaseId"].forEach((field) => {
    if (!hasText(event[field])) issues.push(`${event.id || "(missing id)"} missing ${field}`);
  });
  ["placeIds", "lensIds", "phaseIds", "sourceRefs"].forEach((field) => {
    if (!hasArrayValue(event, field)) issues.push(`${event.id || "(missing id)"} missing ${field}`);
  });
  if (hasText(event.primaryTrackId) && !hasArrayValue(event, "trackIds")) {
    issues.push(`${event.id} has primaryTrackId but no trackIds`);
  }
  if (!hasText(event.summary) && !hasText(event.eventIntro)) {
    issues.push(`${event.id} needs at least summary or eventIntro`);
  }
  if (!hasText(event.summaryZh) && !hasText(event.eventIntroZh)) {
    issues.push(`${event.id} needs at least summaryZh or eventIntroZh`);
  }
  return issues;
}

function printUsage() {
  console.log(`Usage:
  node scripts/content/generate-slice-candidates.mjs --input=content/source-notes/my-slice-seed.json

Input shape:
  {
    "batchId": "modern-global-slice-1900-2000",
    "events": [
      {
        "year": 2000,
        "title": "Example real event",
        "titleZh": "真实事件示例",
        "summary": "One or two factual sentences.",
        "summaryZh": "一两句事实性中文说明。",
        "placeIds": ["united-states"],
        "primaryPlaceId": "united-states",
        "lensIds": ["economy-trade"],
        "primaryLensId": "economy-trade",
        "phaseIds": ["economy-trade-08"],
        "primaryPhaseId": "economy-trade-08",
        "sourceRefs": ["wikidata"],
        "sourceNotes": ["Source note for review."],
        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Example.jpg",
        "imageAlt": "Event-specific image description.",
        "imageCaption": "A caption explaining why this image belongs to the event.",
        "imageCaptionZh": "说明这张图片为什么属于该事件的中文图注。",
        "imageCredit": "Image: Wikimedia Commons",
        "imageSourceUrl": "https://commons.wikimedia.org/wiki/File:Example.jpg"
      }
    ]
  }`);
}
