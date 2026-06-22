import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { repoRoot } from "./content-utils.mjs";

const generatedPath = path.join(repoRoot, "outputs", "generated-content.js");
const dataPath = path.join(repoRoot, "outputs", "data.js");
const ctx = { console, globalThis: {} };
ctx.globalThis = ctx;
vm.createContext(ctx);
if (fs.existsSync(generatedPath)) vm.runInContext(fs.readFileSync(generatedPath, "utf8"), ctx, { filename: generatedPath });
vm.runInContext(`${fs.readFileSync(dataPath, "utf8")}\nglobalThis.__DATA__ = HISTORY_DATA;`, ctx, { filename: dataPath });

const data = ctx.__DATA__;
const events = data.events || [];
const tracks = data.lensTracks || [];
const places = data.places || [];

console.log(`Events: ${events.length}`);
console.log(`Tracks: ${tracks.length}`);
console.log(`Places: ${places.length}`);

const trackedRows = tracks.map((track) => {
  const trackEvents = events.filter((event) => (event.trackIds || []).includes(track.id));
  const placesCovered = new Set(trackEvents.flatMap((event) => event.placeIds || []));
  return {
    track: track.id,
    events: trackEvents.length,
    places: placesCovered.size,
    recentEvents: trackEvents.filter((event) => event.year >= 1945).length
  };
});

console.table(trackedRows);
