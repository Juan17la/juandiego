---
name: Juan Diego Portfolio
description: A gray-green desk of opaque sheets, polaroids and a lime highlighter, with a thin layer of 2000s-web play.
colors:
  desk: "#2f3b35"
  desk-deep: "#232d28"
  card: "#e3e7df"
  ink: "#131815"
  ink-soft: "#414a43"
  rule: "#b4bcb1"
  label: "#b4d08c"
  sage: "#a4b9a1"
  moss: "#4a7a40"
  hi: "#dbea8e"
typography:
  display:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.5rem, 11vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1.25
  body:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.33
  hand:
    fontFamily: "Permanent Marker, cursive"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1
  pixel:
    fontFamily: "Silkscreen, monospace"
    fontSize: "10px"
    fontWeight: 400
    lineHeight: 1
rounded:
  sm: "2px"
  md: "6px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "24px"
  lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.label}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.hi}"
  pill:
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "6px 12px"
  pill-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.card}"
  chip:
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
  nav-item-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.card}"
    rounded: "{rounded.sm}"
    padding: "6px 8px"
  sheet:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "32px"
  badge88:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.label}"
    width: "88px"
    height: "31px"
---

# Design System: Juan Diego Portfolio

## Overview

**Creative North Star: "The Green Desk Scrapbook"**

A dim gray-green desk, and on it opaque pale-sage sheets, polaroids and one lime highlighter. The page reads as a personal scrapbook laid out for a visitor: a numbered contents panel is the navigation and the summary, each section is a sheet with the same ruled, numbered header, and ink-black print does the talking.

The 2000s web shows up as a thin layer, never the frame: an old-OS window, a marquee ticker, pixel sparkle and heart GIFs and 88x31 badges, concentrated in the 'Too online since 2012' section with small accents elsewhere. Everything else is flat, ruled and quiet, with soft lift shadows as the only depth.

The earlier cassette, cobalt and orange direction is retired; this system replaces it.

**Key Characteristics:**
- Opaque gray-green desk with a faint dotted texture; sheets are pale sage paper, never translucent.
- One ruled header pattern (number, title, read time) opens every section.
- Ink outlines (1.5-2px), 2px corners on controls, 6px on sheets.
- Lime highlighter marks the single active or hovered thing; fern green is the one action fill.
- Retro devices (window, marquee, badges, GIFs) are accents confined to one section and small touches.

## Colors

A cool, desaturated green family: dark desk, pale paper, black-green ink, with a fern and a lime as the only bright notes.

### Primary
- **Fern Label Green** (`label`): The one action fill (primary button, solid pills), the Placeholder stamp, the logo tile and badge text on ink.

### Secondary
- **Sage Panel** (`sage`): Background of the Too online sheet and the LINUX badge; marks the playful section as a different sheet.

### Tertiary
- **Highlighter Lime** (`hi`): Active and hover mark, focus outline on the desk, selection, tagline strip, timeline dots, queued-blink, polaroid tape.
- **Moss** (`moss`): Quote marks, step numbers and the filled cells of the progress bar.

### Neutral
- **Night Moss Desk** (`desk`): Page ground, with a dotted 22px radial texture at 7% white. `desk-deep` is defined for darker desk needs and is not yet used in components.
- **Pale Sage Paper** (`card`): Sheets, rail, photos, window body; also text on the desk and on ink.
- **Green-Black Ink** (`ink`): Text, all outlines, rules, the Contact sheet and inverted hover/active states.
- **Soft Moss Ink** (`ink-soft`): Secondary text, placeholder labels.
- **Lichen Rule** (`rule`): Dividers between project rows.

### Named Rules
**The Single Highlighter Rule.** Lime (#dbea8e) marks the active, focused or hovered mark and the tagline strip. It is never a large surface.

**The Opaque Paper Rule.** Content lives on opaque card, sage or ink sheets over the desk. No glass, no translucent panels.

## Typography

**Display and Body Font:** Bricolage Grotesque (with ui-sans-serif, system-ui)
**Label/Mono Font:** JetBrains Mono (with ui-monospace)
**Hand Font:** Permanent Marker (with cursive)
**Pixel Font:** Silkscreen (with monospace)

**Character:** A characterful grotesque for voice, a mono for facts, a marker for the human note, and a pixel face held to badges and ticker.

### Hierarchy
- **Display** (800, clamp(3.5rem, 11vw, 6rem), 0.9): The name, once, in the intro.
- **Headline** (800, 1.875rem on mobile, 3rem from sm, 1): Section titles in the ruled header.
- **Title** (800, 1.25-1.5rem, 1.25): Project, academic and experience titles; the intro role at 1.5-1.875rem semibold.
- **Body** (400, 1.125rem, 1.625): Reading text, capped at 56-68ch.
- **Label** (400, 0.75rem, tabular, JetBrains Mono): Numbers, read times, chips, stacks, window text. Small stamp and placeholder captions drop to 10-11px uppercase.
- **Hand** (400, 1-1.5rem): Tagline, Contents label, photo captions, group heads.
- **Pixel** (400, 10px badges, 0.875rem ticker): 88x31 badges and marquee only.

### Named Rules
**The Ruled Header Rule.** Every section opens with the same TrackHead: mono number, 800-weight title at 3xl/5xl, mono read time, a 2px bottom rule.

**The Quarantined Nostalgia Rule.** Pixel font, marquee, GIFs, window chrome and 88x31 badges are accents. Pixel type stays on badges and the ticker; GIFs vanish under reduced motion.

## Layout

Desktop (lg, 1024px and up): a fixed 340px contents panel at left (24px inset) and a single column up to 860px wide, offset 388px from the left. Below lg, the panel becomes a sticky top bar with the logo and a horizontally scrolling track picker, and the column runs full width with 16-24px side padding. Sections stack with a 24px gap; sheets pad 24px (32px from sm). Intro splits into text and a 240px polaroid from md; About and Too online split with a 200px polaroid; Projects use a 5fr/7fr image and text grid; Voices and Academic use two columns from sm. Anchored sections scroll-margin 64px on mobile, 24px on desktop.

## Elevation & Depth

Hybrid: opaque tonal layering (desk, then sheets) plus one soft lift shadow. Controls get no shadow; they are defined by ink borders.

### Shadow Vocabulary
- **Sheet lift** (`box-shadow: 0 24px 48px -24px rgb(0 0 0 / 0.65)`): Section sheets.
- **Rail lift** (`box-shadow: 0 24px 48px -20px rgb(0 0 0 / 0.6)`): Desktop contents panel.
- **Photo lift** (`box-shadow: 0 18px 30px -16px rgb(0 0 0 / 0.7)`): Polaroids.
- **Mobile bar** (`box-shadow: 0 6px 16px -8px rgb(0 0 0 / 0.5)`): Sticky mobile nav.

### Named Rules
**The Soft Lift Rule.** Depth is a single large, soft, low-opacity downward shadow on sheets, rail and photos. Borders, not shadows, define controls.

## Shapes

Mostly square-cornered: 2px on controls, chips, nav rows, placeholders and the window; 6px on sheets and the rail. Outlines are ink at 2px (1.5px on chips). Photos are square-cornered polaroids tilted -2 to 2.5 degrees with a lime tape strip. The logo is a 14px-radius tile holding a three-feather wing on each side and a lime dot. Empty image slots are hatched (135 degree ink lines at 8%); certificate slots add a dashed border. Badges are 88x31 with a raised bevel.

## Components

### Buttons
- **Shape:** Square (2px), 2px ink border.
- **Primary:** Fern label green fill, ink text, 10px 20px padding, bold; hover to highlighter lime.
- **Secondary (outline):** Transparent with ink or card border; hover fills ink or card with inverted text. Link pills (6px 12px, semibold 14px) follow this, with a solid fern variant for Live preview.
- **Focus:** 3px lime outline, 3px offset on desk; desk-green on cards.

### Chips
- 1.5px ink outline, mono 12px, 2px corners, 2px 8px padding. Intro facts use a card/70 outline on the desk. Placeholder stamp is a fern fill, 10px bold uppercase.

### Cards / Containers
- Sheets: card (or sage for Too online, ink for Contact), 6px corners, 24-32px padding, sheet lift, no border.
- Rows inside sheets divide with 2px `rule` or ink lines rather than nested cards.

### Navigation
- Contents panel: logo and role, a hand-font Contents label, then numbered rows (mono number, title, dotted leader, read time). Active row and hover invert to ink with card text; clicking blinks the number in lime before smooth scroll. Bottom: segmented 14-cell Page loaded bar (moss cells in an ink-outlined box), four 40px outlined icon links, three badges. Mobile: sticky bar with the logo and a scrolling track picker.

### Logo
- Wing mark: fern tile, ink 3px stroke, three rounded feathers mirrored per side, lime dot. 80px in the panel, 40px on mobile.

### Photo and Certificate Placeholders
- Polaroid with hatched empty slot, person glyph, 'Photo goes here' and target path; certificates use a 4:3 dashed slot with 'Certificate goes here'. Replace with real images in place.

### Window Frame
- Ink title bar with mono file name and three outlined control boxes, card body, ink 2px border, 2px corners. Used once, for the origin story with a blinking caret prompt.

### Marquee and Badges
- Silkscreen ticker with star separators on a double-ruled band, 28s linear loop, aria-hidden. 88x31 badges in ink, sage or fern fills. Pixel sparkle and heart GIFs (24-26px, pixelated) sit beside the tagline, the rail role, the Beyond copy and the Contact sign-off.

## Do's and Don'ts

### Do:
- **Do** put body and headings in Bricolage Grotesque, data (numbers, chips, times, stacks) in JetBrains Mono tabular, and handwriting only for tagline, Contents label, photo captions and small group heads.
- **Do** outline controls and chips in ink (2px for buttons, 1.5px for chips) with 2px corners; invert to ink fill and card text on hover.
- **Do** give every photo and certificate slot a labelled hatched placeholder with its target path until the real asset lands.
- **Do** honor prefers-reduced-motion: marquee, caret, queued blink and GIFs stop or hide.
- **Do** use the 3px lime focus outline on the desk and a 3px desk-green outline on cards.

### Don't:
- **Don't** use gradients, blur or translucent surfaces for content; the only gradients are the hatch placeholder and the dotted desk texture.
- **Don't** spread retro devices (window frames, marquees, badges, GIFs) beyond the Too online section and small accents.
- **Don't** set body copy in the pixel or marker faces.
- **Don't** use lime as a fill for large areas or fern green for text on card.
- **Don't** reintroduce the retired cassette, cobalt desk or orange label.
