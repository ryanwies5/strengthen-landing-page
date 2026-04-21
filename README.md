# Strengthen

A platform for creators, coaches, and builders — podcasts, motion content, strategic thinking, and coaching in one place.

## Stack

Lightweight MVP. Keep dependencies minimal to reduce attack surface and maintenance burden.

| Tool | Purpose |
|---|---|
| **Bun** | Runtime, package manager, bundler — replaces Node/npm entirely |
| **Vite** | Dev server + build tooling |
| **React 18 + TypeScript** | UI framework |
| **Tailwind CSS v3** | Utility-first styling |
| **shadcn/ui** | Headless component primitives (`src/components/ShadUI/`) |
| **base-ui** | Low-level accessible primitives where shadcn doesn't cover |
| **lucide-react** | Icons — only import what you use |

> **Dependency rule:** Do not add new packages without good reason. Prefer native browser APIs, Tailwind utilities, and composition of existing primitives over new libraries.

---

## Commands

```bash
bun install       # install dependencies
bun dev           # start dev server
bun run build     # production build → dist/
bun run lint      # lint check
```

---

## Design System — Neomorphic Light

This project uses a **neomorphic light-mode** design language. All new components must follow this guide.

### Core Principle

Surfaces appear physically raised or pressed into a light background using directional box shadows. The public-facing site is **light mode only** — do not add dark mode variants to page components.

### Brand Colors

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#004362` | Text on light surfaces, icons |
| `primary-container` | `#145b80` | Button fills, active states |
| `surface` | `#ffffff` | All card/page backgrounds |
| `on-surface` | `#191c1e` | Body text |
| `on-surface-variant` | `#41484e` | Secondary/muted text |
| `outline-variant` | `#c0c7cf` | Dividers, subtle borders |

### Typography

| Role | Family | Weight |
|---|---|---|
| Headings (`font-headline`) | Manrope | 800 (extrabold) |
| Body (`font-body`) | Manrope | 400–500 |
| Labels/UI (`font-label`) | Manrope | 600–700 |

Font loaded via Google Fonts in `index.html`. Do not import it via npm.

### Elevation Utilities

Defined in `src/index.css`. Use these — do not write arbitrary `box-shadow` values.

| Class | When to use |
|---|---|
| `neomorph-extruded` | Card or panel raised above surface (default resting state) |
| `neomorph-pressed` | Element recessed into surface (inputs, selected nav link, active state) |
| `neomorph-primary-btn` | Filled CTA button with deep directional shadow |
| `neomorph-icon-recessed` | Small icon container subtly recessed |
| `glass-nav` | Navbar: white 80% opacity + `backdrop-blur` |

### Border Radius Scale

| Class | Value | Usage |
|---|---|---|
| `rounded` | `1rem` | Inputs, badges, small elements |
| `rounded-lg` | `2rem` | Cards, section panels |
| `rounded-xl` | `3rem` | Page wrapper, hero card |
| `rounded-full` | `9999px` | Pill buttons, social icon circles |

### shadcn/ui & base-ui Conventions

**Do not edit files inside `src/components/ShadUI/`.** Apply the design system at the usage site:

| Component | Class overrides to apply |
|---|---|
| Button (primary CTA) | `neomorph-primary-btn rounded-full text-white font-bold` |
| Button (secondary) | `neomorph-extruded bg-surface rounded-full text-[#004362] font-bold` |
| Card | Replace `border` with `neomorph-extruded rounded-lg` |
| Input / Textarea | `neomorph-pressed border-none rounded bg-surface` |
| Active nav link | `neomorph-pressed rounded-full` instead of `bg-muted` |

---

## Project Structure

```
SGP/
  index.html               # Google Fonts <link> tags live here
  tailwind.config.js       # Design tokens — colors, fonts, radii
  src/
    App.tsx                # Root — wraps sections in neomorph-extruded page container
    index.css              # Tailwind base + neomorph utility classes + CSS vars
    components/
      Website/             # Page sections: Navbar, Hero, Podcast, MotionGraphics, etc.
      ShadUI/              # shadcn/ui primitives — DO NOT EDIT
    hooks/
    lib/
```

## CSS Variable Reference

These variables in `src/index.css` drive all shadcn component colours. Changing them recolours the entire site.

```css
--primary: 200 100% 19%;          /* #004362 */
--primary-foreground: 0 0% 100%;
--background: 0 0% 100%;          /* #ffffff */
--foreground: 210 8% 10%;         /* #191c1e */
--muted-foreground: 210 6% 27%;   /* #41484e */
--radius: 1rem;
```

## Deploy

Build output in `dist/` is deployed to Google Cloud Run via `cloudbuild.yaml`.
