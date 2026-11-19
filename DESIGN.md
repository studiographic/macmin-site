---
name: MacMin
description: The page is a Mac desktop; every section is a window on one authored wallpaper.
colors:
  yellow: "#f5b82e"
  yellow-light: "#ffd36b"
  yellow-ink: "#3a2a05"
  amber-link: "#8a5c00"
  amber-link-dark: "#f5c552"
  amber-accent: "#c98a00"
  selection-blue: "#0a63d6"
  selection-blue-dark: "#1f66d8"
  window: "#ffffff"
  window-secondary: "#f5f5f4"
  window-dark: "#232325"
  window-secondary-dark: "#2b2b2e"
  ink: "#1d1d1f"
  ink-muted: "#5f5f64"
  ink-dark: "#f2f2f4"
  ink-muted-dark: "#a8a8b0"
  hairline: "rgba(0, 0, 0, 0.1)"
  hairline-dark: "rgba(255, 255, 255, 0.1)"
  sidebar-vibrancy: "rgba(236, 234, 238, 0.82)"
  sidebar-vibrancy-dark: "rgba(44, 42, 50, 0.82)"
  menubar-vibrancy: "rgba(246, 244, 250, 0.62)"
  menubar-vibrancy-dark: "rgba(30, 28, 40, 0.55)"
  wallpaper-amber: "#e9a23a"
  light-close: "#ff5f57"
  light-minimize: "#febc2e"
  light-zoom: "#28c840"
  light-inactive: "#cfcfd3"
  light-inactive-dark: "#4a4a4e"
  media-chrome: "#1d1d1f"
  switch-on: "#34c759"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, sans-serif"
    fontSize: "clamp(42px, 5.6vw, 76px)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, sans-serif"
    fontSize: "clamp(28px, 3.3vw, 40px)"
    fontWeight: 750
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, sans-serif"
    fontSize: "20px"
    fontWeight: 650
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  lede:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Helvetica Neue, sans-serif"
    fontSize: "clamp(17px, 1.6vw, 19px)"
    fontWeight: 400
    lineHeight: 1.5
  window-title:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    letterSpacing: "0"
  sidebar-label:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, sans-serif"
    fontSize: "11.5px"
    fontWeight: 700
  numeral:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif"
    fontSize: "56px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "tnum"
  mono:
    fontFamily: "ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "13px"
    lineHeight: 1.5
rounded:
  menu-item: "5px"
  sidebar-row: "7px"
  button: "9px"
  button-large: "11px"
  window: "12px"
  alert: "16px"
  pill: "999px"
spacing:
  desktop-column-gap: "24px"
  desktop-row-gap: "72px"
  desktop-row-gap-stacked: "40px"
  desktop-row-gap-phone: "22px"
  gutter: "28px"
  gutter-stacked: "16px"
  gutter-phone: "10px"
  window-body: "clamp(22px, 3.4vw, 44px)"
  titlebar-height: "38px"
  menubar-height: "30px"
components:
  button-primary:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.yellow-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.button}"
    padding: "10px 18px"
  button-primary-large:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.yellow-ink}"
    rounded: "{rounded.button-large}"
    padding: "13px 24px"
  button-quiet:
    backgroundColor: "{colors.window-secondary}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "10px 18px"
  window:
    backgroundColor: "{colors.window}"
    textColor: "{colors.ink}"
    rounded: "{rounded.window}"
    padding: "{spacing.window-body}"
  titlebar:
    backgroundColor: "{colors.window}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.window-title}"
    height: "{spacing.titlebar-height}"
    padding: "0 80px"
  traffic-light:
    size: "12px"
    rounded: "{rounded.pill}"
  sidebar-row-selected:
    backgroundColor: "{colors.selection-blue}"
    textColor: "{colors.window}"
    rounded: "{rounded.sidebar-row}"
    padding: "7px 10px"
  menubar:
    backgroundColor: "{colors.menubar-vibrancy}"
    textColor: "{colors.ink}"
    height: "{spacing.menubar-height}"
    padding: "0 10px"
  chip-unlocked:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.yellow-ink}"
    rounded: "{rounded.pill}"
    padding: "3px 9px"
  alert:
    backgroundColor: "{colors.window}"
    rounded: "{rounded.alert}"
    padding: "26px 24px 20px"
    width: "420px"
---

# Design System: MacMin

## Overview

**Creative North Star: "The Desktop Itself"**

The page does not describe a Mac; it is one. A single authored wallpaper sits fixed behind everything, a translucent menu bar is the navigation, and every section of content is a real-looking macOS window with traffic lights and a centred title. Windows are titled like the apps they borrow from (a history `.rtf`, Finder, System Settings, About This Mac, an installer, Help) and their internals follow those apps' anatomy: sidebars with vibrancy, grouped settings rows, a QuickTime player bar. The product itself performs inside the windows: the Liquid Glass clip plays in a QuickTime-style window, and the Effects window previews all ten. Traffic lights are decoration; nothing on the page minimizes.

Density is that of a working desktop, not a marketing page. Windows overlap at wide sizes the way someone actually arranges them, and content inside each window is set as native UI: system type, hairline dividers, blue selection, one yellow default button. There are no cards outside window anatomy and no borders beyond the hairlines a Mac draws itself. Light and dark follow the visitor's system setting with no toggle, as real windows do.

Motion belongs to the clips. The page itself stays still: no scroll-driven animation, no minimize. What moves is small and state-driven (the install scenes while in view, chip and alert feedback, the effect picker's progress line), and Reduce Motion removes all of it.

**Key Characteristics:**
- One authored wallpaper (soft amber dunes, pale yellow to burnt orange) as the permanent ground. Yellow on the wallpaper is ground, not an action: inside windows, yellow still marks only the primary action.
- macOS window chrome as the only container: titlebar, traffic lights, centred title, 12px corners, layered window shadow.
- Menu bar as nav; the Effects window is the effect picker. No Dock.
- MacMin yellow marks the one primary action per window; selection is system blue.
- System SF type throughout; no web fonts.
- Light and dark from `prefers-color-scheme`, nothing else.

## Colors

A native macOS neutral set carrying a single warm yellow, laid over a saturated authored wallpaper.

### Primary
- **MacMin Yellow** (`yellow`, with `yellow-light` as the top of its gradient): the default push button, the unlocked chips and tallies, the timeline progress line, the QuickTime progress fill, the current installer step, and the check discs in perk lists. Text on it is always **Yellow Ink** (`yellow-ink`).
- **Amber Link** (`amber-link`, `amber-link-dark` in dark): inline links, text buttons ("See the tour", "Send it to your Mac"), disclosure links and the focus ring. It is the yellow pushed dark enough to pass as text on white, and lifted toward gold on dark windows.
- **Amber Accent** (`amber-accent`): the yellow when it must be read as a word on a light window (the "cool" in the headline, the unlocked counter numeral, the closing count). In dark mode these switch to MacMin Yellow.

### Secondary
- **Selection Blue** (`selection-blue`, `selection-blue-dark`): selected sidebar rows, the mobile menu hover, text selection and the download progress bar. It is the system highlight, never a call to action.

### Neutral
- **Window** / **Window Secondary** (`window`, `window-secondary`; dark `window-dark`, `window-secondary-dark`): window bodies, titlebars, settings groups, quiet buttons, `kbd`.
- **Ink** / **Ink Muted** (`ink`, `ink-muted`; dark `ink-dark`, `ink-muted-dark`): body text; window titles, captions, ledes and secondary lines.
- **Hairline** (`hairline`, `hairline-dark`): the only divider: under titlebars, between rows, beside sidebars.
- **Vibrancy fills** (`sidebar-vibrancy`, `menubar-vibrancy` and dark variants): translucent fills that only work with their backdrop blur (see Elevation).
- **Media Chrome** (`media-chrome`): dark titlebar and control bar on QuickTime-style player windows, in both themes.
- **System fixtures** (`light-close`, `light-minimize`, `light-zoom`, `light-inactive`, `switch-on`): Apple's own control colours, used only on the controls they belong to.
- **Wallpaper Amber** (`wallpaper-amber`): the body fallback behind the wallpaper image.

### Named Rules
**The One Yellow Rule.** Each window carries at most one yellow push button, and it is the action that window exists for. A second action beside it is a quiet button.

**The System Owns Blue Rule.** Blue means "selected", as in Finder and Settings. It never labels a call to action, and yellow never marks a selection.

**The Native Fixtures Rule.** Traffic-light red, yellow and green and the switch green appear only on traffic lights and switches. They are not palette colours.

## Typography

**Display Font:** SF Pro Display via `-apple-system` (Helvetica Neue fallback)
**Body Font:** SF Pro Text via `-apple-system` (Helvetica Neue, Arial fallback)
**Label/Mono Font:** SF Mono via `ui-monospace` (Menlo fallback), for commands and checksums only

**Character:** The Mac's own voice, pushed heavy and tight at the top of the scale so the welcome headline has weight, then settling into exact system sizes for chrome.

### Hierarchy
- **Display** (800, clamp(42px, 5.6vw, 76px), 0.98): the welcome window headline only.
- **Headline** (750, clamp(28px, 3.3vw, 40px), 1.08): the one heading inside each content window.
- **Title** (650, 18–24px, ~1.25): milestones, feature terms, settings rows, the effect name in the preview pane.
- **Body** (400, 16px, 1.5): running text; ledes step up to 17–19px in Ink Muted, capped near 56–64ch.
- **Window Title** (600, 13px): centred in the titlebar, Ink Muted, truncates with an ellipsis.
- **Sidebar Label** (700, 11.5–13px): sidebar and group headers in Ink Muted, sentence case.
- **Numeral** (800, 48–88px, tabular): the price and the effects counter.

### Named Rules
**The System Face Rule.** Every role uses the platform system stack. The site is a Mac; it speaks in the Mac's type.

**The Tabular Count Rule.** Every number that changes or is compared (counter, tallies, years, price, step numbers) is set with tabular figures.

## Layout

The page is a desktop of stacked, sometimes overlapping, windows on a 12-column grid (max 1320px, 24px column gap, 72px row gap, 28px side gutter, 72px bottom padding). Windows take deliberately uneven spans and offsets so the stack reads as arranged by hand, not centred cards.

- **1100px and up:** two-column overlap in the first viewport. Welcome spans columns 1–7; the player window spans 7–12, drops 150px and sits above it in z-order. Welcome content caps at 520px so it stays clear of the overlapping player. Later windows alternate offsets (2/10, 1/11, 3/10, 1/10, 4/9, 1/12).
- **Below 1100px:** a single column, 40px row gap, 16px gutter. The player still tucks up 24px under the welcome window and indents 12% to keep the overlap.
- **760px and below (phone):** 10px gutter, 22px row gap, no overlap. The clip window comes first, then the welcome window; the welcome perks hide. Window sidebars either hide (Settings, Installer) or become a horizontal pill scroller under the preview (Finder). The menu bar collapses to a single menu toggle.

Inside windows, body padding scales with clamp(22px, 3.4vw, 44px); sidebar windows use a fixed 200–220px sidebar beside a fluid pane.

## Elevation & Depth

Depth is the Mac's: windows float over the wallpaper on a layered shadow, and translucent chrome (menu bar, sidebars) shows the wallpaper through a blur. Inside a window everything is flat and divided by hairlines.

### Shadow Vocabulary
- **Window** (`--win-shadow`, light: `0 0 0 0.5px rgba(0,0,0,.22), 0 24px 60px -10px rgba(16,10,50,.45), 0 8px 22px -6px rgba(16,10,50,.3)`): every window, the alert, menu dropdowns and in-scene mini windows. Dark swaps to a light 0.5px edge plus a deeper black drop.
- **Push button** (`inset 0 .5px 0 rgba(255,255,255,.6), 0 0 0 .5px rgba(120,80,0,.45), 0 1px 2px rgba(60,40,0,.25)`): the yellow button's bevel; the quiet button uses the same shape in neutral greys.

### Named Rules
**The Vibrancy Pairing Rule.** A translucent fill is always paired with its backdrop blur: menu bar 30px/saturate 1.8, sidebars 20px/1.6. Never use a vibrancy fill without the blur, or a blur on a window body.

**The One Window Shadow Rule.** Anything that floats above the wallpaper uses the window shadow. Nothing inside a window is lifted.

## Shapes

Gently rounded Mac geometry: 12px windows, 9px push buttons (11px large), 7px sidebar rows, 5px menu-bar items, 16px alerts, and full pills for chips, badges and the mobile picker. Traffic lights are 12px circles with an 8px gap. Inner groups (settings rows, verify panel) reuse the 12px window radius. Hairlines are 1px; control edges are 0.5px.

## Components

### Buttons
- **Shape:** Mac push button (9px; 11px for the large buy button).
- **Primary:** MacMin Yellow gradient (`yellow-light` to `yellow`), Yellow Ink text, 600 weight, 10px 18px.
- **Hover / Active:** brightness 1.04 on hover, 0.95 when pressed; no movement.
- **Quiet:** Window Secondary fill, Ink text, neutral bevel; the second action in a pair.
- **Text button:** Amber Link, underlined, 600 14px, for minor actions.

### Chips and badges
- **Chips:** pill, 12.5px 600, hairline border. Old effects sit muted on Window; unlocked effects pop in yellow.
- **Badges:** compatibility pills tinted green, yellow or grey at low alpha, with matching dark text.

### Windows
- **Corner Style:** 12px, clipped.
- **Titlebar:** 38px, Window fill, hairline below, centred 13px title. Media windows use the dark Media Chrome titlebar in both themes.
- **Traffic lights:** red, yellow, green at left. Only yellow is a real button: an 8px invisible hit area around it, and a minus glyph that shows on titlebar hover or focus.
- **Inactive state:** the window most in view is the key window. All others grey their traffic lights (`light-inactive`); hovering a titlebar brings the colours back.
- **Sidebars:** vibrancy fill with blur, hairline on the right, rows 7px with Selection Blue for the current item.

### Navigation
- **Menu bar:** 30px, sticky, vibrancy with blur, 13.5px. App name in bold at left, section menus, then "Get MacMin" and the MacMin glyph at right. Items highlight with a translucent grey 5px pill. The glyph opens a dropdown styled as a window.
- **Mobile:** menus collapse behind a toggle into a window-styled list; the glyph dropdown hides.

### History rail
A still, left-to-right rail: four stops (Cheetah +2, Panther to Sequoia +0, Tahoe +0, MacMin +10) on a 2px line that turns yellow at the MacMin end, with a "12 ways" total below. Vertical on phones. It never reacts to scroll.

### Settings rows and alert
- **Settings group:** a 12px rounded panel of rows (28px icon, text, switch) divided by hairlines; switches are iOS-style, green when on.
- **Alert:** centred 420px dialog with app icon, 16px corners, two equal buttons (quiet and yellow). A wrong choice triggers a horizontal shake.

## Do's and Don'ts

### Do:
- **Do** put every new section in a macOS window with a titlebar, traffic lights and a centred title named like a real document or app pane.
- **Do** give each window at most one yellow push button, with Yellow Ink text.
- **Do** use Selection Blue only for selected rows and progress, as macOS does.
- **Do** pair every vibrancy fill with its backdrop blur.
- **Do** follow `prefers-color-scheme` for light and dark, and define new colours in both themes.
- **Do** keep the page still: let the effect clips carry the motion, never tie animation to scroll, and make every animation stop under Reduce Motion.
- **Do** put the clip window first on phones.

### Don't:
- **Don't** use cards, borders or panels outside real window anatomy; hairlines and settings groups are the only internal structure.
- **Don't** use yellow for selection, or blue for a call to action.
- **Don't** use traffic-light or switch colours anywhere but on those controls.
- **Don't** load web fonts or display faces; the system stack is the type.
- **Don't** replace the authored wallpaper with Apple's wallpapers or a flat colour.
- **Don't** add looping or ambient animation to chrome; clips and in-view demos play only while on screen.
