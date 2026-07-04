/**
 * Full per-service detail content, mirrored from digitalhorizon.dev/services/*.
 * Drives /services/[slug].
 */
export interface ServiceDetail {
  slug: string;
  name: string;
  metaTitle: string;
  subtitle: string;
  price: string;
  intro: string;
  gets: string[];
  sections: { h: string; p: string }[];
  whoFor: string;
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "web-design",
    name: "Web Design",
    metaTitle: "Web Design for Northern Nevada Businesses",
    subtitle: "Sites built for traffic, conversion, and the way your customers actually search.",
    price: "From $800 (scope-dependent)",
    intro:
      "Sites built for traffic and conversion — fast, clear, and designed around what your customers actually need. Every site we build hits a 95+ Lighthouse score, loads in under two seconds, and gives you a content dashboard so you can edit copy and images yourself. No more $200 invoices for fixing a typo.",
    gets: [
      "Custom design tailored to your brand and audience — no off-the-shelf templates.",
      "95+ Lighthouse scores across performance, accessibility, SEO, and best practices.",
      "Sub-two-second load times on mobile, tested on real devices.",
      "Content dashboard so you can edit copy, swap photos, and add pages without calling us.",
      "Mobile-first responsive layout, designed and tested at 375px, 768px, and 1280px.",
      "Local SEO foundations baked in: schema markup, sitemap, canonical URLs, OG metadata.",
      "Deployed on Vercel with zero-config push-to-deploy and free SSL.",
    ],
    sections: [
      {
        h: "Custom design, not template-with-a-haircut",
        p: "Every site we build is designed from scratch for one business — we don't start from a template and skin it. Templates lock you into someone else's content shape, so your unique offering ends up squeezed into generic patterns and the site looks like a thousand others because it literally is. Custom doesn't mean expensive — most projects ship in 4–8 weeks — but it does mean the page structure is built around how your customers actually think about your business.",
      },
      {
        h: "Performance is part of the design",
        p: "A site that takes four seconds to load on mobile isn't designed well, no matter how it looks. We build to a 95+ Lighthouse score across performance, accessibility, SEO, and best practices, and we test on real devices — not just Chrome on a fast laptop. The practical effect: your pages feel instant on a phone with two bars of LTE in a parking lot, which is where most of your customers first hit your site.",
      },
      {
        h: "SEO foundations baked in, not bolted on",
        p: "Schema markup, canonical URLs, Open Graph metadata, semantic HTML, alt-text discipline, mobile-first responsive design, and server-side rendering for crawlers aren't add-ons — they're how every page is built. By the time we hand the site over, the technical SEO grade is a 95+ and your content team can keep it there without filing a development ticket for every new page.",
      },
      {
        h: "A content dashboard you can actually use",
        p: "We give you a CMS — usually Sanity — where your team edits copy, swaps photos, adds posts and case studies, and updates phone numbers without calling us. The first time you fix a typo at 11pm without paying $200 to have us do it is the moment the site starts paying for itself.",
      },
      {
        h: "Mobile is the design, not a degraded version of it",
        p: "We design at 375px first, then expand to tablet and desktop. 70%+ of your traffic is mobile, and \"responsive\" sites designed at 1280px and shrunk down always feel like compromises on a phone. When mobile is the primary canvas, the desktop experience feels generous instead of sparse.",
      },
      {
        h: "Accessibility is the floor, not a feature",
        p: "WCAG 2.2 AA: visible focus rings, 4.5:1 color contrast, keyboard navigation, screen-reader-friendly markup, prefers-reduced-motion respected. We don't market accessibility as a selling point because shipping an inaccessible site is shipping a broken site, and we don't do that.",
      },
      {
        h: "Where projects typically land",
        p: "A full web design project — discovery, design, build, content migration, launch — runs 4–8 weeks and lands between $3,500 and $12,000 depending on page count, custom features, and how much copy is written from scratch versus adapted. We share a flat-fee scope upfront, with no surprise invoices for scope creep on things that obviously should have been included. After launch, an ongoing partnership covers monthly maintenance, content support, and small enhancements — flat monthly fee, month-to-month.",
      },
    ],
    whoFor:
      "Service businesses tired of paying $200 invoices to fix typos, sites that take five seconds to load, or designs that haven't been updated since 2018. If your current site isn't bringing in calls, we'll build the one that does.",
  },
  {
    slug: "seo",
    name: "Search Engine Optimization",
    metaTitle: "Local SEO for Northern Nevada Service Businesses",
    subtitle: "Get found where your customers actually look — Google Search, Google Maps, and AI Overviews.",
    price: "From $750/month (3-month minimum)",
    intro:
      "Get found on Google, Maps, and generative AI search. We build local authority that compounds over time, focusing on the three places your customers actually look: Google Search, Google Business Profile (the map pack), and the new AI-powered results from ChatGPT, Perplexity, and Gemini. Monthly reporting, no long contracts beyond the initial minimum.",
    gets: [
      "Technical audit, schema markup, and on-page optimization for your existing site.",
      "Google Business Profile setup and weekly optimization for the local map pack.",
      "Citation building and cleanup across local directories that actually carry weight.",
      "Content strategy targeting the queries your customers actually use, not vanity keywords.",
      "Monthly reporting dashboard showing rankings, traffic, and call attribution.",
      "AI search visibility for ChatGPT, Perplexity, Gemini, and Google AI Overviews.",
      "3-month minimum, then month-to-month — no long-term contracts to wriggle out of.",
    ],
    sections: [
      {
        h: "The map pack is its own game",
        p: "Google's local pack — those three results with the map at the top — uses a separate ranking algorithm from organic search. It weighs Google Business Profile completeness, review velocity and recency, citation consistency, and proximity. We work all four levers: weekly GBP optimization (not just at setup), structured review flows, citation cleanup across the directories that carry weight in northern Nevada, and category-precise targeting so you show up for the queries that convert.",
      },
      {
        h: "Technical SEO is a one-time fix, then maintenance",
        p: "Most sites we audit share the same handful of issues: missing or wrong schema, duplicate title tags, broken canonicals, slow Core Web Vitals on mobile, stale or missing sitemaps, and OG metadata that breaks when you share a page. We fix all of it in the first month — it's mostly mechanical — and the first month tends to produce the biggest single jump in rankings simply because Google can finally read the site correctly.",
      },
      {
        h: "Content is where the long tail lives",
        p: "Once the technical work is done, gains come from content depth. We build service pages, location pages, FAQ sections, and posts that target specific buyer questions — \"how much does a new water heater cost in Reno\", \"do I need a permit for a fence in Carson City\". Each piece is short enough to write quickly but specific enough to rank on its own. Over six months, fifty pieces like that compound into real traffic.",
      },
      {
        h: "Citations and NAP consistency",
        p: "If your business is listed at three different addresses across Yelp, Bing Places, and Apple Maps, Google penalizes the inconsistency in local rankings. We do a citation audit early — usually 50–80 directories — and clean up the data so your name, address, and phone match exactly everywhere. It's unglamorous work almost no agency does well, and it's worth more than most on-page SEO.",
      },
      {
        h: "AI search visibility",
        p: "Increasingly, customers ask ChatGPT, Perplexity, Claude, or Google AI Overviews for recommendations. Getting cited is a different problem from ranking on Google — it requires structured data the models can parse, content that answers questions directly, and presence in the sources those models draw on. We treat it as a parallel discipline to traditional SEO, not a substitute.",
      },
      {
        h: "Reporting that doesn't lie",
        p: "Every client gets a monthly dashboard showing rankings for the keywords that matter, organic traffic from Search Console, calls and form fills attributed to organic, and a written summary of what we did and what moved. No vanity metrics. If a number went down we say so and explain why. Most agency reports are designed to be impressive; ours are designed to be useful.",
      },
      {
        h: "Pricing and term",
        p: "SEO retainers run $750–$2,000/month for most northern Nevada service businesses, depending on competition density and content production. Three-month minimum to give the work time to land in Google's index, then month-to-month. Most clients see real ranking movement by month two and meaningful traffic by month four. If we don't deliver, we tell you, and we either fix the strategy or part ways.",
      },
    ],
    whoFor:
      "Service businesses that rank inconsistently, get traffic but few calls, or are getting outranked by competitors with worse offerings. If you've been burned by an SEO firm that charged $2k a month for nothing, this is the antidote.",
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    metaTitle: "Digital Marketing for Northern Nevada",
    subtitle: "Google and Meta ads built to actually convert — not just spend the budget.",
    price: "From $1,000/month + ad spend",
    intro:
      "Google and Meta ads built to actually convert — campaign setup, management, and monthly optimization. We handle campaign creation, audience targeting, ad copy, landing page optimization, and weekly adjustments. You set the ad spend budget; we make sure it's spent well.",
    gets: [
      "Campaign setup across Google Search, Google Display, and Meta (Facebook + Instagram).",
      "Audience targeting based on geography, intent, and your specific customer profile.",
      "Ad copy and creative development tuned to your business and offer.",
      "Landing page optimization tied to actual ad performance, not guesswork.",
      "Weekly campaign adjustments based on what's converting and what's not.",
      "Monthly reporting with cost-per-lead and cost-per-customer attribution you can trust.",
      "You set the ad spend; we make sure it's spent well, every week.",
    ],
    sections: [
      {
        h: "Channel mix is a function of your customers",
        p: "For most northern Nevada service businesses, Google Search ads are the primary channel — high intent, easy to track, fast to optimize. Meta works for businesses with a visual offering or a longer consideration window. Google Display and YouTube are usually wasted spend at small budgets. We pick the channels that match your actual customer journey, not the ones that pay us the highest commission.",
      },
      {
        h: "Landing pages matter as much as the ads",
        p: "Sending paid traffic to your homepage is the single most common mistake we see. Every campaign gets a dedicated landing page — fast-loading, focused on one offer, with a clear call to action above the fold and trust signals (reviews, certifications, real photos) below it. The landing page is part of the campaign, not a separate project.",
      },
      {
        h: "Tracking and attribution we can defend",
        p: "Every campaign has call tracking with dynamic numbers, form-fill tracking that captures source and ad, and a monthly attribution report showing cost-per-lead and cost-per-customer. We don't measure impressions or engagement because those don't pay your invoices — we measure dollars-in-versus-dollars-out. If a channel isn't converting, we kill it within 30 days regardless of how the dashboard looks.",
      },
      {
        h: "Weekly optimization, not set-and-forget",
        p: "Most paid campaigns rot if you leave them alone — trends shift, competitors come and go, ad costs creep up. We review every active campaign weekly: pausing keywords that aren't converting, raising bids on ones that are, refreshing fatigued ad copy, and reallocating budget based on actual results. That cadence separates campaigns that improve over time from campaigns that decay.",
      },
      {
        h: "Reporting that's a conversation, not a deck",
        p: "Every month we send a 1-page summary: spend, leads, cost per lead, what we changed, what's working, what's not, and what we'd recommend differently. No 40-slide PowerPoint. If a campaign isn't earning its keep we say so and shift budget to where the work is happening. Most agencies optimize for client retention; we optimize for client results.",
      },
      {
        h: "Honest minimum spend",
        p: "Paid only works above a minimum spend — below about $1,500/month in ad budget the data is too thin to optimize on, the management fee eats too much of the result, and campaigns can't get out of Google's learning phase. If your budget is under that, we'll tell you to put the money into SEO and content instead. We don't take paid clients we can't make profitable.",
      },
      {
        h: "Pricing structure",
        p: "The management fee is either a flat $750–$1,500/month depending on channel count and complexity, or 15% of ad spend — whichever you prefer. Ad spend is paid directly to Google or Meta from your card; we don't mark up media. Three-month minimum, then month-to-month. Setup is a one-time $1,500–$3,000 fee covering campaign architecture, conversion tracking, and the first set of landing pages.",
      },
    ],
    whoFor:
      "Service businesses that have tried running their own ads, burned through budget without results, or want predictable lead flow that complements organic SEO. Best fit for businesses with $1,500+/month in ad budget to deploy.",
  },
];

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((s) => s.slug === slug);
}
