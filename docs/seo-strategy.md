# Digital Horizon — SEO Strategy & Implementation Guide

_Northern Nevada web design · SEO · digital marketing._
Synthesized from a competitor/SERP analysis, keyword research, and an on-page/architecture
playbook. This is the working plan; the "Implementation status" column tracks what's shipped
in this repo.

---

## 1. The competitive picture

**Reno head terms are saturated.** Page 1 for `web design reno`, `reno seo company`,
`digital marketing agency reno` is owned by (a) established local shops (Reno Web Designer,
The Factory Creatives, Acute SEO, Inventive, Lucky 7, White Peak, Noble Studios for
enterprise), (b) **national agencies running programmatic city pages** (Thrive, Helium, 702
Pros, Octiv), and (c) **directories/aggregators** (Clutch, Expertise.com, UpCity, DesignRush,
Yelp, Thumbtack) that dominate the "best web designers in Reno" listicles.

**Where the gaps are — our wedge:**

1. **Own the secondary cities.** Competitors crowd "Reno"; coverage thins fast for
   **Carson City, Sparks, Gardnerville/Minden, Fallon, Elko, and Lake Tahoe**. Genuine
   (non-thin) city×service pages there rank fastest.
2. **Niche to the trades.** Most rivals are generalists; only Acute niches. Own
   "web + SEO for HVAC / plumbing / roofing / landscaping / electrical in Northern Nevada."
3. **Publish transparent pricing.** Nearly every competitor is quote-only. Real price ranges
   capture high-intent "cost/price" searches and build trust.
4. **Lead on speed + measurable results.** Many local sites are slow, template-y WordPress.
   Prove Core Web Vitals + lead outcomes on our own site.
5. **First-mover on GEO / AI search.** Local competitors have near-zero content on
   "GEO vs SEO," "rank in AI Overviews/ChatGPT" — an emerging cluster we can own.
6. **Win the review directories + GBP.** Get listed and gather reviews on Google Business
   Profile, Clutch, Expertise, UpCity, DesignRush — table stakes for the listicles/map pack.

---

## 2. Keyword targeting map

**Priority = high intent × winnable for a local player.** Ship the low-competition
city pages first, layer the GEO cluster to own an emerging niche, and use blog clusters to
build the authority that lifts the money pages.

### Money terms (→ service×city and service pages)
`web design {city}` · `{city} web designer` · `seo services {city}` / `{city} seo company` ·
`digital marketing agency {city}` · `web design northern nevada`.
Difficulty gradient: **Reno/Tahoe High → Carson/Sparks Med → Gardnerville/Fallon/Elko Low.**

### Long-tail commercial (→ service×city)
`affordable / small business web design {city}` · `local seo services {city}` ·
`google ads / ppc management {city}` · `google business profile management {city}` ·
`website redesign {city}` · `web design cost/pricing {city}`.

### Informational / topical-authority clusters (→ blog → funnel to service)
- **A. Local SEO & Google Business Profile** — GBP optimization, "why isn't my business on Maps," local-SEO checklists.
- **B. GEO / AI search (highest opportunity)** — "GEO vs SEO," "how to rank in ChatGPT / AI Overviews 2026."
- **C. Choosing / hiring a web designer** — "questions to ask a web designer," "signs you need a redesign."
- **D. Cost & platform** — "how much does a website cost (Reno framing)," "WordPress vs Squarespace vs Shopify."
- **E. Performance & conversions** — "why is my site slow," "Core Web Vitals," "more leads from your website."
- **F. SEO vs Ads / strategy** — "SEO vs Google Ads for small business," "how long does SEO take."

### Prioritized first wave (highest value, winnable)
1. web design carson city · 2. carson city seo · 3. web design gardnerville/minden ·
4. web design fallon · 5. elko web design/seo · 6. lake tahoe web design ·
7. sparks web design / digital marketing · 8. affordable/small-business web design reno ·
9. google business profile management reno · 10. web designer near me (GBP + city pages) ·
11. google ads management reno · 12. website redesign reno/carson ·
13. GEO vs SEO / generative engine optimization · 14. how to rank in AI search 2026 ·
15. how much does a website cost (Reno) · 16. questions to ask a web designer ·
17. optimize google business profile {city} · 18. seo vs google ads · 19. wordpress vs squarespace vs shopify · 20. how long does seo take.

---

## 3. On-page & architecture playbook

### Architecture (keep the hub-and-spoke; deepen the links)
- `/services` and `/locations` are topical + geographic hubs; each links to every child, and
  every `city×service` leaf links up to both its service and city parents (already the case).
- **Anti-thin-content rule** — every `city×service` leaf must have 4 unique ingredients or it
  doesn't ship: (1) a local intro referencing real geography, (2) 3+ local FAQs, (3) local
  proof (named client / neighborhood / project type), (4) distinct local stats (price range,
  timeline, seasonality). Google suppresses ~95%-identical templated location pages.
- **Matrix build-out, two tiers:**
  - **Tier 1 (hand-written now):** Carson City, Reno, Sparks × all 3 services = 9 pages.
  - **Tier 2 (Tahoe, Gardnerville, Fallon, Elko, Las Vegas):** strong _city_ pages only until
    there's real local proof — a thin `city×service` page is worse than none.

### Per-page templates
| Page | Title formula | H1 / key H2s |
|---|---|---|
| Home | `Web Design, SEO & Marketing in Northern Nevada \| Digital Horizon` | pitch; services, proof/reviews, process, areas, FAQ |
| Service | `{Service} for Northern Nevada Businesses \| DH` | what you get, how it works, who it's for, **areas**, **FAQ**, CTA (~700–1000 wd) |
| City×Service | `{Service} in {City}, NV \| Digital Horizon` | why {city} differs, local proof, local process, **3+ local FAQs**, CTA (~600–900 wd) |
| City | `{City} Web Design, SEO & Marketing \| DH` | market, corridors, the 3 services, FAQ |
| Blog | `{Title} (… 2026)` | first sentence of each H2 = a direct answer |

**E-E-A-T:** named founder + credentials, real named case studies, one canonical NAP matching
GBP, visible review count + rating.

### Schema (src/lib/schema.ts)
- `ProfessionalService`/`LocalBusiness` + **`aggregateRating` + `review`** (only from real,
  on-page testimonials — never fabricate ratings/counts), **`openingHours`**, **`founder`**.
- Per-service **`Service`** node (`serviceType`, `provider`, `areaServed` scoped to covered cities).
- **`FAQPage`** on city×service pages, `Article` on blog, `BreadcrumbList` everywhere (done).

### Local / off-page (parallel track — not code)
GBP: exact primary category, 15–30 photos then weekly, all services/attributes, weekly Posts,
reply to every review. Citations: one byte-exact NAP across GBP + footer + Chamber/Yelp/BBB/
Nextdoor. Reviews: target 5+/month, two-tap link post-launch. Local links: Chamber, trade
associations, local paper, suppliers/partners.

### GEO / AI search
Direct-answer format (answer in the first sentence of every H2/FAQ); named stats + sources;
keep "2026" year signals; entity clarity via `founder` + `Service` + `areaServed` schema;
allow `GPTBot` / `OAI-SearchBot` / `PerplexityBot` in robots.txt.

---

## 4. Prioritized implementation checklist

| # | Change | Priority | Status |
|---|---|---|---|
| 1 | `aggregateRating` + `review` (real testimonials), `openingHours`, `founder`-ready in `organizationSchema()` | P0 | ✅ shipped |
| 2 | `serviceSchema()` builder emitted on `/services/[slug]` with `areaServed` | P0 | ✅ shipped |
| 3 | `FAQPage` on city×service pages; add `faqs` to `ServiceCityDetail`; write 3+ local FAQs per leaf | P0 | ✅ shipped |
| 4 | Fill the thin leaves (reno/web-design, reno/seo, carson-city/seo) with unique local content | P0 | ✅ shipped |
| 5 | `, NV` in city×service titles; direct-answer format in FAQs | P0 | ✅ shipped |
| 6 | Allow AI crawlers (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended) in robots.txt | P0 | ✅ shipped |
| 7 | Contextual internal links from blog posts → service/city pages ("related" block) | P1 | ✅ shipped |
| 8 | Data-driven service→city cross-links (no hardcoding) | P1 | ✅ shipped |
| 9 | Expand Tier-1 matrix: Sparks + missing service combos, hand-written unique content | P2 | ✅ shipped (9 combos) |
| 10 | Named founder/team + credentials on `/about`; transparent pricing surfaced | P1 | ✅ pricing on service pages; founder = set `site.founder` |
| 11 | GBP optimization + review generation + citation cleanup | P2 | ☐ off-page (owner) |
| 12 | Tier-2 city×service pages once real local proof exists | P3 | ☐ backlog |

### Owner to-dos (not code)
- Set `site.founder.name` in `src/data/site.ts` to enable the founder E-E-A-T schema.
- Confirm `site.hours` matches the real Google Business Profile hours.
- Grow real reviews; the `aggregateRating` reflects only the testimonials currently on-page.
- Claim/optimize GBP and get listed on Clutch, Expertise.com, UpCity, DesignRush.
