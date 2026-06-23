import path from "node:path";
import {
  collectContentEvents,
  EVENT_IMAGE_FIELDS,
  EVENT_MODAL_FIELDS,
  getEventDetailAudit,
  hasArrayValue,
  hasText,
  PLACEHOLDER_EVENT_PATTERN,
  repoRoot
} from "./content-utils.mjs";

const contentRoot = path.join(repoRoot, "content");
const approved = collectContentEvents(path.join(contentRoot, "approved"));
const candidates = collectContentEvents(path.join(contentRoot, "candidates"));
const issues = [];

function requireField(event, field) {
  if (!hasText(event[field])) {
    issues.push(`${event.__sourceFile}: ${event.id || "(missing id)"} missing ${field}`);
  }
}

function validateEvent(event, strictLocalized = true) {
  ["id", "year", "title", "primaryPlaceId", "primaryLensId", "primaryPhaseId", "sourceNotes", "reviewStatus"].forEach((field) => requireField(event, field));
  if (strictLocalized) ["titleZh", "summary", "summaryZh"].forEach((field) => requireField(event, field));
  if (!("titleZh" in event)) issues.push(`${event.__sourceFile}: ${event.id || "(missing id)"} missing titleZh field`);
  if (!("summary" in event)) issues.push(`${event.__sourceFile}: ${event.id || "(missing id)"} missing summary field`);
  if (!("summaryZh" in event)) issues.push(`${event.__sourceFile}: ${event.id || "(missing id)"} missing summaryZh field`);
  ["placeIds", "lensIds", "phaseIds", "sourceRefs"].forEach((field) => {
    if (!hasArrayValue(event, field)) issues.push(`${event.__sourceFile}: ${event.id || "(missing id)"} missing ${field}`);
  });
  if (event.trackIds && event.trackIds.length && !event.primaryTrackId) {
    issues.push(`${event.__sourceFile}: ${event.id} has trackIds but no primaryTrackId`);
  }
  if (PLACEHOLDER_EVENT_PATTERN.test([event.id, event.title, event.titleZh, event.summary, event.summaryZh].filter(Boolean).join(" "))) {
    issues.push(`${event.__sourceFile}: ${event.id} looks like placeholder content`);
  }
}

approved.events.forEach((event) => {
  validateEvent(event, true);
  const audit = getEventDetailAudit(event);
  if (!hasText(event.detailLevel)) {
    issues.push(`${event.__sourceFile}: ${event.id || "(missing id)"} missing detailLevel`);
    return;
  }
  if (!["full", "slice", "needs-review"].includes(event.detailLevel)) {
    issues.push(`${event.__sourceFile}: ${event.id} has invalid detailLevel ${event.detailLevel}`);
  }
  if (event.detailLevel === "needs-review") {
    issues.push(`${event.__sourceFile}: ${event.id} is approved but marked needs-review`);
  }
  if (!audit.hasBase) {
    issues.push(`${event.__sourceFile}: ${event.id} marked ${event.detailLevel} but lacks slice-ready base fields`);
  }
  if (event.detailLevel === "slice") {
    EVENT_IMAGE_FIELDS.forEach((field) => requireField(event, field));
  }
  if (event.detailLevel === "full") {
    EVENT_MODAL_FIELDS.forEach((field) => requireField(event, field));
    EVENT_IMAGE_FIELDS.forEach((field) => requireField(event, field));
  }
});
candidates.events.forEach((event) => validateEvent(event, false));

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
