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
