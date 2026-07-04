/**
 * schema.org JSON-LD builders for Digital Horizon.
 * Emits a LocalBusiness (ProfessionalService) + WebSite graph site-wide, plus
 * per-page helpers for breadcrumbs, services, and blog articles.
 */
import { site, services, locations, faqs, testimonials } from "../data/site";

const ORG_ID = `${site.url}/#organization`;

/** Core LocalBusiness entity, referenced by other nodes. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": ORG_ID,
    name: site.brand,
    description: site.description,
    url: site.url,
    email: site.email,
    telephone: site.phone.e164,
    slogan: site.tagline,
    priceRange: "$$",
    logo: `${site.url}/icon-512.png`,
    image: `${site.url}/og-image.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: locations.map((l) => ({ "@type": "City", name: l.name })),
    hasMap: site.maps,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...site.hours.days],
        opens: site.hours.opens,
        closes: site.hours.closes,
      },
    ],
    // Founder Person node — emitted only when a real name is set (E-E-A-T).
    ...(site.founder.name
      ? { founder: { "@type": "Person", name: site.founder.name, jobTitle: site.founder.jobTitle } }
      : {}),
    // Ratings/reviews reflect ONLY the real testimonials shown on the site.
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: testimonials.length,
      bestRating: "5",
      worstRating: "1",
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.author },
      reviewBody: t.quote,
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
    })),
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        url: `${site.url}/services/${s.slug}/`,
      },
    })),
    sameAs: [
      site.social.x,
      site.social.facebook,
      site.social.instagram,
      site.social.nextdoor,
    ],
  };
}

/** Per-service Service node — emit on /services/[slug]. */
export function serviceSchema(slug: string) {
  const s = services.find((x) => x.slug === slug);
  if (!s) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${s.name} for Northern Nevada Businesses`,
    serviceType: s.name,
    description: s.desc,
    url: `${site.url}/services/${s.slug}/`,
    provider: { "@id": ORG_ID },
    areaServed: locations.map((l) => ({ "@type": "City", name: l.name })),
    audience: {
      "@type": "Audience",
      audienceType: "Northern Nevada service and trade businesses",
    },
  };
}

/** WebSite schema (helps with site name in search). */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.brand,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
  };
}

/** BreadcrumbList from an ordered list of {name, url} crumbs. */
export function breadcrumbSchema(crumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url.startsWith("http") ? c.url : `${site.url}${c.url}`,
    })),
  };
}

/** Article schema for a blog post. */
export function articleSchema(a: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    url: a.url.startsWith("http") ? a.url : `${site.url}${a.url}`,
    datePublished: a.datePublished,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}

/** FAQPage schema — powers the FAQ rich result. */
export function faqSchema(items = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
