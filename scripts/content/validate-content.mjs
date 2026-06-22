import path from "node:path";
import { collectContentEvents, repoRoot } from "./content-utils.mjs";

const contentRoot = path.join(repoRoot, "content");
const approved = collectContentEvents(path.join(contentRoot, "approved"));
const candidates = collectContentEvents(path.join(contentRoot, "candidates"));
const allEvents = [...approved.events, ...candidates.events];
const issues = [];
const placeholderPattern = /phase-anchor|opening anchor|mature form|transition anchor|开端锚点|成熟形态|转折锚点/i;

function hasArray(event, field) {
  return Array.isArray(event[field]) && event[field].length > 0;
}

function requireField(event, field) {
  if (event[field] === undefined || event[field] === null || event[field] === "") {
    issues.push(`${event.__sourceFile}: ${event.id || "(missing id)"} missing ${field}`);
  }
}

function validateEvent(event, strictDetail = false, strictLocalized = true) {
  ["id", "year", "title", "primaryPlaceId", "primaryLensId", "primaryPhaseId", "sourceNotes", "reviewStatus"].forEach((field) => requireField(event, field));
  if (strictLocalized) ["titleZh", "summary", "summaryZh"].forEach((field) => requireField(event, field));
  if (!("titleZh" in event)) issues.push(`${event.__sourceFile}: ${event.id || "(missing id)"} missing titleZh field`);
  if (!("summary" in event)) issues.push(`${event.__sourceFile}: ${event.id || "(missing id)"} missing summary field`);
  if (!("summaryZh" in event)) issues.push(`${event.__sourceFile}: ${event.id || "(missing id)"} missing summaryZh field`);
  ["placeIds", "lensIds", "phaseIds", "sourceRefs"].forEach((field) => {
    if (!hasArray(event, field)) issues.push(`${event.__sourceFile}: ${event.id || "(missing id)"} missing ${field}`);
  });
  if (event.trackIds && event.trackIds.length && !event.primaryTrackId) {
    issues.push(`${event.__sourceFile}: ${event.id} has trackIds but no primaryTrackId`);
  }
  if (placeholderPattern.test([event.id, event.title, event.titleZh, event.summary, event.summaryZh].filter(Boolean).join(" "))) {
    issues.push(`${event.__sourceFile}: ${event.id} looks like placeholder content`);
  }
  if (strictDetail) {
    ["eventIntro", "eventIntroZh", "whyMatters", "whyMattersZh", "phaseRelation", "phaseRelationZh", "connectionHint", "connectionHintZh"].forEach((field) => requireField(event, field));
  }
}

approved.events.forEach((event) => validateEvent(event, Boolean(event.eventIntro || event.whyMatters), true));
approved.events.forEach((event) => {
  ["eventIntro", "eventIntroZh", "whyMatters", "whyMattersZh", "phaseRelation", "phaseRelationZh", "connectionHint", "connectionHintZh"].forEach((field) => requireField(event, field));
  ["image", "imageAlt", "imageCaption", "imageCaptionZh", "imageCredit", "imageSourceUrl"].forEach((field) => requireField(event, field));
});
candidates.events.forEach((event) => validateEvent(event, false, false));

const approvedIds = new Set();
approved.events.forEach((event) => {
  if (approvedIds.has(event.id)) issues.push(`duplicate approved event id: ${event.id}`);
  approvedIds.add(event.id);
});

if (!approved.events.length) issues.push("No approved events found");

if (issues.length) {
  console.error(`Content validation failed with ${issues.length} issue(s):`);
  issues.slice(0, 80).forEach((issue) => console.error(`- ${issue}`));
  if (issues.length > 80) console.error(`...and ${issues.length - 80} more`);
  process.exit(1);
}

console.log(`Content validation passed: ${approved.events.length} approved event(s), ${candidates.events.length} candidate event(s).`);
