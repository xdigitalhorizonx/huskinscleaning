# Forward Observations Group — Website

A flashy, anime-throwback rebrand of the website for **Forward Observations Group
(FOG)** — a veteran media collective. The design is an original homage to late-80s
/ 90s mecha & cyberpunk anime (Evangelion-style NERV HUDs, Akira's neon Neo-Tokyo):
void black, NERV amber, Akira red, cyan signage, scanlines, glitch text, targeting
reticles, katakana accents, and a synthwave grid.

Built as a fast, static site with [Astro](https://astro.build) and a bespoke,
hand-authored design system. Every "flashy" effect is pure CSS/SVG — no copyrighted
artwork, no heavy JS, and fully self-contained.

---

## Design language

- **Palette** — void black `#05060a`, Akira red `#ff2340` (energy / danger),
  NERV amber `#ff9d00` (HUD framing), cyan `#22e0ff` (signage), Eva purple, and
  terminal lime, plus hazard yellow/black stripes.
- **Type** — *Chakra Petch* (display / HUD), *Share Tech Mono* (terminal
  readouts), *Orbitron* (numerals), *Noto Sans JP* (katakana / kanji accents),
  and *Inter* (body).
- **Motifs** — an animated radar/observation console, a live UTC HUD clock, a
  katakana marquee ticker, targeting-reticle panels, glitch headlines, and the
  brand's NVG-skull reimagined as an original hexagonal mecha emblem.

The whole system lives in `src/styles/global.css` (design tokens + utilities) and
a set of small Astro components.

---

## Content & themes

The copy is an original creative rebrand that leans into FOG's real, distinctive
themes — the *forward observer* (eyes ahead of the line, report it honestly), the
front-line documentary work, and the "they-keep-pulling-our-channel" deplatforming
saga — without restating disputed or unverified claims. Field locations are kept
deliberately classified/atmospheric.

**Pages (11 routes):**

- **Home** — showpiece hero + radar console, stats, manifesto, shows, latest
  transmissions, dispatches, supply preview, CTA.
- **Broadcast** — the four channels + full transmission log.
- **Dispatches** — index + per-article template (`/dispatches/[slug]`).
- **Supply** — merch catalog with live-drop banner and supply doctrine.
- **The Unit (About)** — dossier, pull quote, rules of engagement, the "signal
  war" channel timeline, FAQ.
- **Contact** — a secure-terminal comms form (mailto) + all frequencies.
- **404** — "Signal Lost."

---

## Tech stack

- **Astro 5** — static output, component-based, near-zero client JS.
- **Hand-authored CSS design system** (`src/styles/global.css`).
- **@astrojs/sitemap** — sitemap generation.
- **Fontsource** — self-hosted Chakra Petch, Share Tech Mono, Orbitron, Noto Sans
  JP, and Inter.
- **sharp** — build-time generation of the OG image and app icons.

SEO is preserved from the original scaffold: per-page titles / meta / canonical /
OG + Twitter cards, `Organization` + `WebSite` + `BreadcrumbList` + `Article` +
`FAQPage` JSON-LD, an auto-generated `sitemap-index.xml`, and `robots.txt`.
Accessibility: skip link, semantic landmarks, focus states, and full
`prefers-reduced-motion` support (all animations collapse when requested).

## Project structure

```
src/
  data/site.ts            # single source of truth: brand, shows, episodes, dispatches, products
  lib/schema.ts           # schema.org JSON-LD builders
  layouts/BaseLayout.astro # <head> SEO, fonts, header/footer wrapper
  components/             # Header, Footer, Logo, Marquee, ShowCard, DispatchCard, ProductCard, ...
  pages/                  # index, broadcast, dispatches/[slug], supply, about, contact, 404
  styles/global.css       # the gonzo-cyber design system
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

## Deployment

The output in `dist/` is fully static and hosts anywhere (Vercel, Netlify,
Cloudflare Pages, S3, etc.).

---

## Notes for go-live

- **Social links & podcast URL** live in `src/data/site.ts` (`site.social`) — swap
  in the official handles before launch.
- **Contact form** composes a `mailto:` to `comms@forwardobservations.com`. Point
  it at a real inbox, or wire it to a Formspree/Web3Forms endpoint in
  `src/pages/contact.astro`.
- **Shows, episodes, dispatches, and products** in `src/data/site.ts` are an
  editorial rebrand concept — replace with the real catalog when ready. The
  footer notes that transmissions are dramatized.
- **Domain** is set to `https://forwardobservations.com` in `astro.config.mjs`.
