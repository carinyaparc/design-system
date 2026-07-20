# Carinya Parc — Design System

The brand and UI system for **Carinya Parc**, a regenerative farm at The Branch, Upper Hunter, NSW (carinyaparc.com.au). Warm, rounded, grounded and welcoming — a "peaceful home" for land, food and community.

## Sources
- **Website codebase** (mounted locally as `website/`): Next.js 16 + React 19 + Tailwind CSS 4 + Base UI + Payload CMS monorepo. UI lives in `apps/site/src`; the old theme was in `apps/site/src/styles/globals.css`.
- **Brand Guide** and **Brand Guide Deck** authored in this project (`Brand Guide.dc.html`, `Brand Guide Deck.dc.html`).
- `carinya-tokens.css` — the token set ported to the site's Tailwind `@theme` block.

## Content fundamentals
- **Voice:** warm, first-person, in the founder's (Jonno's) words. "We treat the land as borrowed from our grandkids." Speak plainly and invite people in.
- **Person / casing:** first person plural ("we", "our"); address the reader as "you". Sentence case everywhere except the wordmark and eyebrows (UPPERCASE, letterspaced).
- **Tone:** grounded and hopeful, never preachy or greenwashed. Concrete over abstract ("42 hectares", "30,000 trees") — evidence, not slogans.
- **Emoji:** none. Signature line: "A peaceful home for land, food & community."

## Visual foundations
- **Colour:** confident eucalypt green hero (`--eucalypt-600 #2E5D45`), warmed by dry-pasture gold (Kangaroo Grass), the ginger of the Highland herd (Bracken), river blue (Branch), and a Wattle yellow highlight used sparingly. Warm neutrals (Bark → Paperbark → Fleece), never cool greys. Full 50–900 ramps in `tokens/colors.css`.
- **Type:** Marcellus (classical roman) for display, headings and the wordmark; Hanken Grotesk for body & UI. Headings weight 400; letterspacing `.24em` on eyebrows, `.3em` on the wordmark.
- **Backgrounds:** warm paperbark ground (#EFE6D2); fleece (#FBF7EE) for raised surfaces; deep eucalypt panels for emphasis. Photography is full-bleed and warm/golden; corners always rounded (≥18px).
- **Shape:** over-rounded — 16–28px container radii, 999px pills for buttons/inputs/tags, soft circles and blobs as decoration. No sharp corners or hairline-only geometry.
- **Elevation:** soft warm shadows tuned to the ground (`--shadow-sm/md/lg`), low-opacity and long, never hard grey drop shadows.
- **Borders:** 1px `--line` (#E4D9C4) on surfaces; 1.5px accent for outlined controls.
- **Interaction:** hover darkens one ramp step; focus ring is 2–3px eucalypt (`--color-ring`); selection is a wattle tint. Gentle transitions (~150ms), no bounce.
- **Imagery vibe:** real land, real hands, warm golden-hour light; the actual farm — dry gold pasture, eucalypt stands, still dams, blue-green ranges, ginger Highland cattle.

## Iconography
- **Motif family:** a small set of rounded line icons at 2.6px stroke — eucalypt leaf, rolling hills, rising sun, the Branch (water), sprout, kangaroo grass. See `guidelines/brand-motifs.card.html`.
- **UI icons:** use **Lucide** (lucide.dev) at stroke-width ~2.6 to match the motif weight. No emoji, no unicode glyphs as icons.
- **Logo:** the wordmark **CARINYA PARC** set in Marcellus, letterspaced; **CP** monogram for square/avatar uses. There is currently **no pictorial mark** (an earlier Highland-bull emblem was retired) — render the name in type where a mark would go.

## Index
- `styles.css` — root entry; `@import`s all token files. Link this one file.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `layout.css` (radius/elevation/spacing), `semantic.css` (+ `.dark`).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/` — `core/` (Button, Tag, Card, Badge), `forms/` (Input, Checkbox, Radio), `feedback/` (Alert).
- `ui_kits/website/` — home-page recreation in the new brand.
- `assets/` — farm photography (hero, cattle, river valley, landscape).
- `SKILL.md` — portable skill wrapper.

## Caveats
- **Fonts** are Google-hosted (Marcellus, Hanken Grotesk) via `tokens/fonts.css`. Vendor the woff2 files for offline/production use if desired.
- **Component families** are a from-scratch core set (no component library existed in the brand yet); extend as the site grows.
