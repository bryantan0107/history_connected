# Content Pipeline

This folder is a batch-based editorial workspace. Nothing here runs in the background.

## Flow

```text
Topic batch -> candidates -> Codex review -> approved -> outputs/generated-content.js -> app
```

## Folders

- `candidates/`: draft events generated for review. These never load in the app.
- `approved/`: reviewed content that can be promoted into the app.
- `rejected/`: rejected candidates and reasons, so weak ideas do not keep returning.
- `source-notes/`: source and discovery notes. Do not copy long encyclopedia text into product copy.

## Commands

```bash
node scripts/content/generate-it-candidates.mjs
node scripts/content/audit-slice-coverage.mjs
node scripts/content/generate-slice-candidates.mjs --input=content/source-notes/my-slice-seed.json
node scripts/content/validate-content.mjs
node scripts/content/promote-approved-content.mjs
node scripts/content/audit-coverage.mjs
```

`promote-approved-content.mjs` is the only script that writes app-loaded generated content.

## Detail Levels

Approved events use `detailLevel`:

- `full`: complete Event Modal fields and event-specific image metadata.
- `slice`: real exact event for Time Slice / Local Context, with source-backed place/lens/phase ownership, bilingual summary, and event-specific image metadata, but not necessarily full modal prose.
- `needs-review`: not allowed in approved content.

Bulk expansion should start with `slice` events. Slice events still need real event-specific image metadata. Promote a slice event to `full` only after writing meaningful `eventIntro`, `whyMatters`, `phaseRelation`, `connectionHint`, and Chinese equivalents.

## Slice Packs

Use `audit-slice-coverage.mjs` to find empty `year × region × lens/track` cells before creating a batch. Put generated compact candidates under:

```text
content/candidates/slice-packs/<batch-id>/
```

After Codex review, move only real, source-backed, correctly classified events into:

```text
content/approved/slice-packs/<batch-id>/core-events.json
```

Candidates and rejected content are never loaded by the app.
