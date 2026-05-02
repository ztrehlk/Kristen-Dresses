# Kristen Andron — Portfolio / Lookbook Site

**Status:** approved
**Date:** 2026-05-02
**Type:** Static SPA, GitHub Pages

## Goal

A sleek, fashion-editorial portfolio site for Kristen — a designer who does both bespoke wedding gowns ("Bridal") and a ready-to-wear line under the brand name **"Kristen Andron"** ("Atelier"). The site is portfolio/lookbook-only at this stage; structure should leave clean room for adding shop functionality later. The visual target is the negative space of REISS / Net-a-Porter / Staud, with the polish and motion design of Stripe.

## Stack

- **Vite + React 18 + TypeScript**
- **Tailwind CSS** with a custom design-token layer (CSS variables driving Tailwind theme) — not a default Tailwind look
- **Framer Motion** for animations
- **React Router (HashRouter)** — routes work on GitHub Pages without server config
- **GitHub Actions** → publishes the Vite build to `gh-pages`
- **Live URL:** `https://ztrehlk.github.io/Kristen-Dresses/`

## Brand & Aesthetic

- **Brand:** "Kristen Andron"
- **Palette:**
  - Bone `#FAF8F5` (background)
  - Ink `#0F0F10` (text)
  - Pewter `#8B847A` (secondary text, dividers)
  - Champagne `#C9B69A` (single accent — used sparingly)
- **Typography:**
  - Display serif: Cormorant Garamond (Google Fonts) — large, tight tracking, italic where editorial
  - Body / UI sans: Inter (Google Fonts) — wide tracking on small caps labels
- **Layout language:** generous whitespace, full-bleed photography, asymmetric grids, hairline dividers, oversized headings, lowercase labels with wide tracking.

## Routes & Page Behavior

| Route        | Purpose                                                                                       |
| ------------ | --------------------------------------------------------------------------------------------- |
| `/`          | Hero (full-bleed image + display title), split intro to Bridal & Atelier, About teaser, footer |
| `/bridal`    | Lookbook of wedding gowns. Asymmetric grid, hover caption, click → lightbox detail            |
| `/atelier`   | Kristen Andron RTW line. Same grid treatment, sub-grouped by collection                       |
| `/about`     | Editorial spread: portrait + bio + pull quote + philosophy                                    |
| `/contact`   | Inquiry form (mailto), social links, email                                                    |

A 404 fallback redirects to `/`.

## Animation / Interaction

- **Page transitions:** soft cross-fade + slight scale, ~400ms cubic-bezier easing
- **Scroll reveal:** images and headings fade + rise ~24px on entry, staggered children
- **Nav:** hides on scroll-down, returns on scroll-up (Net-a-Porter cue); changes from transparent to solid as the user leaves the hero
- **Image hover:** subtle 1.04 zoom + caption slide-in from bottom
- **Custom cursor:** desktop only — small ink dot that scales over interactive elements; respects `prefers-reduced-motion` (disabled)
- **Lightbox:** keyboard nav (arrows, esc), backdrop click closes, smooth open/close
- **Reduced motion:** all motion respects `prefers-reduced-motion: reduce` — fades become instant, transforms removed

## Component Architecture

```
src/
  components/
    layout/
      Nav.tsx              top nav, hide-on-scroll
      Footer.tsx
      PageTransition.tsx   wraps route content with motion
    ui/
      Cursor.tsx           desktop cursor companion
      Lightbox.tsx         keyboard-navigable image viewer
      ScrollReveal.tsx     fade+rise on intersection
      Button.tsx, Link.tsx
    sections/
      Hero.tsx
      LookbookGrid.tsx     asymmetric grid driven by data
      EditorialSplit.tsx   two-column image+text
      AboutHero.tsx
  data/
    collections.ts         typed lookbook data
  hooks/
    useScrollDirection.ts
    useReducedMotion.ts
    useLockBodyScroll.ts
  pages/
    Home.tsx, Bridal.tsx, Atelier.tsx, About.tsx, Contact.tsx
  styles/
    tokens.css             CSS variables (palette, type, spacing)
    index.css              tailwind + base
  App.tsx, main.tsx
```

Each component has one purpose and a small interface. Pages compose sections; sections are dumb-rendered from `data/collections.ts` so swapping in real photos is a one-line edit per item.

## Data Model

```ts
// data/collections.ts
type Look = {
  id: string;
  title: string;
  year: number;
  imageUrl: string;
  span?: 'normal' | 'tall' | 'wide'; // grid hint
  description?: string;
};

type Collection = {
  id: string;
  name: string;
  description: string;
  looks: Look[];
};

export const bridal: Collection = { ... };
export const atelier: Collection[] = [ /* one or more collections */ ];
```

Placeholder images come from Unsplash using direct CDN URLs with curated fashion/bridal queries — they look real, not gray boxes. Each entry is a one-line replacement when real photos arrive.

## Deployment

- `vite.config.ts` sets `base: '/Kristen-Dresses/'`
- GitHub Actions workflow on push to `main`:
  1. Setup Node
  2. `npm ci`
  3. `npm run build`
  4. Publish `dist/` to `gh-pages` branch via `peaceiris/actions-gh-pages`
- Repo Settings → Pages must be set to serve from the `gh-pages` branch (one-time manual step the user does after the first deploy)

## Out of Scope (now)

- Real e-commerce / cart / checkout — design leaves room for it but does not build it
- CMS — content is a typed TS file, easy to migrate to a CMS later
- Backend / form submission — contact form opens user's mail client via `mailto:`
- Analytics / SEO meta polish beyond basics — basic title/description only

## Success Criteria

- Site builds with no errors and deploys to GitHub Pages
- All five routes render correctly with the chosen palette + type
- Animations are smooth (60fps on a typical laptop) and respect `prefers-reduced-motion`
- Layout is responsive: phone, tablet, desktop
- Swapping a placeholder image to a real image requires only editing `data/collections.ts`
- The site looks editorial-fashion (REISS / Staud / Net-a-Porter neighborhood), not a generic Tailwind starter
