import path from "node:path";
import { eventIdFromTitle, repoRoot, writeJson } from "./content-utils.mjs";

const tracks = {
  "ai-ml": [
    ["Logic Theorist demonstrated", 1956, "united-states", "ai-ml-02"],
    ["LISP language introduced", 1958, "united-states", "ai-ml-02"],
    ["Shakey robot project begins", 1966, "united-states", "ai-ml-02"],
    ["Backpropagation popularized for neural networks", 1986, "global-transregional", "ai-ml-04"],
    ["IBM Watson wins Jeopardy", 2011, "united-states", "ai-ml-04"],
    ["TensorFlow released as open source", 2015, "united-states", "ai-ml-05"],
    ["PyTorch released", 2016, "united-states", "ai-ml-05"],
    ["Stable Diffusion released publicly", 2022, "global-transregional", "ai-ml-07"],
    ["Llama model weights released", 2023, "united-states", "ai-ml-07"],
    ["Retrieval-augmented generation becomes mainstream", 2023, "global-transregional", "ai-ml-07"]
  ],
  "software-os": [
    ["Multics development begins", 1964, "united-states", "software-os-02"],
    ["Smalltalk environment developed at Xerox PARC", 1972, "united-states", "software-os-04"],
    ["GNU Project announced", 1983, "united-states", "software-os-05"],
    ["POSIX standardization begins", 1988, "global-transregional", "software-os-05"],
    ["Java released", 1995, "united-states", "software-os-05"],
    ["Node.js released", 2009, "united-states", "software-os-05"],
    ["React released as open source", 2013, "united-states", "software-os-07"],
    ["Visual Studio Code released", 2015, "united-states", "software-os-07"],
    ["WebAssembly reaches MVP", 2017, "global-transregional", "software-os-07"],
    ["GitHub Copilot generally available", 2022, "united-states", "software-os-08"]
  ]
};

const requestedTracks = process.argv.slice(2);
const selectedTracks = requestedTracks.length ? requestedTracks : Object.keys(tracks);

for (const trackId of selectedTracks) {
  if (!tracks[trackId]) {
    console.error(`Unknown track: ${trackId}`);
    process.exitCode = 1;
    continue;
  }
  const events = tracks[trackId].map(([title, year, primaryPlaceId, primaryPhaseId]) => ({
    id: eventIdFromTitle(title, year),
    year,
    title,
    titleZh: "",
    summary: "",
    summaryZh: "",
    placeIds: [primaryPlaceId],
    primaryPlaceId,
    lensIds: ["science-technology"],
    trackIds: [trackId],
    phaseIds: [primaryPhaseId],
    primaryLensId: "science-technology",
    primaryTrackId: trackId,
    primaryPhaseId,
    sourceRefs: ["wikidata"],
    sourceNotes: ["Candidate generated from local curated IT milestone list; requires Codex review before approval."],
    reviewStatus: "candidate"
  }));

  writeJson(path.join(repoRoot, "content", "candidates", trackId, "generated-candidates.json"), {
    batchId: `${trackId}-generated-candidates`,
    trackId,
    reviewStatus: "candidate",
    events
  });
  console.log(`Generated ${events.length} candidates for ${trackId}`);
}
