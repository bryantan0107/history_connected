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
node scripts/content/validate-content.mjs
node scripts/content/promote-approved-content.mjs
node scripts/content/audit-coverage.mjs
```

`promote-approved-content.mjs` is the only script that writes app-loaded generated content.
