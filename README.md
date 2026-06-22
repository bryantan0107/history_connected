# History Connected

History Connected is a static prototype for exploring history through time slices, lenses, regions, phases, and exact events.

The current app is intentionally deployable as a static site. Data is loaded from local JavaScript files in `outputs/`, while long-term curated content should live under `content/approved/` and be promoted into `outputs/generated-content.js`.

## Project Structure

```text
outputs/
  index.html
  app.js
  data.js
  generated-content.js
  styles.css

content/
  approved/      reviewed content that can be loaded by the app
  candidates/    draft content, never loaded by the app
  rejected/      rejected content and notes

scripts/content/
  validate-content.mjs
  promote-approved-content.mjs
  audit-coverage.mjs
```

## Local Development

Run the static app locally:

```bash
npm run serve
```

Then open:

```text
http://127.0.0.1:8081/
```

Run syntax checks:

```bash
npm run check
```

Validate approved/candidate content:

```bash
npm run content:validate
```

Promote approved content into the app-loaded generated file:

```bash
npm run content:promote
```

The promote script writes a timestamped backup before replacing `outputs/generated-content.js`.

## Vercel Deployment

This project can be deployed as a static site from GitHub.

Recommended Vercel project settings:

```text
Framework Preset: Other
Root Directory: repo root
Build Command: leave empty
Install Command: leave empty
Output Directory: outputs
```

After importing the GitHub repo into Vercel, pushes to the connected branch will publish the contents of `outputs/`.

## Content Rules

- Do not edit `outputs/generated-content.js` by hand for long-term content.
- Add reviewed content to `content/approved/`.
- Run `npm run content:validate` before promoting content.
- Run `npm run content:promote` to regenerate `outputs/generated-content.js`.
- Exact events should be real historical events with source references, full event modal fields, Chinese fields, and event-specific images.
- Phase and region phase content should explain the phase itself; Time Slice cells should remain focused on exact events.

## Deployment Notes

- The app is static and does not currently require a database.
- Future cloud database work should happen after the lens/region/phase/event schema stabilizes.
- Vercel is currently used only as static hosting.
