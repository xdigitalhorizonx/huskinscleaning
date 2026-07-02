/**
 * schema.org JSON-LD builders for Forward Observations Group.
 * Emits an Organization + WebSite graph site-wide, plus per-page helpers
 * for breadcrumbs and articles (dispatches).
 */
import { site } from "../data/site";

const ORG_ID = `${site.url}/#organization`;

/** Core Organization entity, referenced by other nodes. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.brand,
    alternateName: site.short,
    description: site.description,
    url: site.url,
    email: site.email,
    slogan: site.tagline,
    logo: `${site.url}/icon-512.png`,
    image: `${site.url}/og-image.png`,
    sameAs: [
      site.social.youtube,
      site.social.instagram,
      site.social.spotify,
      site.social.x,
      site.social.tiktok,
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

/** Article schema for a dispatch. */
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
export function faqSchema(items: { question: string; answer: string }[]) {
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
