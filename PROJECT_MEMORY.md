# History Connected Project Memory

## Product Direction

History Connected is not a traditional history encyclopedia and not just a timeline demo.

The core experience is:

> Choose a year and see what existed or happened across different regions and human activity lenses at the same moment.

Current product flow:

```text
Timeline -> Time Slice -> Local Context -> Phase / Event Details
```

Time Slice is the main experience.
Lens Phases and Region Phases are supporting context layers.
Connection Explorer remains available as a later deep-dive layer, but it is not the main flow.

## Core Concepts

### Lens

Lens means a broad domain of human activity, such as:

- War / Military
- State / Empire
- Economy / Trade
- Religion / Belief
- Science / Technology
- Art
- Literature
- Fashion / Daily Life
- Entertainment / Media
- Disaster / Climate
- Architecture

Top-level lenses should remain stable. Do not keep adding top-level lenses casually.

More specific interests should become sub-lenses / tracks.

Examples:

- Science / Technology -> Computing / PC, Networks / Internet, AI / ML, Cybersecurity
- Art -> Painting / Visual Art, Sculpture / Public Art, Photography / Visual Media, Digital / New Media Art
- Entertainment / Media -> Film / Cinema Industry

### Region

UI language should prefer `Region`.

The data layer may still use `placeIds`, but the product language should feel like regions / reference regions.

Regions are modern reference areas, not claims about fixed historical borders.
Historical complexity belongs in Region Phases.

Examples:

- China is a modern reference region.
- In 1453, China may show Ming Dynasty as a Region Phase.
- Turkey / Anatolia may include Byzantine, Ottoman, and Republican phases.

### Phase

Phase is a time range explanation.

There are two main kinds:

- Lens Phase: a phase in a domain of human activity.
- Region Phase: a phase in a reference region's history.

Phase is not an exact event.
Phase Modal explains the phase itself, not one exact year.

Phase active matching should use half-open boundaries by default:

```text
startYear <= year < endYear
```

This avoids double-highlighting adjacent phases at shared boundary years.
Open-ended / present phases may include their current right boundary.
If two phases genuinely overlap in their data ranges, both can still be highlighted.

Phase data should ideally include:

- `title / titleZh`
- `yearLabel`
- `startYear / endYear`
- `entryYear`
- `phaseIntro / phaseIntroZh`
- `fromPrevious / fromPreviousZh`
- `definingFeatures / definingFeaturesZh`
- `towardNext / towardNextZh`
- `representativeEvents`
- `sourceRefs`

When creating a new phase for the first time, create at least three real exact events for it by default.

Those events should usually cover:

- an entry or formation moment
- a representative middle moment
- a turning point, diffusion moment, or exit transition

This is a default content requirement, not permission to create fake anchors.
If three real, meaningful events cannot be identified yet, create fewer and mark the phase as underfilled rather than inventing filler.

Current intended phase interaction:

- Clicking the phase card body can update the year / highlight active phases.
- Only the "view more" / detail affordance should open the Phase Modal.
- Opening a Phase Modal should not reorder selected lens / region choices.

### Exact Event

Exact Event is a real historical event tied to a specific year.

Exact Event must not be fake filler.
Do not create template events such as:

- Opening anchor
- Mature form
- Transition anchor
- 开端锚点
- 成熟形态
- 转折锚点

Each exact event should ideally have:

- `year`
- `title / titleZh`
- `summary / summaryZh`
- `placeIds / primaryPlaceId`
- `lensIds / primaryLensId`
- `trackIds / primaryTrackId` when relevant
- `phaseIds / primaryPhaseId`
- `regionPhaseIds / primaryRegionPhaseId` when relevant
- `sourceRefs`

Every event should be created with Event Modal fields from the start:

- `eventIntro / eventIntroZh`
- `whyMatters / whyMattersZh`
- `phaseRelation / phaseRelationZh`
- `connectionHint / connectionHintZh`
- event-specific image fields

These fields must be meaningful and explanatory, not short filler.

Event images are part of event content quality, not decoration.

Every newly created event should explicitly consider event-specific image fields:

- `image`
- `imageAlt`
- `imageCaption / imageCaptionZh`
- `imageCredit`
- `imageSourceUrl`
- optional `imageFallbacks`

Images must be meaningfully related to the exact event itself.
Do not use generic decorative visuals, generated placeholder blocks, or a phase image as a substitute for an event image.
If no reliable event-specific image is available yet, leave the event without an image and mark it for later image enrichment rather than inventing a visual placeholder.

Content standard:

- `eventIntro`: explain what actually happened, with enough context for a learner to understand the event.
- `whyMatters`: explain why this event matters historically, technically, culturally, politically, or economically.
- `phaseRelation`: explain how this event belongs to its lens phase / track phase and, where relevant, region phase.
- `connectionHint`: suggest plausible connections to nearby lenses, regions, or later developments without inventing fake causality.

Avoid shallow wording such as "this was important because it changed history" or one-sentence placeholders.
If there is not enough confidence to write these fields well, do not approve the event yet.

## Current UI Principles

### Top Bar

Top Bar should be compact and sticky.

It should only handle global state:

- logo / title
- search
- year card
- language
- timeline

Do not put large lens chips, region chips, mode toggles, or view toggles back into the Top Bar.

### Knowledge Tree Drawer

Knowledge Tree Drawer is for selecting and discovering lens / region structure.

It should have two tabs:

- Lens
- Region

Drawer should show the tree structure only:

- lens
- sub-lens / track
- region

Drawer should not show phases or exact events.

Lens, sub-lens, track, and region selections should be independent and multi-selectable.

### Time Slice

Time Slice is the main content.

Current intended structure:

- Rows = selected lens / track
- Columns = selected regions
- Row header = lens / track name + active lens phase for current year
- Column header = region name + active region phase for current year
- Cell = exact event or empty

Important rule:

> Time Slice cell should only show Exact Event or Empty.

Time Slice cell should not show:

- Lens Phase
- Region Phase
- Snapshot Context
- Nearby Event
- Broad Background
- Active Period

Region Phase belongs in the column header and Local Context, not in the cell.
Lens Phase belongs in the row header and Lens Phases card, not in the cell.

If a cell has multiple exact events:

- show one primary event
- show `+N events`

Time Slice exact event matching should be strict:

- event year matches current year
- event place matches current region / place
- event primary lens matches current lens / track row

Events may have multiple lens associations, but `primaryLensId` controls Time Slice primary display.
Related lenses should appear in Local Context / Connections, not duplicate across many matrix cells.

### Local Context

Local Context should always be expanded.

It explains the selected year / region / lens context.

It can show:

- Events in this year
- Regional Phases active in this year
- Related Lens Phases

Local Context is the bridge from the compact Time Slice matrix into richer explanation.

### Lens Phases / Region Phases

Lens Phases and Region Phases are supporting context cards after Time Slice.

They show phase strips for selected lens / tracks and selected regions.

Interaction direction:

- Phase card body can be used for year navigation / active phase comparison.
- A small "view more" affordance opens the full Phase Modal.
- Phase Modal should explain the phase richly and naturally.

## Default State

Default state should select no lens and no region.

The user should add lens / region through the Knowledge Tree or explicit starter buttons.

The app can offer starter presets, such as:

- Start with IT tracks
- Start with Art tracks

But these should be explicit user actions, not automatic default selection.

## Content Strategy

Short-term priority is content quality, not more UI structure.

Priority content areas:

1. IT / CS related tracks and exact events
2. Art / media tracks and exact events
3. Region Phases for key reference regions
4. Real Exact Events linked to lens phases and region phases

Quality rules:

- Fewer real events are better than many fake events.
- Do not generate placeholder events.
- A newly created phase should normally ship with at least three real exact events, but never with fake anchor events.
- Every approved event must include meaningful `eventIntro`, `whyMatters`, `phaseRelation`, and `connectionHint` fields in both English and Chinese.
- Event modal writing should be rich enough to teach the event, not merely restate the summary.
- Wikipedia / Wikidata may be used for candidate discovery and source metadata.
- Do not copy long Wikipedia text directly.
- Codex can review, rewrite, and decide what enters the app.
- Approved content enters the app; candidates and rejected content do not.

## Batch Content Pipeline

Content expansion should be batch-based, not a continuously running background system.

Workflow:

```text
Topic batch -> candidates -> Codex review -> approved -> generated-content.js -> app
```

Directories:

- `content/candidates/`
- `content/approved/`
- `content/rejected/`
- `content/source-notes/`

Only approved content should be imported into the app.

## Current Technical Notes

Main files:

- `outputs/index.html`
- `outputs/styles.css`
- `outputs/app.js`
- `outputs/data.js`
- `outputs/generated-content.js`

Important technical notes:

- Default locale should be Chinese.
- Browser cache is often a problem; bump JS/CSS query versions after changes.
- The project folder may not be a git repository, so do not rely on `git diff` / `git status`.
- Use `node --check outputs/app.js` and `node --check outputs/data.js` after edits.
- Avoid browser smoke tests unless explicitly requested.

## Things To Avoid

- Do not restore cinematic landing as default.
- Do not make Connection Explorer the main experience.
- Do not add more top-level lenses without a strong information architecture reason.
- Do not mix modern regions, ancient polities, continents, and civilizations as the same kind of Time Slice column.
- Do not generate fake exact events.
- Do not put phase/background/snapshot text inside Time Slice cells.
- Do not let one event spread across unrelated regions or unrelated primary lens rows.
- Do not let clicking representative events destroy current lens / region selections.
- Do not make the UI feel like a dense academic database; keep moving toward exploration, readability, and curiosity.
