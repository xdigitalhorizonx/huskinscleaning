/**
 * Central brand data — the single source of truth for the whole site.
 *
 * DIGITAL HORIZON — Web design, SEO & digital marketing for Northern Nevada
 * service and trade businesses. Content mirrors digitalhorizon.dev; the layout
 * and visual system are reused from the prior build.
 */

export const site = {
  brand: "Digital Horizon",
  short: "DH",
  tagline: "Three disciplines. One horizon.",
  pitch: "Web design that brings Northern Nevada customers in.",
  description:
    "Digital Horizon builds high-converting websites for Northern Nevada service and trade businesses, paired with local SEO and digital marketing that brings in qualified leads from Reno, Sparks, Carson City, and Lake Tahoe.",
  domain: "digitalhorizon.dev",
  url: "https://digitalhorizon.dev",
  email: "hello@digitalhorizon.dev",

  phone: {
    display: "(775) 237-8898",
    href: "tel:+17752378898",
    e164: "+17752378898",
  },

  address: {
    street: "2085 E William St, Suite 10",
    locality: "Carson City",
    region: "NV",
    regionName: "Nevada",
    postalCode: "89701",
    country: "US",
  },
  /** Approx. geo center for Carson City, NV — for LocalBusiness schema. */
  geo: { latitude: 39.1638, longitude: -119.7674 },
  maps: "https://maps.app.goo.gl/4XdSwQAXf7Xeo6vb9",

  social: {
    x: "https://x.com/BrandonDam756",
    facebook: "https://www.facebook.com/profile.php?id=61589191467653",
    instagram: "https://www.instagram.com/digitalhorizon.nv/",
    nextdoor: "https://nextdoor.com/page/digital-horizon-carson-city-nv",
  },
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Services", href: "/services/" },
  { label: "About", href: "/about/" },
  { label: "Locations", href: "/locations/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];

/** Headline stat readout. Capability-framed, not literal traffic claims. */
export const stats = [
  { num: "95+", label: "Lighthouse, on mobile" },
  { num: "Top 3", label: "Google Map Pack target" },
  { num: "3", label: "Disciplines, one system" },
  { num: "90d", label: "Project to partnership" },
];

/** Illustrative live-visibility metrics (mirrors the dashboards on DH's site). */
export const kpis = [
  { label: "Engaged Sessions", value: "22.4K", delta: "+6.2%", tone: "up" },
  { label: "SEO Authority", value: "96", delta: "score", tone: "flat" },
  { label: "Avg. Position", value: "3.2", delta: "improved", tone: "up" },
  { label: "Organic Clicks", value: "267K", delta: "+12.4%", tone: "up" },
];

/** Marquee ticker phrases. */
export const ticker = [
  "WEB DESIGN",
  "LOCAL SEO",
  "DIGITAL MARKETING",
  "NORTHERN NEVADA",
  "BUILT TO RANK",
  "BOOKED WORK",
  "CARSON CITY · RENO · TAHOE",
  "FAST ON MOBILE",
  "ONE HORIZON",
];

export type Service = {
  slug: string;
  num: string;
  name: string;
  tagline: string;
  desc: string;
  bullets: string[];
  icon: string;
  color: "cyan" | "amber" | "violet" | "green" | "red";
};

export const services: Service[] = [
  {
    slug: "web-design",
    num: "01",
    name: "Web Design",
    tagline: "Web design built to rank and convert.",
    desc: "Custom-built sites for Northern Nevada service businesses — fast on mobile, search-engine-ready from day one, and tuned to turn visits into booked work.",
    bullets: [
      "Custom design, not templates",
      "SEO foundations from day one",
      "Mobile-first, 95+ Lighthouse",
      "CMS you can edit yourself",
    ],
    icon: "browser",
    color: "cyan",
  },
  {
    slug: "seo",
    num: "02",
    name: "SEO",
    tagline: "SEO that compounds quietly.",
    desc: "Technical foundations, content with a point of view, and the patient work that turns “where do I find a…” into your phone ringing.",
    bullets: [
      "Technical audits & schema",
      "Local pack optimization",
      "Content strategy",
      "Citation cleanup",
    ],
    icon: "search",
    color: "violet",
  },
  {
    slug: "digital-marketing",
    num: "03",
    name: "Digital Marketing",
    tagline: "Digital marketing that knows the neighborhood.",
    desc: "Local-first campaigns built for Northern Nevada — paid search, Google Business Profile, and email/SMS sequences that bring the right calls in.",
    bullets: [
      "Brand identity & messaging",
      "Google Business Profile",
      "Paid search & local ads",
      "Email & SMS sequences",
    ],
    icon: "megaphone",
    color: "green",
  },
];

export type Step = { num: string; title: string; text: string };

export const process: Step[] = [
  {
    num: "01",
    title: "Listen, then look.",
    text: "A two-week discovery: we sit with your team, ride along on calls, audit what's already running, and figure out what's actually broken — usually it's not what people thought.",
  },
  {
    num: "02",
    title: "Ship the first thing.",
    text: "A defined first project — a website, a campaign, a new landing page — delivered on a fixed scope and fixed price. No retainer, no surprises. You get something live and useful in weeks, not quarters.",
  },
  {
    num: "03",
    title: "Hold the line.",
    text: "After launch, a flat monthly partnership covers ongoing marketing, SEO, content updates, and new builds — priced so it pays for itself by month three or we'll tell you so.",
  },
  {
    num: "04",
    title: "Be the only choice.",
    text: "Over time, the systems we build become how you operate. The marketing brings the leads, the SEO holds the rankings, and the content keeps you top-of-mind. That's the moat.",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  company: string;
  location?: string;
  date?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "They didn't just throw together a website — they built it the right way from the ground up, making sure everything was optimized so I could actually rank and get real leads. What really sets them apart is the ongoing support: they consistently audit the site, make smart adjustments, and keep fresh content coming in. If you want a site that's not only clean and professional but actually performs and grows your business, I'd highly recommend them.",
    author: "Skydog_121",
    company: "Apollo Landscaping",
    date: "April 2026",
  },
  {
    quote:
      "They didn't pitch us a package. They came out, walked the yard, and three months later every quote went out from a tool they built us. That's the difference.",
    author: "Jamie R.",
    company: "Sierra Stone & Patio",
    location: "Minden, NV",
  },
];

/** Trades & professions Digital Horizon builds for. */
export const industries = [
  "Plumbing", "HVAC", "Electrical", "Roofing", "Flooring", "Painting",
  "Drywall", "Landscaping", "Tree Service", "Concrete & Masonry",
  "Welding & Metalwork", "Auto Body & Repair", "General Contracting",
  "Solar & Renewables", "Pest Control", "Dispatch & Fleet",
  "Property Management", "Cleaning & Janitorial", "Hotels & Hospitality",
  "Medical Practices", "Dental Offices", "Legal Services",
  "Accounting & CPA", "Real Estate", "Insurance Agencies",
  "Financial Advisors", "Architects & Engineers", "Veterinary Clinics",
];

export type Location = { name: string; slug?: string; note: string };

export const locations: Location[] = [
  { name: "Carson City", slug: "carson-city", note: "Home base — the capital, and where we know the market best." },
  { name: "Reno", slug: "reno", note: "The Biggest Little City's most competitive service niches." },
  { name: "Sparks", slug: "sparks", note: "Fast-growing trades and home services along the I-80 corridor." },
  { name: "Lake Tahoe", slug: "lake-tahoe", note: "Seasonal, tourism-driven businesses on both shores." },
  { name: "Gardnerville / Minden", slug: "gardnerville", note: "Carson Valley contractors and family-run shops." },
  { name: "Fallon", slug: "fallon", note: "Churchill County service businesses and ag-adjacent trades." },
  { name: "Elko", slug: "elko", note: "Mining-country operators and the crews that support them." },
  { name: "Las Vegas", slug: "las-vegas", note: "Statewide reach for larger campaigns and multi-location brands." },
];

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "ai-written-blog-content-rankings-2026",
    title: "AI-Written Blog Content and Your Rankings: What Actually Works in 2026",
    category: "SEO",
    date: "2026-06-29",
    readTime: "7 min",
    excerpt:
      "Every service business owner is wondering the same thing in 2026 — can I just have ChatGPT write my blog posts? The honest answer is more nuanced than yes or no. Here is the workflow that earns rankings and the shortcut that quietly tanks your site.",
    body: [
      "The short version: AI is a fine drafting tool and a terrible publishing strategy. Google doesn't penalize \"AI content\" as a category — it penalizes unhelpful content, and unedited AI output is almost always unhelpful. The line isn't who typed it. It's whether a real expert stood behind it.",
      "The workflow that ranks looks like this: you (the expert) dictate the outline and the hard-won details a model can't know — the actual price ranges in Carson City, the permit quirk in Douglas County, the mistake you see every week. The AI drafts around that scaffolding. Then a human edits for accuracy, cuts the filler, and adds the specifics that make it obviously written by someone who does the work.",
      "The shortcut that tanks sites is the opposite: a prompt, a paste, and a publish button, repeated fifty times. It reads generic, it says nothing a competitor's page doesn't, and it buries your genuinely useful pages under a pile of thin ones. That's what gets you a quiet, algorithmic haircut.",
      "Our rule at Digital Horizon: AI can help you write faster, never think for you. Every post that goes out under your name should teach a customer something true that only a local operator would know.",
    ],
  },
  {
    slug: "ai-voice-agents-service-businesses-2026",
    title: "AI Voice Agents Are Answering Service Calls Now: A 2026 Reality Check",
    category: "Software",
    date: "2026-06-23",
    readTime: "8 min",
    excerpt:
      "AI voice agents are now answering inbound service calls in Carson City and Reno for under $500/month — picking up on the first ring, booking appointments, and texting you the details. Here is what they do well, what they still can't do, and a five-day rollout plan.",
    body: [
      "The missed-call problem is real: for most service businesses, a missed call is a missed job, and the caller dials your competitor before lunch. In 2026, a well-configured AI voice agent answers on the first ring, 24/7, and never puts anyone on hold.",
      "What they do well today: qualify the caller, answer the twenty questions you're tired of answering, book straight into your calendar, and text you a clean summary. For after-hours and overflow, they're a genuine upgrade over voicemail — which nobody leaves anymore.",
      "What they still can't do: read a nervous customer, handle a true emergency with judgment, or close a high-trust, high-dollar job. The move isn't \"replace the front desk.\" It's \"stop losing the calls the front desk can't get to.\"",
      "Our five-day rollout: map your top ten call types, script the agent around your real answers, wire it to your calendar and CRM, shadow it for a week, then let it own overflow and after-hours. Start there before you let it touch a primary line.",
    ],
  },
  {
    slug: "ai-agents-browsing-your-website-agentic-web-2026",
    title: "AI Agents Are Browsing Your Website: A 2026 Playbook for the Agentic Web",
    category: "Web",
    date: "2026-06-16",
    readTime: "8 min",
    excerpt:
      "ChatGPT, Claude, and Perplexity agents are starting to click through websites on behalf of real customers. The sites they can read, navigate, and trust will get sent traffic. The rest will be skipped. Here's the six-part playbook for being the site agents pick.",
    body: [
      "There's a new kind of visitor on your website, and it isn't a person — it's an agent acting for one. When someone asks an assistant to \"find a plumber in Carson City who can come out today,\" that assistant is reading sites, comparing them, and handing back a shortlist. You want to be on it.",
      "Agents reward the same things good users do, just more literally: clean semantic HTML, obvious contact and booking paths, real answers to real questions, and structured data that states plainly who you are, where you work, and what you charge. Fancy animations they can't parse are invisible to them.",
      "The six pillars: fast, crawlable pages; complete and accurate schema; a clear services-and-areas structure; honest, specific content; unambiguous calls-to-action; and consistent NAP everywhere. None of it is exotic. It's the fundamentals, done properly, which is exactly why most sites lose.",
      "Build for the agent and you build for the human, too. The site that's easy for a machine to trust is easy for a customer to hire.",
    ],
  },
  {
    slug: "google-business-profile-playbook-2026",
    title: "Your Google Business Profile Is Your Real Homepage: A 2026 Playbook",
    category: "SEO",
    date: "2026-06-10",
    readTime: "8 min",
    excerpt:
      "For most local searches in Carson City and Reno, your Google Business Profile is the first — and often only — thing a prospective customer sees. A five-pillar playbook for getting it right, plus the 45-minute monthly rhythm that separates Map Pack winners from everyone else.",
    body: [
      "Here's the uncomfortable truth: for a huge share of local searches, the customer decides before they ever reach your website. They see the Map Pack, they scan three profiles, they tap the one with the most reviews and a photo that looks legit. Your Google Business Profile is your real homepage.",
      "The five pillars: a precise primary category, complete services and attributes, a steady flow of recent reviews with owner replies, fresh photos, and regular posts. Each one is a ranking signal and a trust signal at the same time.",
      "Reviews are the flywheel. Ask every happy customer, make it a two-tap process, and reply to every single one — good and bad. A thoughtful reply to a two-star review sells better than a wall of five-stars nobody engaged with.",
      "The 45-minute monthly rhythm: reply to reviews, post an update, refresh a few photos, check the insights for what people actually searched, and fix anything that drifted. Winners aren't doing something exotic. They're just doing this, every month, while everyone else forgets the profile exists.",
    ],
  },
  {
    slug: "seo-vs-paid-ads-northern-nevada",
    title: "SEO vs. Paid Ads for Northern Nevada Small Businesses: A Decision Framework",
    category: "Marketing",
    date: "2026-05-04",
    readTime: "11 min",
    excerpt:
      "If your marketing budget can only fund one channel, which should it be? A practical framework for Carson, Reno, and Lake Tahoe businesses — when SEO is the right call, when paid ads make more sense, and when running both wastes money.",
    body: [
      "The honest answer is \"it depends,\" but not in the useless way consultants mean it. It depends on three things you can actually assess: how fast you need leads, how long a customer stays worth pursuing, and how competitive your niche is locally.",
      "Paid ads are rented attention — instant, measurable, and gone the moment you stop paying. They're the right first move when you need calls this month, when you're testing a new service, or when the keyword is so competitive that ranking would take a year you don't have.",
      "SEO is owned attention — slow to build, then durable and nearly free per lead once it compounds. It's the right call when your margins reward patience and when \"where do I find a…\" searches in your town aren't already locked up by national chains.",
      "Running both only makes sense once you have the budget to do each properly. Half-funding two channels beats neither. For most Northern Nevada service businesses we start with ads for cash flow and SEO for the long game — and we tell you plainly when one of them isn't earning its keep.",
    ],
  },
  {
    slug: "choose-web-designer-carson-city",
    title: "How to Choose a Web Designer in Carson City: 12 Questions to Ask",
    category: "Web",
    date: "2026-05-04",
    readTime: "9 min",
    excerpt:
      "Hiring the wrong web designer is expensive twice — once when you pay them, again when you pay someone else to fix the result. Twelve specific questions that separate the agencies who deliver from the ones you'll regret signing with.",
    body: [
      "A pretty website that nobody finds and nobody books from is a very expensive brochure. Before you sign, your job is to figure out whether a designer is building you a business asset or a portfolio piece for themselves.",
      "Ask who owns the site and the domain when you're done. Ask whether you can edit it yourself without calling them. Ask to see live sites they built that rank — not mockups — and ask to call those owners. Ask what happens after launch, and get the monthly number in writing.",
      "Ask the technical questions too, even if the answers go over your head: What's the Lighthouse score? Is schema markup included? How's the site hosted, and what's the backup plan? A good partner will happily explain; a bad one will get cagey.",
      "The through-line of all twelve questions is the same: does this person care whether the site actually makes you money after they cash the check? Hire the one who does, and get everything they promise in writing.",
    ],
  },
  {
    slug: "generative-engine-optimization",
    title: "GEO: How to Be the Source AI Search Engines Cite",
    category: "SEO",
    date: "2026-04-30",
    readTime: "9 min",
    excerpt:
      "Search is shifting from “ten blue links” to AI-generated answers — Google AI Overviews, ChatGPT, Perplexity, Gemini. The work of being one of the cited sources is different from traditional SEO. Here's what changes, and what doesn't.",
    body: [
      "Generative Engine Optimization is the practice of getting your business named and linked inside AI-generated answers. When someone asks an assistant a question your business could answer, GEO is the work that makes you the source it pulls from.",
      "What changes: the goal shifts from ranking a page to being quotable. AI answers favor clear, factual, self-contained statements — the definition, the number, the direct answer — over keyword-stuffed pages that bury the point three scrolls down.",
      "What doesn't change: authority and trust still win. The models lean on sources that are cited elsewhere, consistent across the web, and obviously written by someone who knows the subject. That's the same reputation traditional SEO has always rewarded.",
      "Practically: answer real questions directly, structure your content so a machine can lift a clean paragraph, keep your facts consistent everywhere, and earn the mentions that teach the models to trust you. Old-school SEO and GEO are more alike than the hype admits.",
    ],
  },
  {
    slug: "structured-data-for-local-seo",
    title: "Schema for Local SEO: How to Tie Your Site to a Specific Geography",
    category: "SEO",
    date: "2026-04-29",
    readTime: "8 min",
    excerpt:
      "Schema markup is the cleanest way to tell Google exactly where you operate, who you are, and what you do — but most service-business sites either skip it or wire it up wrong. Here's how to do it right.",
    body: [
      "Schema is structured data — a hidden, machine-readable layer that states the facts of your business in a language search engines don't have to guess at. For local businesses it's one of the highest-leverage, lowest-effort wins available.",
      "The core nodes: LocalBusiness (with your exact NAP), the areas you serve, your services, your hours, and your reviews. Get these right and consistent, and you've handed Google an unambiguous answer to \"who is this and where do they work?\"",
      "The common mistakes are boring and fatal: NAP that doesn't match your Google Business Profile, an address that isn't really an office, area-served lists that contradict the rest of the site, or markup that throws errors nobody ever checked.",
      "Done properly, schema quietly connects your website, your profile, and your citations into one coherent entity Google can trust — which is exactly what it takes to win the Map Pack in a specific town.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export type Value = { title: string; icon: string; text: string };

export const values: Value[] = [
  {
    title: "One system, not channels",
    icon: "compass",
    text: "We don't sell you a website here and some ads there. Web, SEO, and marketing are built to work as one machine that gets better every month.",
  },
  {
    title: "Fixed scope, no surprises",
    icon: "shield",
    text: "Start with one well-scoped project at a fixed price. No retainer to sign on day one, no meter running while you decide if we're any good.",
  },
  {
    title: "Built to rank, built to convert",
    icon: "gauge",
    text: "Fast on mobile, search-engine-ready from day one, and tuned to turn visits into booked work — every build clears a 95+ Lighthouse bar.",
  },
  {
    title: "Local, and it shows",
    icon: "pin",
    text: "We know Carson, Reno, and Tahoe — the seasons, the competition, the search terms your customers actually type. The work is built for here.",
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "How much does a website cost?",
    answer:
      "It depends on scope, but we start every relationship with one well-scoped project at a fixed price — no open-ended retainer. Most first projects fall between $5,000 and $15,000; larger builds and multi-location campaigns run higher. You'll get a clear number before any work starts.",
  },
  {
    question: "Do I have to sign a long contract?",
    answer:
      "No. We start with a single fixed-scope, fixed-price project so you can feel how we work without committing to a long agreement. Most clients move into a flat monthly partnership within 90 days — because the cost-per-result keeps dropping, not because they're locked in.",
  },
  {
    question: "Do you only work with Northern Nevada businesses?",
    answer:
      "It's our focus — Reno, Sparks, Carson City, Gardnerville/Minden, Fallon, Elko, and Lake Tahoe — because local knowledge is a real advantage in SEO and local marketing. We also take on statewide work, including Las Vegas, for larger campaigns and multi-location brands.",
  },
  {
    question: "How long until I see results?",
    answer:
      "A new website can be live and useful in weeks, not quarters. SEO compounds more slowly — meaningful ranking movement typically shows over three to six months. Paid search and Google Business Profile work can bring calls in much sooner while the SEO builds underneath it.",
  },
  {
    question: "Can I edit the website myself?",
    answer:
      "Yes. We build on a CMS you can actually use, and you own the site and the domain. Edit your own copy and photos anytime — and when you'd rather we handle updates, that's part of the monthly partnership.",
  },
];
