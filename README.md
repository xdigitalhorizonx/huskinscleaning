# Huskins Cleaning — Website Rebuild

A complete, agency-grade rebuild of the marketing website for **Huskins Cleaning
Services** (Huskins Services LLC) — a family-owned, BBB A+ cleaning company in
**Omaha, NE**.

Built as a fast, SEO-first static site with [Astro](https://astro.build) and a
bespoke, hand-authored design system. No page builders, no bloated theme — just
clean, conversion-focused pages that load instantly and rank well.

---

## Why the rebuild — what the old site was doing badly

The current site at `huskinsllc.com` was analyzed alongside its top Omaha
competitors. The recurring problems:

1. **Inconsistent NAP (Name / Address / Phone).** The business appears online as
   "Huskins LLC," "Huskins Services LLC," and "Huskins Cleaning & Remodeling
   Services," with two different phone numbers floating across directories. NAP
   consistency is one of the strongest local-SEO signals, and inconsistency
   actively hurts local-pack rankings.
   → **Fixed:** a single source of truth (`src/data/site.ts`) feeds every phone
   number, address, hour and business name across the whole site and its
   schema.org markup.

2. **Competing on "affordable," not on trust.** The old title tags led with
   "Affordable House Cleaning" — a race to the bottom against national
   franchises (MaidPro, The Maids, Molly Maid) that outspend a local shop on
   ads. Small local businesses win on *trust, honesty and relationship*, which
   is exactly what Huskins' own reviews praise ("hard to find affordable and
   honest people… restored my faith").
   → **Fixed:** the whole site is positioned around *trusted, local,
   family-owned, same-crew-every-visit, BBB A+*, with price framed as
   "honest/fair" rather than "cheapest."

3. **Thin / weak on-page SEO.** Generic titles, "Omaha Ne" mis-capitalized,
   little structured data, and no clear service-area targeting.
   → **Fixed:** every page has a unique, keyword-targeted title + meta
   description, canonical URLs, Open Graph/Twitter cards, breadcrumb +
   `LocalBusiness`/`Service`/`FAQPage` JSON-LD, a generated sitemap and
   `robots.txt`, plus a dedicated **Service Areas** page targeting each suburb.

4. **No clear conversion path.** Weak calls-to-action and no obvious way to get a
   quote.
   → **Fixed:** a persistent phone CTA + "Free Quote" button in the header, a
   real quote form, sticky quote cards on service pages, and CTA bands on every
   page.

5. **Dated, low-trust presentation.** Not the polished, credible look today's
   customers expect before letting someone into their home.
   → **Fixed:** a modern, cohesive "fresh water + trust" theme (coastal ocean
   blue + warm amber), full-bleed real photography, custom iconography,
   testimonials, trust bars and guarantees.

### Competitive landscape (Omaha)

Omaha house-cleaning search is dominated by national franchises leaning on
"process" branding — **MaidPro** ("49-Point Checklist"), **The Maids**
("22-Step Cleaning Process," ~50 years), plus **Molly Maid**, **Maids & More**
and **ClearWater Clean**. Huskins' edge is the opposite of a franchise: a local,
honest, family-run team, the *same* crew each visit, flexible 7-days-a-week
scheduling (7am–9pm), BBB A+ accreditation, and one company for cleaning **plus**
pressure washing and remodeling. The new site leans into every one of those
differentiators.

---

## What's included

**13 SEO-optimized pages:**

- **Home** — hero, trust bar, services, why-us, 3-step process, testimonials,
  service areas, FAQ, CTA.
- **Services hub** + 6 service pages: House Cleaning, Deep Cleaning,
  Move In / Move Out, Commercial & Office, Post-Construction, Pressure Washing.
- **About**, **Service Areas**, **Reviews**, **Contact** (with quote form + map),
  and a branded **404**.

**SEO & performance:**

- Per-page titles, meta descriptions, canonical URLs, OG/Twitter cards.
- schema.org JSON-LD: `CleaningService`/`LocalBusiness`, `WebSite`, `Service`,
  `BreadcrumbList`, `FAQPage`, `AggregateRating`, `OpeningHours`, `areaServed`.
- Auto-generated `sitemap-index.xml` + `robots.txt`.
- Ships almost zero JavaScript; self-hosted variable fonts; accessible markup
  (skip link, semantic landmarks, focus states, reduced-motion support).

---

## Tech stack

- **Astro 5** — static output, component-based, near-zero client JS.
- **Hand-authored CSS design system** (`src/styles/global.css`) — design tokens,
  fluid type scale, component classes. No CSS framework dependency.
- **@astrojs/sitemap** — sitemap generation.
- **Fontsource** — self-hosted *Plus Jakarta Sans* (display) + *Inter* (body).
- **sharp** — build-time generation of the OG image and app icons, plus WebP
  optimization of the site photography (`scripts/optimize-photos.mjs`).
- **Photography** — licensed Adobe Stock, optimized to WebP in `public/images/`
  (see `public/images/CREDITS.txt` for source IDs).

## Project structure

```
src/
  data/site.ts          # single source of truth: NAP, services, testimonials, FAQs, areas
  lib/schema.ts         # schema.org JSON-LD builders
  layouts/BaseLayout.astro   # <head> SEO, header, footer wrapper
  components/           # Header, Footer, Icon, ServiceCard, QuoteForm, CTA, FAQ, etc.
  pages/                # index, about, contact, reviews, service-areas, services/[slug]
  styles/global.css     # design system
public/
  images/               # optimized WebP photography (+ CREDITS.txt)
  ...                   # robots.txt, favicon, og-image, app icons, manifest
scripts/                # generate-og.mjs, generate-icons.mjs, optimize-photos.mjs
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
node scripts/generate-og.mjs
node scripts/generate-icons.mjs
# Re-optimize photography from a folder of licensed source JPEGs:
node scripts/optimize-photos.mjs /path/to/source-jpegs
```

## Deployment

The output in `dist/` is fully static and can be hosted anywhere (Vercel,
Netlify, Cloudflare Pages, S3, etc.). On Vercel, the Astro preset is detected
automatically — no config needed.

---

## Before go-live — please verify

A few business details were inferred from public listings and should be
confirmed by the owner:

- [ ] **Phone number** — using `(402) 249-0449` (the number tied to
      `huskinsllc.com`). A second number, `(402) 813-9499`, also appears on some
      listings. Confirm the correct one in `src/data/site.ts`.
- [ ] **Email** — `info@huskinsllc.com` is assumed from the domain. Update if
      different.
- [ ] **Quote form delivery** — the form validates and confirms client-side. To
      receive submissions by email, set `ENDPOINT` in
      `src/components/QuoteForm.astro` to a Formspree/Web3Forms URL (2-minute
      setup). Until then, the phone number is the primary contact path.
- [ ] **Social links** — add Facebook/Instagram/Google handles in
      `src/data/site.ts` (`site.social`) to light up footer links.
- [ ] **Reviews / rating** — testimonials are drawn from public review sentiment;
      the aggregate rating is conservative. Update with verified figures.
