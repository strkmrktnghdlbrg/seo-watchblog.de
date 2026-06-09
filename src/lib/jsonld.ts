// JSON-LD Helper für strukturierte Daten (schema.org)
// Alle Funktionen geben ein Objekt zurück, das in BaseLayout als <script type="application/ld+json"> gerendert wird.

const SITE = 'https://seo-watchblog.de';
const PUBLISHER = {
  '@type': 'Organization',
  name: 'SEO Watchblog',
  url: SITE,
};

export function abs(path: string): string {
  if (!path) return SITE;
  if (path.startsWith('http')) return path;
  return new URL(path, SITE).href;
}

export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SEO Watchblog',
    url: SITE,
    description:
      'Unabhängige Tests von SEO-Tools, Hosting und WordPress-Software - plus das Wissen, um sie richtig einzusetzen.',
  };
}

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SEO Watchblog',
    url: SITE,
    inLanguage: 'de-DE',
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE}/suche/?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function breadcrumbLd(items: { label: string; href?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.label,
      ...(it.href ? { item: abs(it.href) } : {}),
    })),
  };
}

export function faqLd(faqs: { q: string; a: string }[]) {
  if (!faqs?.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

// Tool-Review: Review mit aggregateRating auf einer SoftwareApplication
export function reviewLd(tool: {
  name: string;
  scoreOverall: number;
  category: string;
  price?: string;
  verdict: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'SoftwareApplication',
      name: tool.name,
      applicationCategory: 'SEO Software',
      offers: tool.price ? { '@type': 'Offer', price: tool.price, priceCurrency: 'EUR' } : undefined,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: tool.scoreOverall,
      bestRating: 5,
      worstRating: 1,
    },
    author: PUBLISHER,
    publisher: PUBLISHER,
    name: `${tool.name} Test & Erfahrungen`,
    reviewBody: tool.verdict,
    url: abs(tool.url),
  };
}

// Artikel: BlogPosting
export function articleLd(a: {
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: a.title,
    description: a.excerpt,
    datePublished: a.date,
    dateModified: a.date,
    ...(a.image ? { image: abs(a.image) } : {}),
    author: PUBLISHER,
    publisher: PUBLISHER,
    mainEntityOfPage: { '@type': 'WebPage', '@id': abs(a.url) },
    inLanguage: 'de-DE',
  };
}

// Vergleichs-Hub: ItemList der Tools
export function itemListLd(name: string, tools: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: tools.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      url: abs(t.url),
    })),
  };
}
