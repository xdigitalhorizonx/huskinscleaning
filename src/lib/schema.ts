/**
 * schema.org JSON-LD builders for Digital Horizon.
 * Emits a LocalBusiness (ProfessionalService) + WebSite graph site-wide, plus
 * per-page helpers for breadcrumbs, services, and blog articles.
 */
import { site, services, locations, faqs } from "../data/site";

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
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        url: `${site.url}/services/#${s.slug}`,
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
