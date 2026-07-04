/**
 * Per-city and per-(city × service) landing-page content, mirrored from and
 * extended beyond digitalhorizon.dev/locations/*. Cities without a detail entry
 * render from a shared template using their `note` from data/site.ts.
 *
 * Anti-thin-content rule: every service×city leaf ships unique local intro +
 * 3+ local FAQs + local specifics. Tier-1 markets (Carson City, Reno, Sparks)
 * are hand-written across all three services; other cities remain city-only.
 */
export interface CityDetail {
  tagline: string;
  intro: string[];
  sections?: { h: string; p: string }[];
  faqs?: { question: string; answer: string }[];
}

export const cityDetails: Record<string, CityDetail> = {
  "carson-city": {
    tagline: "Digital tools for Nevada's capital.",
    intro: [
      "Our office is on E William St in Carson City. Web Design, SEO, and Digital Marketing built around how the local market actually works — same town, zero travel, full local context.",
      "Carson City has its own rhythm — more state-government adjacent, a tighter-knit business community, stable demographics. We tailor web and marketing strategies around these realities instead of applying a Reno playbook to a Carson situation.",
      "Working with Carson City clients is the easiest part of what we do. We're the same town, so on-site meetings are zero-travel — discovery in person, kickoffs in person, whatever cadence it needs. If you want to drop by the office on E William St, we'll put coffee on.",
    ],
    sections: [
      {
        h: "Where Carson businesses actually operate",
        p: "Most of our Carson clients sit on one of three corridors. North Carson — Highway 50 East and the warehouse strip behind it — is where the trades cluster: HVAC, electrical, plumbing, fabrication. The College Parkway corridor and the south end pick up professional services and medical/dental. Downtown around Carson Street and the capitol pulls in legal, government-adjacent contractors, and the older established firms. Each geography has different customer behavior, and we tune campaigns and content to match.",
      },
      {
        h: "What the state-government adjacency means in practice",
        p: "Carson is the capital, and a meaningful share of the local economy works directly or indirectly with the state. That market rewards reliability, longevity, and word of mouth more than aggressive marketing. We build sites and campaigns that signal those traits — clear track records, real client names, specific case studies — rather than the conversion-rate-optimized hype that works in faster markets.",
      },
      {
        h: "The trades and home-services market",
        p: "Roofing, HVAC, plumbing, electrical, landscaping, fence and deck make up most of our home-services clients in Carson. The market is defined by aging housing stock, predictable seasonal patterns, and a customer base that genuinely picks up the phone. Local SEO and Google Business Profile work moves these businesses faster than almost any other channel because the queries are high-intent and the geography is small enough that ranking actually means something.",
      },
    ],
    faqs: [
      { question: "Does Carson City really have a different market than Reno?", answer: "Yes. State-government adjacency, a tighter-knit business community, more stable demographics. A Reno playbook doesn't transfer cleanly — we rebuild strategy from scratch for Carson clients." },
      { question: "Where's your office, and do you do in-person meetings?", answer: "Our office is on E William St in Carson City — same town as you. On-site meetings are easy and we keep them frequent: monthly for major engagements, quarterly for smaller ones, plus weekly video syncs in between." },
      { question: "Is local SEO worth it in a smaller market like Carson?", answer: "Often more worth it than in Reno. Less competition for the same keywords, a tighter customer base, and once you rank you tend to stay there. Retention on Carson SEO engagements runs high." },
      { question: "How long until we see ranking movement on a Carson City SEO engagement?", answer: "Technical fixes show up in Google Search Console within 2–3 weeks. Content gains usually start landing by month two. Map-pack movement on competitive Carson terms is typically 90–120 days." },
      { question: "What does a typical Carson City web project cost?", answer: "Most Carson service-business sites land between $3,500 and $9,000 for a full design/build/launch. Larger multi-location or service-area builds run higher. Ongoing SEO is $750–$1,500/month. We share a flat scope upfront so the number you see is the number you pay." },
    ],
  },
  reno: {
    tagline: "Web, SEO & marketing for the Biggest Little City.",
    intro: [
      "Reno is a bigger, faster, more competitive market than Carson — tech-relocator startups, MidTown hospitality, and a high-volume trades market dispatching across all of Washoe County.",
      "That means more competition for the same keywords and a customer base that shops around. We build Reno sites and campaigns to win on speed, clarity, and proof — and we run the Reno–Sparks dual-market strategy most agencies skip.",
    ],
  },
  sparks: {
    tagline: "Web, SEO & marketing for the I-80 corridor.",
    intro: [
      "Sparks is one of Northern Nevada's fastest-growing markets — booming home-services and trades demand out of Spanish Springs, an industrial and logistics base along the I-80 corridor, and the Victorian Square / Legends retail draw.",
      "Most agencies lump Sparks in with Reno and never build a real Sparks page. We treat it as its own market: Sparks-specific search is less saturated and genuinely winnable when you claim it properly.",
    ],
  },
};

export interface ServiceCityDetail {
  title: string;
  subtitle: string;
  sections: { h: string; p: string }[];
  faqs?: { question: string; answer: string }[];
}

/** Keyed by `${citySlug}/${serviceSlug}`. Tier-1: Carson City, Reno, Sparks × 3. */
export const serviceCityDetails: Record<string, ServiceCityDetail> = {
  "carson-city/web-design": {
    title: "Web Design for Carson City Businesses",
    subtitle:
      "Built for state-adjacent professional services, the trades, and the established SMBs who run this town. Same-town team, same-week response, and a playbook tuned for Carson buyers — not adapted from Reno.",
    sections: [
      { h: "Why Carson buyers are different", p: "Carson is the state capital, but it's not Reno. The buying culture rewards longevity, named track records, and word-of-mouth more than aggressive marketing or conversion-rate-optimized hype. Carson businesses stick with vendors who've earned their trust, so the bar for a new digital partner is genuinely higher here — but once you clear it, the relationships last." },
      { h: "State-government adjacency reshapes the customer base", p: "A meaningful share of Carson firms work directly or indirectly with the State of Nevada. Those buyers want sites that signal reliability and verifiable history: real client names, specific case studies, transparent processes. They don't respond to the growth-hacky landing pages that work for Reno tech-startup tooling." },
      { h: "Service-area sites for Carson trades", p: "HVAC, plumbing, electrical, roofing — Carson's trades market is shaped by aging housing stock along Highway 50 and out into the Carson Valley. We lead with a service-area selector so a customer in Dayton or Minden sees exactly what's covered, with separate landing pages per area that rank locally, click-to-call from anywhere on the page, and a booking flow short enough to complete from a phone in someone's truck." },
      { h: "Named-proof sites for state-adjacent professional firms", p: "Legal, consulting, engineering, and public-affairs firms with state-vendor exposure get quieter sites — fewer animations, calmer palettes, named clients and credentialed team members, and structure that leads with track record over generic capability statements. Schema is configured so the firm shows up cleanly for the searches procurement officers actually run." },
      { h: "Refresh builds for established Carson SMBs", p: "Auto repair, vet clinics, dental, family law, accounting — the established Carson SMB that's had the same site since 2018 and finally needs to update it. These projects preserve customer trust during the transition: familiar enough that loyal customers don't bounce, modern enough to win the next ten years. Most refresh builds ship in 4–6 weeks and immediately lift mobile bookings and call volume." },
    ],
    faqs: [
      { question: "How much does a website cost in Carson City?", answer: "Most Carson City service-business sites land between $3,500 and $9,000 for a full design, build, and launch, with a flat scope agreed upfront. Larger multi-location or service-area builds run higher." },
      { question: "Do you build service-area pages for the Carson Valley?", answer: "Yes. For Carson trades we build separate, locally-ranking pages for the areas you actually serve — Carson City, Dayton, Gardnerville, and Minden — so a customer in each town sees exactly what's covered." },
      { question: "Can you refresh my existing site without losing my Google rankings?", answer: "Yes. We carry over your URLs, content, and trust signals, redirect anything that moves, and migrate carefully so rankings hold through the transition — then improve as the faster, better-structured site is indexed." },
    ],
  },
  "carson-city/seo": {
    title: "SEO for Carson City Businesses",
    subtitle:
      "Local SEO tuned to a small, high-trust market — where competition is lighter than Reno and ranking once tends to mean ranking for years.",
    sections: [
      { h: "Carson is small enough to actually rank in", p: "The upside of a smaller market is real: fewer businesses fighting for the same keywords, a tighter customer base, and rankings that tend to stick once you earn them. For a lot of Carson service businesses, local SEO is the single highest-ROI channel available." },
      { h: "The map pack is the whole game", p: "For most Carson searches the customer decides from the three-result map pack before they ever reach a website. We work the levers that move it — Google Business Profile completeness, steady recent reviews, citation consistency, and category precision — weekly, not just at setup." },
      { h: "State-vendor and procurement search", p: "Carson's state-adjacent firms get found by procurement officers and agency contacts running very specific searches. We structure content and schema so those firms surface for the terms that matter to that audience, with the credibility signals — track record, named clients, certifications — those buyers look for." },
    ],
    faqs: [
      { question: "How long until we rank in Carson City?", answer: "Technical fixes register in Search Console within 2–3 weeks, content gains usually start by month two, and map-pack movement on competitive Carson terms typically lands in 90–120 days." },
      { question: "Is SEO worth it in a market this small?", answer: "Often more than in Reno. Less competition for the same terms, a tighter base, and once you rank you tend to stay — so retention on Carson SEO engagements runs high." },
      { question: "Do you optimize my Google Business Profile?", answer: "Yes — GBP optimization is core to every Carson SEO engagement, worked weekly: categories, services, photos, posts, and replying to every review." },
    ],
  },
  "carson-city/digital-marketing": {
    title: "Digital Marketing for Carson City Businesses",
    subtitle:
      "Paid search and local ads for a word-of-mouth town — budget that brings the right Carson calls in, not vanity clicks.",
    sections: [
      { h: "Small market, tight targeting", p: "In a market Carson's size, broad campaigns waste money. We geo-target Carson City and the Carson Valley and lean on high-intent search over broad display, so the budget goes to people actually looking to hire — not impressions that never call." },
      { h: "Seasonality drives the calendar", p: "Carson's trades run on predictable seasons — HVAC peaks in July and January, roofing in the fall. We schedule ad budget to match real demand instead of spending flat all year, so you're loudest exactly when customers are searching." },
      { h: "Tracking you can defend", p: "Every campaign gets call tracking with dynamic numbers and form-fill attribution, and a monthly report showing cost-per-lead and cost-per-customer. If a channel isn't converting, we kill it within 30 days — we measure dollars in versus dollars out, not impressions." },
    ],
    faqs: [
      { question: "What's the minimum ad budget worth running in Carson?", answer: "Around $1,500/month in ad spend. Below that the data is too thin to optimize on and campaigns struggle to get out of Google's learning phase — we'll tell you to put the money into SEO instead." },
      { question: "Google or Meta for Carson businesses?", answer: "Google Search first for most Carson service businesses — it's high intent and fast to track. Meta works for a visual offering or a longer consideration window. We pick the mix that matches your customers." },
      { question: "How fast do ads work compared to SEO?", answer: "Ads validate in days; SEO compounds over months. For most Carson clients we run paid for immediate calls while SEO builds the durable, lower-cost pipeline underneath it." },
    ],
  },
  "reno/web-design": {
    title: "Web Design for Reno Businesses",
    subtitle:
      "Custom, fast, conversion-built sites for the Biggest Little City's most competitive niches — and the Reno-Sparks trades dispatching across Washoe.",
    sections: [
      { h: "Reno competition is real — speed wins", p: "Reno is a crowded market, and a lot of the incumbents are slow, template-y WordPress sites. A custom build that loads in under two seconds, clears a 95+ Lighthouse score, and puts a clear call to action above the fold beats them on the exact signals Google and customers both reward." },
      { h: "MidTown & hospitality vs the trades", p: "Reno isn't one market. Hospitality and MidTown brands need design-forward, visual sites; the high-volume trades dispatching across Washoe need service-area pages, click-to-call, and a booking flow that works from a phone. We build to the customer journey your niche actually has." },
      { h: "Built to rank in a saturated SERP", p: "A pretty Reno site that nobody finds is a brochure. Every build ships with SEO foundations — schema, clean URLs, fast Core Web Vitals, and the local page structure — so a new site can climb past entrenched competitors instead of getting buried on page three." },
    ],
    faqs: [
      { question: "How do you compete with established Reno agencies?", answer: "On the things that actually move rankings and conversions: speed, SEO-built foundations, and transparent pricing. Many Reno incumbents lead on visuals and ship slow sites — we lead on performance and results." },
      { question: "Do you cover Sparks and the rest of Washoe?", answer: "Yes. For Reno trades we build one Reno–Sparks site with service-area pages covering Reno, Sparks, Spanish Springs, and the surrounding county so you rank across the whole dispatch area." },
      { question: "How long does a Reno web build take?", answer: "Most full projects — discovery, design, build, content, launch — run 4–8 weeks, with a flat scope agreed upfront so there are no surprise invoices." },
    ],
  },
  "reno/seo": {
    title: "SEO for Reno Businesses",
    subtitle:
      "SEO that compounds in a saturated Reno SERP — plus the Reno–Sparks dual-market strategy most agencies skip.",
    sections: [
      { h: "Reno SEO compounds slower but bigger", p: "Reno is more competitive than Carson, which cuts both ways: rankings take longer to earn, but the traffic and upside are larger once they land. The winning approach is patient — clean technical foundations first, then depth of genuinely useful local content." },
      { h: "The Reno–Sparks dual market", p: "Reno and Sparks share a labor market but not the same searches. Most agencies target only 'Reno' and leave Sparks intent on the table. We build for both cities' queries so you capture demand across the whole metro, not half of it." },
      { h: "Beating the national programmatic pages", p: "A chunk of the Reno SERP is thin, out-of-town location pages from national agencies. Real local proof — named clients, genuine local content, a review-rich Google Business Profile — outranks those pages because it's exactly what they can't fake." },
    ],
    faqs: [
      { question: "How long does Reno SEO take?", answer: "Most clients see real ranking movement by month two and meaningful traffic gains by month four. Reno is competitive, so it compounds more slowly than Carson — but the ceiling is higher." },
      { question: "Can a local shop outrank national SEO firms in Reno?", answer: "Yes. The national location pages are thin and generic; genuine local pages, real reviews, and a properly optimized Google Business Profile beat them on the local signals Google weighs most." },
      { question: "Do you work the map pack too?", answer: "Yes — Google Business Profile and the local map pack are core to every Reno SEO engagement, alongside organic. In many niches the map pack drives more calls than the blue links." },
    ],
  },
  "reno/digital-marketing": {
    title: "Digital Marketing for Reno Businesses",
    subtitle:
      "Google and Meta ads built to convert in Reno's competitive market — dedicated landing pages, weekly optimization, and honest attribution.",
    sections: [
      { h: "Reno CPCs are higher — landing pages matter more", p: "Clicks cost more in a competitive market, so where you send them decides whether the budget works. Every Reno campaign gets a dedicated, fast landing page focused on one offer — never the homepage — with the CTA above the fold and trust signals below it." },
      { h: "Channel mix for Reno customers", p: "Google Search is the primary channel for most Reno service businesses — high intent, fast to optimize. Meta earns its place for hospitality and visual offerings; Display and YouTube are usually wasted spend at small budgets. We pick the channels that match your customer journey." },
      { h: "Weekly optimization beats set-and-forget", p: "Reno competitors bid actively, so campaigns that sit still decay. We review every active campaign weekly — pausing what isn't converting, pushing budget to what is, refreshing fatigued creative — which is what separates campaigns that improve from campaigns that rot." },
    ],
    faqs: [
      { question: "What ad budget do I need for Reno?", answer: "Plan on $1,500+/month in ad spend to escape Google's learning phase and generate enough data to optimize. Below that we'll steer you to SEO and content instead." },
      { question: "Ads or SEO first in Reno?", answer: "For most Reno businesses, ads for cash flow now and SEO for the long game. Paid surfaces the bottlenecks quickly; SEO fills the funnel sustainably and lowers what every paid click has to earn." },
      { question: "How do you prove ROI?", answer: "Call tracking with dynamic numbers, form-fill attribution, and a monthly cost-per-lead and cost-per-customer report. We measure dollars in versus dollars out — not impressions or engagement." },
    ],
  },
  "sparks/web-design": {
    title: "Web Design for Sparks Businesses",
    subtitle:
      "Fast, service-area websites for Sparks' booming home-services and trades market — along the I-80 corridor and out into Spanish Springs.",
    sections: [
      { h: "Built for a growing residential market", p: "Sparks and Spanish Springs are among the fastest-growing parts of Northern Nevada, which means real, rising demand for home services and trades. We build service-area sites that rank neighborhood by neighborhood so new residents searching for a plumber, roofer, or HVAC tech find you first." },
      { h: "Less saturated than Reno", p: "Because most agencies fold Sparks into a generic Reno page, Sparks-specific search is genuinely winnable. A dedicated Sparks site — with real local content and Sparks-tuned schema — claims a SERP your competitors never bothered to." },
      { h: "Mobile-first for on-the-truck booking", p: "Sparks trades win jobs on the phone. Every build is designed at 375px first, loads instantly on LTE, keeps the number click-to-call from anywhere on the page, and shortens the booking flow so a customer can finish it standing in their driveway." },
    ],
    faqs: [
      { question: "Do Sparks businesses need a separate site from Reno?", answer: "Usually one build with service-area pages covering Sparks, Spanish Springs, and Reno — but with a genuine Sparks page rather than a generic Reno one, so you actually rank for Sparks searches." },
      { question: "How much does a Sparks website cost?", answer: "Similar to Carson and Reno — most service-business sites land between $3,500 and $9,000 for a full build, with a flat scope agreed upfront." },
      { question: "Can you help me rank for 'Sparks' specifically?", answer: "Yes. A dedicated, content-rich Sparks page beats a competitor's generic Reno page for Sparks-specific queries — which is exactly the gap we build to fill." },
    ],
  },
  "sparks/seo": {
    title: "SEO for Sparks Businesses",
    subtitle:
      "Local SEO that claims Sparks and Spanish Springs search before your Reno competitors do.",
    sections: [
      { h: "Sparks is a winnable SERP", p: "Most agencies only target 'Reno' and never build for Sparks — which leaves Sparks-specific search wide open. A real Sparks page plus an optimized Google Business Profile takes that gap while competitors keep pointing everything at Reno." },
      { h: "Map pack across the I-80 corridor", p: "For 'near me' searches in Sparks, the map pack decides. We work proximity, review velocity, citation consistency, and category precision so Sparks and Spanish Springs trades surface in the three-result pack that drives the calls." },
      { h: "Spanish Springs & neighborhood intent", p: "Sparks isn't one place — Spanish Springs, the Marina, and the industrial east each search differently. Neighborhood-level content that ranks locally captures intent your competitors' single Reno page can't." },
    ],
    faqs: [
      { question: "Is Sparks SEO easier than Reno?", answer: "Often, yes. There's less competition for Sparks-specific terms because most agencies target Reno only — so a genuine Sparks page can rank faster." },
      { question: "Do you optimize my Google Business Profile for Sparks?", answer: "Yes — GBP is core to Sparks SEO, worked weekly, because the map pack drives most 'near me' calls in a growing residential market." },
      { question: "How long until results in Sparks?", answer: "Technical fixes register within a few weeks; map-pack movement on Sparks terms typically lands around 90 days, faster than the same terms would in Reno." },
    ],
  },
  "sparks/digital-marketing": {
    title: "Digital Marketing for Sparks Businesses",
    subtitle:
      "Paid search and local ads that turn Sparks and Spanish Springs growth into booked jobs.",
    sections: [
      { h: "Target the growth corridors", p: "Sparks is growing fast, and new residents are high-intent buyers of home services. We geo-target Sparks, Spanish Springs, and the I-80 corridor so budget lands on the people actually moving in and searching — not wasted on the wider metro." },
      { h: "Home-services intent is high", p: "Search ads capture the 'plumber near me' and 'AC repair Sparks' demand at the exact moment it happens. For a growing residential market, that high-intent search is where the fast wins are." },
      { h: "Attribution that pays", p: "Call tracking, form-fill attribution, and weekly budget reallocation mean every dollar is accountable to a lead. If a campaign isn't earning, we shift the spend to what is — and we tell you plainly." },
    ],
    faqs: [
      { question: "What's the minimum ad budget for Sparks?", answer: "Around $1,500/month in ad spend to generate enough data to optimize and clear Google's learning phase. Below that, SEO is the better use of the money." },
      { question: "Which channel works for Sparks home services?", answer: "Google Search first — it captures high-intent 'near me' demand from Sparks and Spanish Springs residents. Meta supplements for visual offerings." },
      { question: "How soon do calls come in?", answer: "Usually within days of launch once campaigns clear the learning phase — one of the reasons we pair fast-starting ads with slower-compounding SEO." },
    ],
  },
};
