import fs from "node:fs";
import path from "node:path";

export const repoRoot = path.resolve(new URL("../../", import.meta.url).pathname);

export function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

export function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

export function walkJsonFiles(dirPath) {
  if (!fs.existsSync(dirPath)) return [];
  return fs.readdirSync(dirPath, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) return walkJsonFiles(fullPath);
    return entry.isFile() && entry.name.endsWith(".json") ? [fullPath] : [];
  });
}

export function collectContentEvents(baseDir) {
  const files = walkJsonFiles(baseDir);
  const batches = files.map((filePath) => ({ filePath, data: readJson(filePath) }));
  const events = batches.flatMap(({ filePath, data }) => {
    const batchEvents = Array.isArray(data.events) ? data.events : [];
    return batchEvents.map((event) => ({
      ...event,
      reviewStatus: event.reviewStatus || data.reviewStatus || "candidate",
      batchId: event.batchId || data.batchId || "",
      __sourceFile: filePath
    }));
  });
  return { files, batches, events };
}

export function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function eventIdFromTitle(title, year) {
  const yearPart = Number(year) < 0 ? `${Math.abs(Number(year))}bce` : String(year);
  return `candidate-${slugify(title)}-${yearPart}`;
}

export function unique(values) {
  return [...new Set((values || []).filter(Boolean))];
}

export const EVENT_MODAL_FIELDS = [
  "eventIntro",
  "eventIntroZh",
  "whyMatters",
  "whyMattersZh",
  "phaseRelation",
  "phaseRelationZh",
  "connectionHint",
  "connectionHintZh"
];

export const EVENT_IMAGE_FIELDS = [
  "image",
  "imageAlt",
  "imageCaption",
  "imageCaptionZh",
  "imageCredit",
  "imageSourceUrl"
];

export const EVENT_BASE_FIELDS = [
  "id",
  "year",
  "title",
  "titleZh",
  "primaryPlaceId",
  "primaryLensId",
  "primaryPhaseId"
];

export const EVENT_BASE_ARRAY_FIELDS = [
  "placeIds",
  "lensIds",
  "phaseIds",
  "sourceRefs"
];

export const PLACEHOLDER_EVENT_PATTERN = /phase-anchor|opening anchor|mature form|transition anchor|开端锚点|成熟形态|转折锚点|seed event|teaching marker/i;

export function hasText(value) {
  return value !== undefined && value !== null && String(value).trim() !== "";
}

export function hasArrayValue(event, field) {
  return Array.isArray(event[field]) && event[field].length > 0;
}

export function getEventDetailAudit(event) {
  const missing = {
    baseFields: EVENT_BASE_FIELDS.filter((field) => !hasText(event[field])),
    baseArrays: EVENT_BASE_ARRAY_FIELDS.filter((field) => !hasArrayValue(event, field)),
    localized: ["summary", "summaryZh"].filter((field) => !hasText(event[field])),
    modal: EVENT_MODAL_FIELDS.filter((field) => !hasText(event[field])),
    image: EVENT_IMAGE_FIELDS.filter((field) => !hasText(event[field]))
  };
  const hasBaseText = (hasText(event.summary) && hasText(event.summaryZh))
    || (hasText(event.eventIntro) && hasText(event.eventIntroZh));
  const placeholderText = [
    event.id,
    event.title,
    event.titleZh,
    event.summary,
    event.summaryZh,
    event.eventType,
    event.scope
  ].filter(Boolean).join(" ");
  const isPlaceholder = PLACEHOLDER_EVENT_PATTERN.test(placeholderText);
  const hasBase = !missing.baseFields.length && !missing.baseArrays.length && hasBaseText && !isPlaceholder;
  const hasFullModal = EVENT_MODAL_FIELDS.every((field) => hasText(event[field]));
  const hasFullImage = EVENT_IMAGE_FIELDS.every((field) => hasText(event[field]));
  const suggestedLevel = !hasBase
    ? "needs-review"
    : hasFullModal && hasFullImage
      ? "full"
      : "slice";

  return {
    suggestedLevel,
    hasBase,
    hasBaseText,
    hasFullModal,
    hasFullImage,
    isPlaceholder,
    missing
  };
}
