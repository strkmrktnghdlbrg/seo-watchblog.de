// Echte Fotos fuer Artikel-Cards und -Detailseiten (WP→Astro Relaunch).
// key = article-slug (entry.id). Tool-Logos bleiben bewusst Gradient-Tiles
// (markenrechtlich sicher), hier werden NUR thematische Stock-Fotos gesetzt.
//
// Quellen:
//  - Unsplash (lizenzfrei, https://unsplash.com/license), Format ?w=800&q=80 - stichprobenartig HTTP-200 verifiziert.
//  - picsum.photos als garantiert-ladbarer Fallback (echte Fotos, deterministisch per seed).
//
// Lookup-Reihenfolge im ArticleCard/Detail:
//  1. image-Frontmatter (falls gesetzt)
//  2. photos[slug]
//  3. Gradient-Tile

export interface Photo {
  url: string;
  credit?: string;
}

const U = (id: string) => `https://images.unsplash.com/${id}?w=800&q=80`;
const P = (slug: string) => `https://picsum.photos/seed/${slug}/800/450`;

export const photos: Record<string, Photo> = {
  // ── Watchblog / Trend-Artikel (6) ──
  'google-updates-2024': {
    url: U('photo-1573164713988-8665fc963095'),
    credit: 'Foto: Unsplash',
  },
  'zukunft-von-seo-2025': {
    url: U('photo-1485827404703-89b55fcc595e'),
    credit: 'Foto: Unsplash',
  },
  'trends-zur-barrierefreiheit-im-jahr-2024': {
    url: U('photo-1551434678-e076c223a692'),
    credit: 'Foto: Unsplash',
  },
  'nutzen-sie-google-trends-zur-verbesserung-ihrer-seo': {
    url: U('photo-1551288049-bebda4e38f71'),
    credit: 'Foto: Unsplash',
  },
  'linkbuilding-strategien-2024': {
    url: U('photo-1611162617474-5b21e879e113'),
    credit: 'Foto: Unsplash',
  },
  'tools-fuer-keyword-recherche-2024': {
    url: U('photo-1432888622747-4eb9a8efeb07'),
    credit: 'Foto: Unsplash',
  },

  // ── Wissen-Cluster-Header (Lead-Artikel je Cluster) ──
  // grundlagen
  'seo-fuer-anfaenger': {
    url: U('photo-1499750310107-5fef28a66643'),
    credit: 'Foto: Unsplash',
  },
  'wie-funktioniert-google-suche': {
    url: U('photo-1517245386807-bb43f82c33c4'),
    credit: 'Foto: Unsplash',
  },
  // onpage
  'was-ist-on-page-seo': {
    url: U('photo-1467232004584-a241de8bcf5d'),
    credit: 'Foto: Unsplash',
  },
  'meta-tags-seo': {
    url: U('photo-1488590528505-98d2b5aba04b'),
    credit: 'Foto: Unsplash',
  },
  // offpage-linkbuilding
  'backlinks-verstehen': {
    url: U('photo-1545987796-200677ee1011'),
    credit: 'Foto: Unsplash',
  },
  // technisches-seo
  'core-web-vitals-seo': {
    url: U('photo-1460925895917-afdab827c52f'),
    credit: 'Foto: Unsplash',
  },
  'ladegeschwindigkeit-seo': {
    url: U('photo-1504384308090-c894fdcc538d'),
    credit: 'Foto: Unsplash',
  },
  'technische-seo-checkliste': {
    url: U('photo-1454165804606-c3d57bc86b40'),
    credit: 'Foto: Unsplash',
  },
  // lokales-seo
  'lokales-seo-kleine-unternehmen': {
    url: U('photo-1556761175-5973dc0f32e7'),
    credit: 'Foto: Unsplash',
  },
  'lokale-suchmaschinenoptimierung-aerzte': {
    url: U('photo-1551076805-e1869033e561'),
    credit: 'Foto: Unsplash',
  },
  'lokales-seo-restaurants': {
    url: U('photo-1517248135467-4c7edcad34c4'),
    credit: 'Foto: Unsplash',
  },
  // ecommerce-seo
  'e-commerce-seo-produktseiten': {
    url: U('photo-1556742049-0cfed4f6a45d'),
    credit: 'Foto: Unsplash',
  },
  // content-keywords
  'content-marketing-seo': {
    url: U('photo-1542744173-8e7e53415bb0'),
    credit: 'Foto: Unsplash',
  },
  'content-ideen-seo': {
    url: U('photo-1455390582262-044cdead277a'),
    credit: 'Foto: Unsplash',
  },

  // ── Weitere wichtige Ratgeber/Wissen ──
  'seo-audit-anleitung': {
    url: U('photo-1551288049-bebda4e38f71'),
    credit: 'Foto: Unsplash',
  },
  'seo-erfolg-messen': {
    url: U('photo-1543286386-713bdd548da4'),
    credit: 'Foto: Unsplash',
  },
  'google-analytics-seo': {
    url: U('photo-1551288049-bebda4e38f71'),
    credit: 'Foto: Unsplash',
  },
  'mobile-seo-optimierung': {
    url: U('photo-1512941937669-90a1b58e7e9c'),
    credit: 'Foto: Unsplash',
  },
  'kostenlose-seo-tools': {
    url: U('photo-1517245386807-bb43f82c33c4'),
    credit: 'Foto: Unsplash',
  },
  'wettbewerbsanalyse-seo': {
    url: U('photo-1559526324-4b87b5e36e44'),
    credit: 'Foto: Unsplash',
  },
  'structured-data-rich-snippets': {
    url: U('photo-1518770660439-4636190af475'),
    credit: 'Foto: Unsplash',
  },
  'bilder-seo-optimieren': {
    url: U('photo-1452587925148-ce544e77e70d'),
    credit: 'Foto: Unsplash',
  },

  // ── Fallback-Beispiele (picsum, garantiert ladbar) ──
  'haeufige-seo-fehler': { url: P('haeufige-seo-fehler') },
  'white-hat-vs-black-hat-seo': { url: P('white-hat-vs-black-hat-seo') },
};

export function getPhoto(slug: string): Photo | undefined {
  return photos[slug];
}
