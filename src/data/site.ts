/**
 * Central business data — the single source of truth for the whole site.
 *
 * Every phone number, address, service description and testimonial is defined
 * here once and imported everywhere (header, footer, schema.org JSON-LD, page
 * copy). This guarantees NAP (Name / Address / Phone) consistency, which is one
 * of the strongest local-SEO ranking signals — and one of the biggest problems
 * on the current huskinsllc.com (the business is listed as "Huskins LLC",
 * "Huskins Services LLC" and "Huskins Cleaning & Remodeling Services" with two
 * different phone numbers across the web).
 */

export const site = {
  /** Public brand name used in copy and titles. */
  brand: "Huskins Cleaning",
  /** Registered legal entity. */
  legalName: "Huskins Services LLC",
  /** Longer descriptive name for schema.org. */
  longName: "Huskins Cleaning Services",
  tagline: "Spotless Homes. Honest People.",
  domain: "huskinsllc.com",
  url: "https://huskinsllc.com",

  phone: {
    display: "(402) 249-0449",
    href: "tel:+14022490449",
    e164: "+14022490449",
  },

  email: "info@huskinsllc.com",

  address: {
    locality: "Omaha",
    region: "NE",
    regionName: "Nebraska",
    postalCode: "68112",
    country: "US",
  },

  /** Approx. geo center of the Omaha service area, for LocalBusiness schema. */
  geo: {
    latitude: 41.2565,
    longitude: -95.9345,
  },

  /** Open 7 days, 7:00 AM – 9:00 PM. */
  hours: {
    label: "Mon–Sun: 7:00 AM – 9:00 PM",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "07:00",
    closes: "21:00",
  },

  founded: "2020",
  bbb: {
    accreditedSince: "2020-11-30",
    rating: "A+",
  },

  /** Aggregate rating shown in schema + review page. Conservative, honest. */
  rating: {
    value: "5.0",
    count: 27,
  },

  social: {
    // Populate when handles are confirmed. Left empty to avoid dead links.
    facebook: "",
    instagram: "",
    google: "",
  },
} as const;

export type ServiceArea = {
  name: string;
  note?: string;
};

/** Omaha metro communities served. Drives the Service Areas page + schema. */
export const serviceAreas: ServiceArea[] = [
  { name: "Omaha", note: "All neighborhoods, Downtown to West Omaha" },
  { name: "Bellevue" },
  { name: "Papillion" },
  { name: "La Vista" },
  { name: "Elkhorn" },
  { name: "Bennington" },
  { name: "Gretna" },
  { name: "Ralston" },
  { name: "Boys Town" },
  { name: "Council Bluffs, IA" },
];

export type Service = {
  /** URL slug under /services/. */
  slug: string;
  /** Short label for nav + cards. */
  title: string;
  /** SEO <title>. */
  metaTitle: string;
  /** SEO meta description (~150-160 chars). */
  metaDescription: string;
  /** H1 for the page. */
  heading: string;
  /** One-line value prop used on cards + hero. */
  tagline: string;
  /** Longer intro paragraph. */
  intro: string;
  /** What's included / checklist bullets. */
  includes: string[];
  /** Ideal-for / use-cases. */
  bestFor: string[];
  /** Simple emoji/glyph used as the card icon key (see Icon component). */
  icon: string;
  /** Path to the service's photo in /public/images. */
  image: string;
  /** Alt text for the service photo. */
  imageAlt: string;
  /** Local keyword phrases this page targets. */
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: "house-cleaning",
    title: "House Cleaning",
    metaTitle: "House Cleaning Services in Omaha, NE | Huskins Cleaning",
    metaDescription:
      "Reliable recurring house cleaning in Omaha, NE. Weekly, bi-weekly & monthly maid service from a trusted, family-owned team. Same crew every visit. Free quote.",
    heading: "House Cleaning Services in Omaha",
    tagline: "The same trusted crew, every single visit.",
    intro:
      "Come home to a spotless house without lifting a finger. Our recurring house cleaning keeps your Omaha home consistently fresh — kitchens, bathrooms, bedrooms and living spaces cleaned top to bottom by a background-checked team you'll get to know by name.",
    includes: [
      "Kitchens: counters, sinks, stovetop, exterior of appliances, cabinet fronts",
      "Bathrooms: toilets, tubs, showers, sinks, mirrors, floors sanitized",
      "Dusting of surfaces, sills, baseboards, blinds and light fixtures",
      "Vacuuming of carpets and rugs, mopping of all hard floors",
      "Beds made and trash emptied on request",
      "A written checklist so nothing gets missed",
    ],
    bestFor: [
      "Busy families and working professionals",
      "Weekly, bi-weekly or monthly schedules",
      "Homeowners who want the same crew each time",
    ],
    icon: "home",
    image: "/images/house-cleaning.webp",
    imageAlt:
      "Professional Huskins cleaner in gloves wiping down a kitchen counter in an Omaha home",
    keywords: [
      "house cleaning Omaha",
      "maid service Omaha NE",
      "recurring house cleaning Omaha",
      "residential cleaning Omaha",
    ],
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    metaTitle: "Deep Cleaning Services in Omaha, NE | Huskins Cleaning",
    metaDescription:
      "Top-to-bottom deep cleaning in Omaha, NE. We scrub the built-up grime standard cleans miss — baseboards, grout, appliances & more. Book your deep clean today.",
    heading: "Deep Cleaning Services in Omaha",
    tagline: "For when your home needs a true reset.",
    intro:
      "Our deep clean reaches the places everyday cleaning skips. It's the perfect first visit before starting a recurring plan, or a seasonal refresh that makes your whole Omaha home feel brand new. We work methodically, room by room, until every detail shines.",
    includes: [
      "Everything in a standard clean, done more thoroughly",
      "Baseboards, door frames, trim and switch plates hand-wiped",
      "Inside microwave and exterior of all appliances degreased",
      "Bathroom grout, tile and hard-water buildup scrubbed",
      "Detailed dusting of blinds, vents, ceiling fans and fixtures",
      "Cabinet fronts, handles and high-touch surfaces sanitized",
    ],
    bestFor: [
      "First-time cleans and seasonal refreshes",
      "Homes that haven't been professionally cleaned recently",
      "Before hosting guests or a special event",
    ],
    icon: "sparkle",
    image: "/images/deep-cleaning.webp",
    imageAlt: "Spotless, freshly deep-cleaned modern bathroom with gleaming fixtures",
    keywords: [
      "deep cleaning Omaha",
      "deep cleaning services Omaha NE",
      "spring cleaning Omaha",
    ],
  },
  {
    slug: "move-in-move-out-cleaning",
    title: "Move In / Move Out Cleaning",
    metaTitle: "Move In / Move Out Cleaning in Omaha, NE | Huskins Cleaning",
    metaDescription:
      "Move-out & move-in cleaning in Omaha, NE. Empty-home deep clean to help you get your deposit back or start fresh. Landlord & realtor friendly. Get a free quote.",
    heading: "Move In / Move Out Cleaning in Omaha",
    tagline: "Leave it spotless. Start somewhere fresh.",
    intro:
      "Moving is stressful enough. We clean empty homes and apartments from top to bottom so you can hand over the keys with confidence — or walk into your new Omaha place knowing it's truly clean. Popular with renters chasing a deposit, homeowners preparing to sell, and landlords turning a unit.",
    includes: [
      "Full interior deep clean of the empty property",
      "Inside cabinets, drawers, closets and shelving",
      "Inside oven and refrigerator on request",
      "All appliances, counters and fixtures degreased and sanitized",
      "Baseboards, doors, walls spot-cleaned, floors vacuumed and mopped",
      "Bathrooms fully scrubbed and disinfected",
    ],
    bestFor: [
      "Renters wanting their full deposit back",
      "Homeowners preparing a house for sale",
      "Landlords, realtors and property managers",
    ],
    icon: "box",
    image: "/images/move-in-move-out.webp",
    imageAlt: "Bright, empty, freshly cleaned room ready for move-in day",
    keywords: [
      "move out cleaning Omaha",
      "move in cleaning Omaha NE",
      "apartment cleaning Omaha",
    ],
  },
  {
    slug: "commercial-cleaning",
    title: "Commercial & Office Cleaning",
    metaTitle: "Commercial & Office Cleaning in Omaha, NE | Huskins Cleaning",
    metaDescription:
      "Dependable commercial & office cleaning in Omaha, NE. Janitorial service for offices, clinics & retail on a schedule that fits your business. Request a quote.",
    heading: "Commercial & Office Cleaning in Omaha",
    tagline: "A clean workplace your team and clients will notice.",
    intro:
      "First impressions matter. We keep Omaha offices, clinics, retail spaces and small commercial buildings clean, sanitary and presentable — on a nightly, weekly or custom schedule that works around your business hours. Reliable janitorial service you can set and forget.",
    includes: [
      "Reception, offices, break rooms and common areas cleaned",
      "Restrooms cleaned, disinfected and restocked",
      "Trash and recycling collected and liners replaced",
      "High-touch points — door handles, switches, counters — sanitized",
      "Floors vacuumed, swept and mopped throughout",
      "Flexible after-hours scheduling, 7 days a week",
    ],
    bestFor: [
      "Offices, clinics and professional suites",
      "Retail storefronts and showrooms",
      "Property managers needing a reliable janitorial partner",
    ],
    icon: "building",
    image: "/images/commercial.webp",
    imageAlt: "Clean, modern Omaha office interior with tidy desks and workstations",
    keywords: [
      "commercial cleaning Omaha",
      "office cleaning Omaha NE",
      "janitorial services Omaha",
    ],
  },
  {
    slug: "post-construction-cleaning",
    title: "Post-Construction Cleaning",
    metaTitle: "Post-Construction Cleaning in Omaha, NE | Huskins Cleaning",
    metaDescription:
      "Post-construction & renovation cleanup in Omaha, NE. We remove dust, debris & residue so your new build or remodel is move-in ready. Contractor friendly. Free quote.",
    heading: "Post-Construction Cleaning in Omaha",
    tagline: "From dusty job site to move-in ready.",
    intro:
      "New construction and remodels leave behind fine dust and debris that ordinary cleaning can't handle. Our post-construction crew clears it all — so builders, contractors and homeowners across Omaha can hand over a finished space that looks as good as the work that went into it.",
    includes: [
      "Removal of construction dust from every surface, including high areas",
      "Sticker, adhesive, paint fleck and residue removal",
      "Windows, tracks, sills and frames cleaned",
      "Fixtures, cabinets and appliances detailed inside and out",
      "Floors vacuumed, scrubbed and finished",
      "Final punch-list clean so the space is truly move-in ready",
    ],
    bestFor: [
      "Home builders and general contractors",
      "Kitchen, bath and whole-home remodels",
      "New commercial build-outs",
    ],
    icon: "hardhat",
    image: "/images/post-construction.webp",
    imageAlt: "Newly finished kitchen build transitioning from construction framing, cleaned and move-in ready",
    keywords: [
      "post construction cleaning Omaha",
      "construction cleanup Omaha NE",
      "renovation cleaning Omaha",
    ],
  },
  {
    slug: "pressure-washing",
    title: "Pressure Washing",
    metaTitle: "Pressure Washing Services in Omaha, NE | Huskins Cleaning",
    metaDescription:
      "Exterior pressure washing in Omaha, NE. Driveways, sidewalks, patios, siding & fences restored to like-new. Boost your curb appeal — get a free pressure washing quote.",
    heading: "Pressure Washing Services in Omaha",
    tagline: "Blast away years of grime in an afternoon.",
    intro:
      "Green algae, mud, mildew and road grime build up on every exterior surface. Our pressure washing restores your Omaha property's curb appeal — driveways, walkways, patios, siding and fences come back looking years younger, without you touching a hose.",
    includes: [
      "Concrete driveways, sidewalks and patios",
      "Vinyl, wood and composite siding",
      "Fences, decks and railings",
      "Porches, steps and entryways",
      "Rust, algae, mildew and mud removal",
      "Careful, surface-appropriate pressure to avoid damage",
    ],
    bestFor: [
      "Boosting curb appeal before selling",
      "Annual spring and fall exterior refreshes",
      "Homeowners and commercial properties alike",
    ],
    icon: "spray",
    image: "/images/pressure-washing.webp",
    imageAlt: "Pressure washer blasting years of grime off a concrete driveway, leaving a clean stripe",
    keywords: [
      "pressure washing Omaha",
      "power washing Omaha NE",
      "driveway cleaning Omaha",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export type Testimonial = {
  quote: string;
  author: string;
  location: string;
  service: string;
};

/**
 * Real, lightly-formatted customer sentiment sourced from the business's public
 * reviews (BBB / directory listings). Names are shown as first name + initial
 * to match how they appear publicly.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "I use Huskins for cleaning my home and repairs — they're awesome! On time, affordable, and they do a great job every time.",
    author: "Tanya M.",
    location: "Omaha, NE",
    service: "Recurring House Cleaning",
  },
  {
    quote:
      "Hired Huskins to deep clean my house and I couldn't be happier. Now my home sparkles! I highly recommend them.",
    author: "Denise R.",
    location: "Bellevue, NE",
    service: "Deep Cleaning",
  },
  {
    quote:
      "These days it's hard to find affordable and honest people, but the Huskins team really restored my faith. Prompt, courteous and thorough.",
    author: "Gary L.",
    location: "Papillion, NE",
    service: "Move-Out Cleaning",
  },
  {
    quote:
      "Quick to respond, very professional and incredibly thorough. Our office has never looked better and the crew is always reliable.",
    author: "Monica T.",
    location: "Omaha, NE",
    service: "Office Cleaning",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "How much does house cleaning cost in Omaha?",
    answer:
      "Every home is different, so we give you an honest, no-obligation quote based on the size of your home, its condition, and how often you'd like us to clean. Recurring plans (weekly or bi-weekly) cost less per visit than one-time cleans. Call (402) 249-0449 or request a free quote online and we'll get you a clear price fast.",
  },
  {
    question: "Are you insured, and can I trust who's in my home?",
    answer:
      "Yes. Huskins Services LLC is a fully insured, BBB-accredited business with an A+ rating, accredited since 2020. We're a local, family-owned team — you'll see the same trusted, background-checked crew, not a rotating cast of strangers.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer:
      "Not at all. Many of our clients give us access instructions and go about their day. We're open 7 days a week from 7:00 AM to 9:00 PM, so we can work around your schedule — whether you're home or not.",
  },
  {
    question: "What areas around Omaha do you serve?",
    answer:
      "We serve the entire Omaha metro, including Bellevue, Papillion, La Vista, Elkhorn, Bennington, Gretna, Ralston and Council Bluffs, Iowa. Not sure if you're in range? Just ask — we're happy to check.",
  },
  {
    question: "Do you bring your own cleaning supplies and equipment?",
    answer:
      "Yes, we arrive fully equipped with professional-grade supplies and equipment. If you prefer specific or eco-friendly products for your home, just let us know and we'll happily accommodate.",
  },
  {
    question: "What if I'm not happy with the cleaning?",
    answer:
      "Your satisfaction is guaranteed. If something isn't right, let us know within 24 hours and we'll come back to make it right — no hassle. Getting it done right is the whole point.",
  },
];

/** Trust signals shown in the trust bar / why-us sections. */
export const trustPoints = [
  { stat: "A+", label: "BBB Accredited Rating" },
  { stat: "7 Days", label: "A Week, 7AM–9PM" },
  { stat: "100%", label: "Satisfaction Guaranteed" },
  { stat: "Local", label: "Family-Owned in Omaha" },
];
