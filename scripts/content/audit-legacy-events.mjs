import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { collectContentEvents, repoRoot } from "./content-utils.mjs";

const approved = collectContentEvents(path.join(repoRoot, "content", "approved"));
const approvedIds = new Set(approved.events.map((event) => event.id));
const dataPath = path.join(repoRoot, "outputs", "data.js");
const dataSource = fs.readFileSync(dataPath, "utf8");
const sandbox = {
  console,
  globalThis: {}
};

vm.createContext(sandbox);
vm.runInContext(`${dataSource}\nglobalThis.__HISTORY_DATA__ = HISTORY_DATA;`, sandbox, {
  filename: dataPath
});

const data = sandbox.globalThis.__HISTORY_DATA__;
const events = Array.isArray(data?.events) ? data.events : [];
const legacy = events
  .filter((event) => event?.id && !approvedIds.has(event.id))
  .sort((a, b) => {
    const yearDiff = Number(a.year || 0) - Number(b.year || 0);
    return yearDiff || String(a.id).localeCompare(String(b.id));
  });

const byPrimaryLens = new Map();
legacy.forEach((event) => {
  const lens = event.primaryLensId || event.lensIds?.[0] || event.categories?.[0] || "unknown";
  byPrimaryLens.set(lens, (byPrimaryLens.get(lens) || 0) + 1);
});

console.log(`Approved canonical events: ${approvedIds.size}`);
console.log(`Browser-visible events in outputs/data.js without approved canonical copy: ${legacy.length}`);
console.log("");
console.log("Legacy events by primary lens/category:");
[...byPrimaryLens.entries()]
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  .forEach(([lens, count]) => console.log(`- ${lens}: ${count}`));

console.log("");
console.log("First 80 legacy event ids to audit/migrate:");
legacy.slice(0, 80).forEach((event) => {
  const label = event.title || event.titleZh || "(untitled)";
  console.log(`- ${event.id} | ${event.year || "?"} | ${label}`);
});

if (legacy.length > 80) {
  console.log(`...and ${legacy.length - 80} more`);
}
