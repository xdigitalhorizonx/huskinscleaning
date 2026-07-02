# Digital Horizon — Website

Marketing website for **Digital Horizon** — web design, SEO, and digital
marketing for **Northern Nevada** service and trade businesses (Reno, Sparks,
Carson City, Lake Tahoe, and beyond).

Built as a fast, SEO-first static site with [Astro](https://astro.build) and a
bespoke, hand-authored design system. Content mirrors digitalhorizon.dev; the
visual system is a dark, high-tech "digital sunrise" theme — every effect is
CSS/SVG, self-contained, and near-zero JavaScript.

---

## Design language

- **Palette** — void night sky `#05060a`, sunrise coral `#ff5a3c` (CTAs), horizon
  amber `#ff9d00`, sky cyan `#22e0ff`, plus dusk violet and terminal lime.
- **Type** — Chakra Petch (display/UI), Share Tech Mono (labels/readouts),
  Orbitron (numerals), Inter (body).
- **Motifs** — a rising-sun horizon logo, a live analytics/KPI console in the
  hero, a Search Console visibility panel, scanlines, subtle glitch headlines,
  and a marquee ticker.

The whole system lives in `src/styles/global.css` and a set of small Astro
components.

## Pages (15 routes)

- **Home** — hero + live analytics console, stats, the three services, the
  project-to-partnership process, a Search Console visibility panel,
  testimonials, industries served, and journal preview.
- **Services** — Web Design, SEO, and Digital Marketing in depth + process + FAQ.
- **About** — who we are, studio profile, values, and industries.
- **Locations** — service areas across Northern Nevada.
- **Blog** — index + 8 article pages (`/blog/[slug]`).
- **Contact** — a project-inquiry form (name, company, email, phone, service,
  budget, message) via `mailto:`, plus NAP and channels.
- **404** — "over the horizon."

## SEO & performance

- Per-page titles, meta descriptions, canonical URLs, OG/Twitter cards.
- schema.org JSON-LD: `ProfessionalService`/`LocalBusiness` (with NAP, geo, and
  `areaServed`), `WebSite`, `BreadcrumbList`, `Article`, and `FAQPage`.
- Auto-generated `sitemap-index.xml` + `robots.txt`.
- Accessible markup (skip link, semantic landmarks, focus states) and full
  `prefers-reduced-motion` support.

## Tech stack

- **Astro 5** — static output, component-based, near-zero client JS.
- **Hand-authored CSS design system** (`src/styles/global.css`).
- **@astrojs/sitemap** — sitemap generation.
- **Fontsource** — self-hosted Chakra Petch, Share Tech Mono, Orbitron, Inter.
- **sharp** — build-time generation of the OG image and app icons.

## Project structure

```
src/
  data/site.ts            # single source of truth: NAP, services, process, posts, locations, FAQs
  lib/schema.ts           # schema.org JSON-LD builders (LocalBusiness, Article, ...)
  layouts/BaseLayout.astro # <head> SEO, fonts, header/footer wrapper
  components/             # Header, Footer, Logo, ServiceCard, PostCard, Marquee, ...
  pages/                  # index, services, about, locations, blog/[slug], contact, 404
  styles/global.css       # the design system
public/                   # robots.txt, favicon, og-image, app icons, manifest
scripts/                  # generate-og.mjs, generate-icons.mjs
```

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # → dist/ (static site)
npm run preview    # serve the production build locally
```

Regenerate brand images after editing the scripts:

```bash
node scripts/generate-icons.mjs
node scripts/generate-og.mjs
```

## Notes for go-live

- Business data (NAP, services, locations, posts, FAQs) lives in
  `src/data/site.ts`. Social links and the office address are set from the live
  site — confirm before launch.
- The contact form composes a `mailto:` to `hello@digitalhorizon.dev`. Wire it to
  a Formspree/Web3Forms endpoint in `src/pages/contact.astro` for richer delivery.
- Blog article bodies are on-topic drafts expanding the real titles/excerpts from
  digitalhorizon.dev — replace with the full published copy when ready.
- Domain is set to `https://digitalhorizon.dev` in `astro.config.mjs`.
