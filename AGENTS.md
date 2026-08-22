# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

## Durable design decisions

- The chosen visual direction is ideation option 3: cinematic deep teal, warm cream editorial sections, large serif typography, restrained antique-gold details, and real food photography.
- Borrow option 1's clearer category pathways, featured product flow, and trust/value strip.
- Use option 1's warm, editorial bread-and-catering photography direction for the homepage hero rather than the brighter catalogue platter image.
- Blend the desktop hero photograph into the teal copy panel with a soft left-to-right fade; do not show the vertical `Discover` marker.
- Category photography should use purpose-composed Build 1-style catering, lunch-box, and artisan-bread images with central focal points that remain intact at wide desktop and stacked mobile crops.
- Do not use fictional storefront imagery. Outside the user-selected Build 1-inspired hero and category photographs, use only supplied or public Pantry d'Or product, bakery, and brand photography; keep contact details verified against the source brief.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
