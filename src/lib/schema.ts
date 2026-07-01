/**
 * schema.org JSON-LD builders.
 *
 * Structured data is how Google understands a local service business:
 * name, phone, hours, area served, services and ratings. Emitting a correct
 * LocalBusiness graph is one of the highest-leverage SEO fixes for a site like
 * this — it powers rich results, the local pack and knowledge panels.
 */
import { site, services, serviceAreas, faqs } from "../data/site";

const ORG_ID = `${site.url}/#organization`;

/** The core LocalBusiness / CleaningService entity, referenced by other nodes. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["CleaningService", "LocalBusiness"],
    "@id": ORG_ID,
    name: site.longName,
    legalName: site.legalName,
    alternateName: site.brand,
    description:
      "Family-owned, BBB-accredited residential and commercial cleaning company serving Omaha, NE. House cleaning, deep cleaning, move-in/out, office cleaning, post-construction cleanup and pressure washing.",
    url: site.url,
    telephone: site.phone.e164,
    email: site.email,
    priceRange: "$$",
    image: `${site.url}/og-image.png`,
    logo: `${site.url}/favicon.svg`,
    slogan: site.tagline,
    foundingDate: site.founded,
    address: {
      "@type": "PostalAddress",
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
    areaServed: serviceAreas.map((a) => ({
      "@type": "City",
      name: a.name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...site.hours.days],
        opens: site.hours.opens,
        closes: site.hours.closes,
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
      bestRating: "5",
      worstRating: "1",
    },
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        url: `${site.url}/services/${s.slug}/`,
      },
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services",
      itemListElement: services.map((s) => ({
        "@type": "OfferCatalog",
        name: s.title,
      })),
    },
  };
}

/** Per-service Service schema linked back to the org as provider. */
export function serviceSchema(slug: string) {
  const s = services.find((x) => x.slug === slug);
  if (!s) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: s.title,
    name: `${s.title} in Omaha, NE`,
    description: s.metaDescription,
    url: `${site.url}/services/${s.slug}/`,
    provider: { "@id": ORG_ID },
    areaServed: serviceAreas.map((a) => ({ "@type": "City", name: a.name })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${s.title} — what's included`,
      itemListElement: s.includes.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item },
      })),
    },
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
