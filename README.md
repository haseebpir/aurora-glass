# Aurora Glass — a frosted-glass skin for Video.js v10

**Aurora Glass** re-skins the Video.js v10 player as a sheet of frosted glass
floating over the video: a detached pill deck with a blurred, tinted surface,
soft diffused shadows, and a single aurora gradient — violet → cyan → mint —
spent only where the eye should go: the seek fill, the volume fill and the
buffering spinner. Everything else stays quiet glass and one clean typeface,
so the skin feels like a 2026 streaming product, not a theme pasted on top.

It is painted onto the standard v10 components, so every control, menu,
hotkey and announcement keeps working exactly as the framework intends.

Built for the **Video.js Skins Design Challenge** (Contra × Mux).
Design file: [Aurora Glass — Video.js v10 Skin (Figma)](https://www.figma.com/design/sNC6EfwTYauoRLs92zVwbi) — see the "Variation 2 — Aurora Glass" page.

## Run it locally

```sh
npm install
npm run dev        # workbench: test sizes, aspect ratios, colour schemes, RTL, languages
npm run typecheck  # tsc --noEmit
npm run build      # production build
```

The workbench plays real video (NASA's *Cosmic Dawn* trailer, hosted on
Mux) — no placeholder media. Change the preview media in
`apps/preview/src/frame/player`.

## The design system

- **Frosted glass everywhere** — the deck is a dark-tinted glass at 62%
  opacity (`rgb(12 15 27 / 0.62)`); the deck and the centre play button
  use a deeper optical glass, `blur(28px) saturate(1.85) brightness(0.95)`,
  while menus and popovers use a stronger 80% tint at `blur(22px)`,
  all with a 1px hairline stroke (`rgb(255 255 255 / 0.14)`) and soft
  diffused shadows. The tint is deliberately high-opacity so text stays
  readable over bright footage.
- **Floating pill deck** — the control bar is a centred pill at 56% of
  the player width (near-full width on small players), one row tall at
  62px with a 28px radius and a specular rim — a bright hairline along
  its top edge, so it reads as coated glass. The seek slider rides the
  pill's top rim instead of taking a row of its own. Nothing touches
  the frame.
- **One gradient, spent carefully** — the aurora gradient
  (`linear-gradient(90deg, #7C5CFF → #33CCFF 52% → #3DFFAA)`) appears
  only on the seek fill, the vertical volume fill and the buffering
  spinner. It drifts slowly (8s ease-in-out) and only when the user
  allows motion. Solid cyan `#33CCFF` carries focus rings and active
  states.
- **Type:** *Inter* throughout; the time readout is 13px/500 with
  line-height 1 and tabular figures, so the clock never jitters.
  Spacing follows a strict 4/8/12/16 rhythm throughout the deck, menus
  and tooltips.
- **Icons:** 24 rounded stroke-style glyphs on a 24×24 grid (2-weight
  stroke, round caps and joins) in `src/video/icons.ts`, with soft filled
  play/pause and a gradient-ring spinner.
- **Light scheme** — pale glass (`rgb(250 251 255 / 0.66)`) with ink text
  (`#141836`); the gradient is unchanged, but the solid accent and focus
  colour deepen to violet `#6C4DF0` so rings and state marks keep
  contrast on the pale panels.

## Signature moments

- **Gradient seek bar** — the fill is the aurora gradient over the real,
  continuous slider (driven by `--media-slider-fill`); the buffer is a
  quiet white run ahead of it.
- **Glass chrome** — the title sits in its own glass pill, the top
  actions are glass circles, and the centre play button is a 72px soft
  glass disc.
- **Aurora spinner** — buffering shows a rotating ring painted with the
  aurora gradient instead of a generic loader.
- **Glass menus** — settings, captions and volume surfaces are stronger
  glass (80% tint, 22px blur, 18px radius) so options stay legible over
  any frame.
- **Captions** ride above the floating deck while controls are up, so
  subtitles are never hidden behind the pill.

## Accessibility

- Touch targets are **44×44px**; the solid cyan **focus ring is never
  removed**, and the deck stays visible while anything inside it has
  keyboard focus.
- Works in **light and dark colour schemes** — the skin syncs to the
  host page's `color-scheme` (and to the OS preference), deepening the
  accent in the light scheme to keep contrast.
- `prefers-reduced-motion` stops the gradient drift and removes
  transitions.
- **Forced-colors** fallbacks: the gradient retires, fills become the
  system Highlight colour and the buffer goes hatched, so every control
  stays legible.
- The scaffold's hotkeys (`Space`, `M`, `F`, arrow keys), status
  announcer and error dialog are all kept; tab order matches visual
  order because layout follows source order.

## Explored directions

Three glass directions were fully prototyped for this challenge:
Aurora Glass itself, an Apple TV+-style floating capsule, and a
Video.js v10 "Frosted" study in the platform's own design language.
Reviewing them side by side, they read as one family — so instead of
splitting the glass vote three ways, the strongest ideas of the other
two were merged into Aurora Glass: the capsule's deeper optical glass
(blur 28px with a brightness step, for calmer, larger glyph presence)
and the Frosted study's token discipline (strict 4/8/12/16 spacing,
13px tabular time, and a focus halo that fades in rather than popping).
**Aurora Glass is the consolidated glass entry.**

Two non-glass concepts were also prototyped: a retro pixel-arcade skin
(segmented XP-bar seek bar, pixel icon set) and an editorial cinema
skin (serif title cards, hairline rules). They remain separate
directions in the same Figma file.

## Project structure

```
src/video/skin.html   – component markup (unchanged from the Scaffold skin)
src/video/skin.ts     – registers the Aurora icon set + colour-scheme sync
src/video/skin.css    – the Aurora Glass layer: tokens, glass deck, states, responsive & a11y blocks
src/video/icons.ts    – the 24-icon rounded stroke set (24×24 grid)
src/skin.css          – font import (Inter)
apps/preview/         – the Video.js workbench used for testing and the live demo
```

The skin is a paint layer over fully working controls — no behaviour is
forked, which is what keeps every menu, gesture and keyboard path intact.

## How it was built

Designed first in Figma (tokens, desktop and mobile players, states),
then implemented with an AI coding agent against the version-matched
Video.js v10.3.0 docs: scaffold project, custom icon set, CSS layer,
then a fidelity pass comparing the running preview against the Figma
frames — followed by checks at desktop and mobile widths, both colour
schemes, keyboard-only navigation, reduced motion and forced colours.

## License

Submitted under the challenge terms: Apache License 2.0.

## Credits

Designed & built by **Haseeb P.** — CEO, The Hitek Agency (Houston, USA).
