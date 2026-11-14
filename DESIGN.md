---
name: Juan Diego Portfolio
description: A pale green desk of rounded card sheets, a photo bento and a lime highlighter, carried by scroll and a floating bottom dock.
colors:
  desk: "#e8ece5"
  on-desk: "#131815"
  card: "#fcfdfa"
  ink: "#131815"
  ink-soft: "#4a544c"
  label: "#b4d08c"
  sage: "#a1ad9d"
  moss: "#4a7a40"
  hi: "#dbea8e"
  on-hi: "#131815"
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
    fontSize: "2.25rem"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.025em"
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
    fontFeature: "tnum"
  hand:
    fontFamily: "Permanent Marker, cursive"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1
rounded:
  md: "16px"
  lg: "24px"
  sheet: "28px"
  full: "9999px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "24px"
  lg: "40px"
  container: "1180px"
components:
  button-primary:
    backgroundColor: "{colors.label}"
    textColor: "{colors.on-hi}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.hi}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.card}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  pill-link:
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  pill-link-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.card}"
  chip:
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  sheet:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "40px"
  bento-tile:
    rounded: "{rounded.lg}"
    padding: "20px"
  dock:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.card}"
    rounded: "{rounded.full}"
    padding: "6px"
  dock-item-active:
    backgroundColor: "{colors.hi}"
    textColor: "{colors.on-hi}"
    rounded: "{rounded.full}"
    height: "40px"
  contact-link-hover:
    backgroundColor: "{colors.hi}"
    textColor: "{colors.on-hi}"
    rounded: "{rounded.md}"
---

# Design System: Juan Diego Portfolio

## Overview

**Creative North Star: "The Green Desk, Scrolled"**

A pale green desk with a faint dotted texture, and on it large rounded card sheets, tilted polaroids with lime tape and one lime highlighter. There is no sidebar: the page is a single centred column that the visitor scrolls, and a floating ink dock at the bottom says where they are. Each section is one sheet; inside a sheet, content sits in soft ink-tinted cards or photo tiles rather than ruled rows.

Motion is scroll-bound and optional. Sheets, tiles and project text rise into place, featured screenshots wipe open, the experience line fills and the dock's progress bar tracks the page, all driven by view() and scroll() timelines. Every one of these is gated behind support for animation-timeline and no-preference on reduced motion; without them, everything is simply present.

The 2000s web survives only as small accents: pixel sparkle and heart GIFs and the Archive's interactive terminal. The earlier cassette and J-card direction and the fixed contents rail are retired.

The world runs in light and dark. Dark keeps the same token names with swapped values, so ink surfaces (dock, Contact sheet, primary ink button) invert to pale and the desk goes near-black green.

**Key Characteristics:**
- Pale dotted desk, opaque card sheets at 28px corners, inner cards at 24px.
- Everything interactive is a pill (fully rounded); no outlined square controls.
- Lime highlighter marks the one active or hovered thing; fern is the primary action fill.
- Navigation is an auto-hiding bottom dock: a small 'you are here' pill while hidden, the full dock on hover, tap or focus.
- Scroll-driven reveals are progressive enhancement; content is visible by default.

## Colors

A cool, desaturated green family: pale desk, near-white paper, green-black ink, with fern and lime as the only bright notes.

### Primary
- **Fern Label Green** (`label`): The primary action fill (See projects), the Music bento tile, the Placeholder stamp and the logo tile. Text on it is always `on-hi`.

### Secondary
- **Sage Panel** (`sage`): The Archive sheet and the Likes bento tile; marks a sheet or tile as a different paper.

### Tertiary
- **Highlighter Lime** (`hi`): Active dock item, dock progress bar (70%), tagline strip, selection, polaroid tape (80%), the large number on the ink bento tile, Contact link hover, footer link hover.
- **Moss** (`moss`): Focus outline, timeline line and dots, quote marks, the solid Live preview pill and the CV button hover.

### Neutral
- **Pale Green Desk** (`desk`): Page ground, with a 22px dotted radial texture at 9% `on-desk`. Also the text tiles inside the About bento.
- **On-Desk** (`on-desk`): Text and tints placed directly on the desk (hero, footer). Desk tints use it at 8-15%.
- **Paper** (`card`): Section sheets, polaroid frames; text on ink.
- **Green-Black Ink** (`ink`): Text, the dock, the Contact sheet, the ink bento tile and the CV button. Inner cards and chips are ink at 5-8%; dividers are ink at 10%.
- **Soft Ink** (`ink-soft`): Secondary text: blurbs, notes, roles, placeholder captions.
- **On-Highlight** (`on-hi`): Text on lime and fern. Stays dark in both themes.

### Dark theme
Same token names, swapped values under `data-theme="dark"`: desk #121814, on-desk #e4eae1, card #1c231f, ink #e4eae1, ink-soft #a7b3aa, sage #2a382f, moss #6f9f62. `label`, `hi` and `on-hi` do not change. The theme is set before paint.

### Named Rules
**The Single Highlighter Rule.** Lime marks the active, focused or hovered thing and the tagline strip. It is never a sheet or a large tile.

**The Opaque Paper Rule.** Sheets and tiles are opaque card, desk, sage, fern or ink. Inner cards are flat ink tints (5%), never glass or backdrop blur.

**The Theme-Safe Ink Rule.** Ink and card swap in dark mode; anything that must stay dark on lime or fern uses `on-hi`, never `ink`.

## Typography

**Display and Body Font:** Bricolage Grotesque (with ui-sans-serif, system-ui)
**Label/Mono Font:** JetBrains Mono (with ui-monospace), tabular numerals
**Hand Font:** Permanent Marker (with cursive)

**Character:** A characterful grotesque does the talking at heavy weight; a mono holds facts and dates; a marker supplies the human note.

### Hierarchy
- **Display** (800, clamp(3.5rem, 11vw, 6rem), 0.9, -0.035em): The name, once, in the hero.
- **Headline** (800, 2.25rem mobile to 3rem from sm, 1, tight): Every section title (one shared component, no number or rule).
- **Title** (800, 1.875-2.25rem featured projects; 1.5-1.875rem experience; 1.125-1.25rem grid cards; tight): Item titles. The hero role is 1.5-1.875rem at 600.
- **Body** (400, 1.125rem, 1.625): Reading text, capped at 52-62ch. Secondary copy drops to 0.875rem in `ink-soft`.
- **Label** (400, 0.75rem, JetBrains Mono, tabular): Dates, facts, chips, emails, terminal. The bento stat uses mono at 3rem bold.
- **Hand** (400, 1.25rem; 1rem captions, 2.25rem quote mark): Tagline, bento tile titles, polaroid captions, quote marks.

### Named Rules
**The One Title Rule.** Sections open with the bare headline alone; no number, kicker, read time or rule above or below it.

**The Marker Is a Note Rule.** Permanent Marker is for short human notes (tagline, captions, tile titles, quote marks), never a sentence of body copy.

## Layout

One centred column, max 1180px, 16px side padding (24px sm, 32px lg), sections stacked with a 24px gap and 112px bottom padding to clear the dock. Sheets pad 24px, 40px from sm. Breakpoints: sm 640px, md 768px, lg 1024px.

- **Hero:** sits on the desk, not in a sheet. A top bar (logo, name, language and theme pills right), then text and a 260-360px tilted polaroid side by side from md.
- **About bento:** a 12px-gap grid inside a sheet padded 12-16px. Two columns on mobile; four columns from lg with 140px minimum rows, named areas placing two short text tiles, four photo tiles (three on mobile), an ink stat tile, two list tiles and a Plan B note tile.
- **Projects:** four featured cards in a 2-column grid from md (16:10 screenshot above name, blurb, chips, pills; 32px column gap, 48px row gap); then a grid of compact cards, 2 columns from sm, 3 from lg.
- **Experience:** a 260px sticky heading column beside the timeline from lg.
- **Techs:** a definition table, 200px group label beside wrapping chips, rows divided by ink at 10%.
- **Testimonials:** heading above two quote cards (2 columns from sm). Attribution is prominent: name at 1.25rem 800, role in moss semibold, context in small ink-soft.
- **Academic** two columns from sm; **Archive** text beside a 220px polaroid from md; **Contact** three link cards from sm; **Footer** four columns from lg.

## Elevation & Depth

Hybrid: tonal layering (desk, then opaque sheets, then 5% ink-tint cards) plus soft lift shadows on objects that float above the desk. Controls and inner cards carry no shadow.

### Shadow Vocabulary
- **Sheet lift** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.45), 0 30px 60px -30px rgb(0 0 0 / 0.6)`): Every section sheet; the inset line is a paper edge highlight.
- **Dock lift** (`box-shadow: 0 18px 40px -18px rgb(0 0 0 / 0.7)`): The floating dock.
- **Photo lift** (`box-shadow: 0 18px 30px -16px rgb(0 0 0 / 0.7)`): Polaroids.
- **Terminal lift** (`box-shadow: 0 20px 40px -24px rgb(0 0 0 / 0.7)`): The Archive terminal window.

### Named Rules
**The Soft Lift Rule.** Depth is one large, soft, low-opacity downward shadow on sheets, dock, photos and the terminal. Nothing inside a sheet is lifted.

## Shapes

Round and soft throughout. Sheets 28px; bento tiles, featured screenshots and inner cards 24px; Contact links, certificate slots and the terminal 16px; project logos 12px; every button, chip, pill and the dock fully rounded. Polaroids are the exception: square paper frames with a 2px ink-bordered photo, tilted 2-2.5 degrees, with a lime tape strip. The logo is a fern 14px-radius tile with mirrored three-feather wings and a lime dot. Empty image slots are hatched (135-degree ink lines at 8%); certificate slots add a 2px dashed ink border at 40%. The tagline strip is rotated -1 degree.

## Components

### Buttons
- **Shape:** Full pill, 12px 24px, bold.
- **Primary:** Fern fill with `on-hi` text; hover to lime.
- **Ink:** Ink fill with card text and a leading icon (Download CV); hover to moss, with text that holds 4.5:1 in both themes.
- **Pill link:** 8px 16px, 14px semibold, ink at 8% with a trailing up-right arrow; hover inverts to ink with card text. The solid variant (Live preview) is a moss fill; its text must hold 4.5:1 against moss and its hover in both themes (see the Theme-Safe Ink Rule).
- **Icon pill:** 48px round (hero socials) or 40px (theme), on-desk or ink at 8%; hover ink with card text.
- **Focus:** 3px moss outline at 3px offset, everywhere.

### Chips
- **Fact chip:** mono 12px, ink at 8%, full pill, 4px 12px.
- **Tech chip:** brand colour mixed 38% into card, ink text and brand logo, 12px semibold; unknown techs fall back to a fact chip.
- **Stamp:** fern fill, `on-hi`, 10px bold uppercase, marks placeholder content.

### Cards / Containers
- **Sheet:** card (sage for Archive, ink for Contact), 28px corners, 24-40px padding, sheet lift, no border.
- **Bento tile:** 24px corners, 20-32px padding, fills from desk, ink, sage or fern; photo tiles are full-bleed images.
- **Inner card:** ink at 5%, 24px corners, 20-24px padding (project grid, academic, quotes). No border, no shadow.

### Navigation
- **Dock:** auto-hides. A fixed 96px zone at the bottom centre holds a 24px hot edge across the viewport, a peek pill (ink, lime icon disc, current section title, caret, the progress bar) and the dock. Hovering the hot edge or pill, tapping the pill, or focusing a dock link slides the dock up (translateY 130% and 0.92 scale to rest, 0.45s expo-out) and fades the pill (it stays hoverable underneath so opening never pulls the target from the mouse). While open, a transparent 28px margin around the dock still counts as on it, and leaving hides it only after a 400ms grace period; Escape or a tap outside hides it. Open, every section shows its icon and name at all times, so hover never changes the dock's width (hover only lifts an item 3px): one row from xl, a 3-column panel below (2 columns under 380px). The dock itself is ink with 6px padding (fully round as a row, 24px corners as a panel) holding one 40px-tall pill per section: Phosphor icon (bold; fill when active) plus its name. The section in view gets the lime fill. A 2px lime bar at 70% along the bottom of the peek pill tracks page progress via scroll(root) and is hidden without support or under reduced motion.
- **Footer:** on the desk, column heads in small bold uppercase at 60% on-desk; links turn lime and underline on hover.

### Photo bento (signature)
About is one sheet holding a named-area grid of photo tiles and short text, list and stat tiles. Tiles rise in a three-step stagger as they enter.

### Featured project row (signature)
A 16:10 screenshot at 24px corners above name (1.5-1.875rem), blurb, tech chips and pills, two per row from md. The screenshot wipes open top-down (clip-path inset with 24px round, settling from 1.04 scale) across entry to 40% cover.

### Experience timeline (signature)
A 2px ink-at-15% line with a moss line on top that grows from the top across 15-65% cover; 12px moss dots with a card border and moss ring mark each role. The heading column is sticky beside it.

### Terminal
The Archive's interactive shell: its own fixed dark palette (#0f1511 body, #cfe8c9 text, traffic-light dots), mono 13px, 16px corners, round suggestion and quick-command chips. It does not follow the theme.

### Motion
All entrance easing is expo-out (cubic-bezier(0.16, 1, 0.3, 1)). The hero text and polaroid animate on load (0.9s; photo 1.1s from 8 degrees). Scroll motion: `rise` (40px up, 0.97 scale, 6px blur to clear) on sections, tiles and text; `wipe` on screenshots; `grow-y` on the timeline; `grow-x` on dock progress.

## Do's and Don'ts

### Do:
- **Do** gate scroll-driven motion behind `@supports (animation-timeline: view())` and `prefers-reduced-motion: no-preference`, with content fully visible without it.
- **Do** make every control a full pill and every container 16-28px rounded, by the scale above.
- **Do** put lime and fern text in `on-hi`, so it stays dark in both themes.
- **Do** use the 3px moss focus outline at 3px offset.
- **Do** give every photo and certificate slot a labelled hatched placeholder with its target path until the real asset lands.
- **Do** route every outbound social link through the one shared list (Email, LinkedIn, GitHub).

### Don't:
- **Don't** bring back a fixed side rail, sticky top nav or burger bar; the bottom dock is the navigation.
- **Don't** hide content by default and rely on motion to reveal it.
- **Don't** use glass, backdrop blur or gradient fills on surfaces; the only gradients are the hatch placeholder and the dotted desk texture.
- **Don't** use lime as a sheet or large tile fill.
- **Don't** set body copy in the marker face.
- **Don't** reintroduce the retired cassette direction, ruled numbered section headers or square outlined controls.
