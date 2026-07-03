/**
 * Per-city and per-(city × service) landing-page content, mirrored from
 * digitalhorizon.dev/locations/*. Cities without a detail entry render from a
 * shared template using their `note` from data/site.ts.
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
      {
        question: "Does Carson City really have a different market than Reno?",
        answer:
          "Yes. State-government adjacency, a tighter-knit business community, more stable demographics. A Reno playbook doesn't transfer cleanly — we rebuild strategy from scratch for Carson clients.",
      },
      {
        question: "Where's your office, and do you do in-person meetings?",
        answer:
          "Our office is on E William St in Carson City — same town as you. On-site meetings are easy and we keep them frequent: monthly for major engagements, quarterly for smaller ones, plus weekly video syncs in between.",
      },
      {
        question: "Is local SEO worth it in a smaller market like Carson?",
        answer:
          "Often more worth it than in Reno. Less competition for the same keywords, a tighter customer base, and once you rank you tend to stay there. Retention on Carson SEO engagements runs high.",
      },
      {
        question: "How long until we see ranking movement on a Carson City SEO engagement?",
        answer:
          "Technical fixes show up in Google Search Console within 2–3 weeks. Content gains usually start landing by month two. Map-pack movement on competitive Carson terms is typically 90–120 days.",
      },
      {
        question: "What does a typical Carson City web project cost?",
        answer:
          "Most Carson service-business sites land between $3,500 and $9,000 for a full design/build/launch. Larger multi-location or service-area builds run higher. Ongoing SEO is $750–$1,500/month. We share a flat scope upfront so the number you see is the number you pay.",
      },
    ],
  },
  reno: {
    tagline: "Web, SEO & marketing for the Biggest Little City.",
    intro: [
      "Reno is a bigger, faster, more competitive market than Carson — tech-relocator startups, MidTown hospitality, and a high-volume trades market dispatching across all of Washoe County.",
      "That means more competition for the same keywords and a customer base that shops around. We build Reno sites and campaigns to win on speed, clarity, and proof — and we run the Reno–Sparks dual-market strategy most agencies skip.",
    ],
  },
};

export interface ServiceCityDetail {
  title: string;
  subtitle: string;
  sections: { h: string; p: string }[];
}

/** Keyed by `${citySlug}/${serviceSlug}`. */
export const serviceCityDetails: Record<string, ServiceCityDetail> = {
  "carson-city/web-design": {
    title: "Web Design for Carson City Businesses",
    subtitle:
      "Built for state-adjacent professional services, the trades, and the established SMBs who run this town. Same-town team, same-week response, and a playbook tuned for Carson buyers — not adapted from Reno.",
    sections: [
      {
        h: "Why Carson buyers are different",
        p: "Carson is the state capital, but it's not Reno. The buying culture rewards longevity, named track records, and word-of-mouth more than aggressive marketing or conversion-rate-optimized hype. Carson businesses stick with vendors who've earned their trust, so the bar for a new digital partner is genuinely higher here — but once you clear it, the relationships last.",
      },
      {
        h: "State-government adjacency reshapes the customer base",
        p: "A meaningful share of Carson firms work directly or indirectly with the State of Nevada. Those buyers want sites that signal reliability and verifiable history: real client names, specific case studies, transparent processes. They don't respond to the growth-hacky landing pages that work for Reno tech-startup tooling.",
      },
      {
        h: "Service-area sites for Carson trades",
        p: "HVAC, plumbing, electrical, roofing — Carson's trades market is shaped by aging housing stock along Highway 50 and out into the Carson Valley. We lead with a service-area selector so a customer in Dayton or Minden sees exactly what's covered, with separate landing pages per area that rank locally, click-to-call from anywhere on the page, and a booking flow short enough to complete from a phone in someone's truck.",
      },
      {
        h: "Named-proof sites for state-adjacent professional firms",
        p: "Legal, consulting, engineering, and public-affairs firms with state-vendor exposure get quieter sites — fewer animations, calmer palettes, named clients and credentialed team members, and structure that leads with track record over generic capability statements. Schema is configured so the firm shows up cleanly for the searches procurement officers actually run. Less flash, more credibility.",
      },
      {
        h: "Refresh builds for established Carson SMBs",
        p: "Auto repair, vet clinics, dental, family law, accounting — the established Carson SMB that's had the same site since 2018 and finally needs to update it. These projects preserve customer trust during the transition: familiar enough that loyal customers don't bounce, modern enough to win the next ten years. Most refresh builds ship in 4–6 weeks and immediately lift mobile bookings and call volume.",
      },
    ],
  },
};
