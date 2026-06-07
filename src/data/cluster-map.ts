// Artikel→Sektion/Cluster-Mapping (WP→Astro Relaunch).
// 'hi-level-crm' und 'webverzeichnis-webkatalog' = bezahlte Gastartikel,
// bleiben URL-stabil auf Root-Ebene und sind hier NICHT enthalten.

export interface ClusterEntry {
  slug: string;
  section: 'seo-wissen' | 'watchblog' | 'ratgeber';
  cluster?: string;
  title: string;
}

export const clusterMap: ClusterEntry[] = [
  { slug: 'nutzen-sie-google-trends-zur-verbesserung-ihrer-seo', section: 'ratgeber', cluster: undefined, title: 'Google Trends fuer bessere SEO nutzen' },
  { slug: 'trends-zur-barrierefreiheit-im-jahr-2024', section: 'watchblog', cluster: undefined, title: 'Trends zur Barrierefreiheit 2024' },
  { slug: 'seo-fuer-anfaenger', section: 'seo-wissen', cluster: 'grundlagen', title: 'SEO fuer Anfaenger' },
  { slug: 'tools-fuer-keyword-recherche-2024', section: 'seo-wissen', cluster: 'content-keywords', title: 'Tools fuer die Keyword-Recherche 2024' },
  { slug: 'backlinks-verstehen', section: 'seo-wissen', cluster: 'offpage-linkbuilding', title: 'Backlinks verstehen' },
  { slug: 'was-ist-on-page-seo', section: 'seo-wissen', cluster: 'onpage', title: 'Was ist OnPage-SEO?' },
  { slug: 'wie-funktioniert-google-suche', section: 'seo-wissen', cluster: 'grundlagen', title: 'Wie funktioniert die Google-Suche?' },
  { slug: 'e-commerce-seo-produktseiten', section: 'seo-wissen', cluster: 'ecommerce-seo', title: 'E-Commerce-SEO fuer Produktseiten' },
  { slug: 'lokales-seo-kleine-unternehmen', section: 'seo-wissen', cluster: 'lokales-seo', title: 'Lokales SEO fuer kleine Unternehmen' },
  { slug: 'content-ideen-seo', section: 'seo-wissen', cluster: 'content-keywords', title: 'Content-Ideen fuer SEO' },
  { slug: 'google-updates-2024', section: 'watchblog', cluster: undefined, title: 'Google-Updates 2024' },
  { slug: 'ladegeschwindigkeit-seo', section: 'seo-wissen', cluster: 'technisches-seo', title: 'Ladegeschwindigkeit und SEO' },
  { slug: 'meta-tags-seo', section: 'seo-wissen', cluster: 'onpage', title: 'Meta-Tags fuer SEO' },
  { slug: 'core-web-vitals-seo', section: 'seo-wissen', cluster: 'technisches-seo', title: 'Core Web Vitals und SEO' },
  { slug: 'duplicate-content-vermeiden', section: 'seo-wissen', cluster: 'technisches-seo', title: 'Duplicate Content vermeiden' },
  { slug: 'seo-tools-fuer-einsteiger', section: 'seo-wissen', cluster: 'content-keywords', title: 'SEO-Tools fuer Einsteiger' },
  { slug: 'sitemap-erstellen-einreichen', section: 'ratgeber', cluster: undefined, title: 'Sitemap erstellen und einreichen' },
  { slug: 'mobile-seo-optimierung', section: 'seo-wissen', cluster: 'technisches-seo', title: 'Mobile-SEO-Optimierung' },
  { slug: 'ssl-zertifikate-seo', section: 'seo-wissen', cluster: 'technisches-seo', title: 'SSL-Zertifikate und SEO' },
  { slug: 'keyword-analyse-tipps', section: 'seo-wissen', cluster: 'content-keywords', title: 'Keyword-Analyse: Tipps' },
  { slug: 'lokales-linkbuilding', section: 'seo-wissen', cluster: 'offpage-linkbuilding', title: 'Lokales Linkbuilding' },
  { slug: 'featured-snippets-erreichen', section: 'seo-wissen', cluster: 'onpage', title: 'Featured Snippets erreichen' },
  { slug: 'seo-fuer-blogs', section: 'seo-wissen', cluster: 'grundlagen', title: 'SEO fuer Blogs' },
  { slug: 'content-marketing-seo', section: 'seo-wissen', cluster: 'content-keywords', title: 'Content-Marketing und SEO' },
  { slug: 'technische-seo-checkliste', section: 'ratgeber', cluster: undefined, title: 'Technische-SEO-Checkliste' },
  { slug: 'google-analytics-seo', section: 'ratgeber', cluster: undefined, title: 'Google Analytics fuer SEO' },
  { slug: 'social-media-off-page-seo', section: 'seo-wissen', cluster: 'offpage-linkbuilding', title: 'Social Media und OffPage-SEO' },
  { slug: 'seo-erfolg-messen', section: 'ratgeber', cluster: undefined, title: 'SEO-Erfolg messen' },
  { slug: 'linkbuilding-strategien-2024', section: 'seo-wissen', cluster: 'offpage-linkbuilding', title: 'Linkbuilding-Strategien 2024' },
  { slug: 'seo-fuer-youtube', section: 'seo-wissen', cluster: 'content-keywords', title: 'SEO fuer YouTube' },
  { slug: 'bilder-seo-optimieren', section: 'seo-wissen', cluster: 'onpage', title: 'Bilder-SEO optimieren' },
  { slug: 'white-hat-vs-black-hat-seo', section: 'seo-wissen', cluster: 'grundlagen', title: 'White-Hat vs. Black-Hat-SEO' },
  { slug: 'seo-audit-anleitung', section: 'ratgeber', cluster: undefined, title: 'SEO-Audit: Anleitung' },
  { slug: 'interne-links-seo', section: 'seo-wissen', cluster: 'onpage', title: 'Interne Links und SEO' },
  { slug: 'haeufige-seo-fehler', section: 'seo-wissen', cluster: 'grundlagen', title: 'Haeufige SEO-Fehler' },
  { slug: 'lokale-suchmaschinenoptimierung-aerzte', section: 'seo-wissen', cluster: 'lokales-seo', title: 'Lokale Suchmaschinenoptimierung fuer Aerzte' },
  { slug: 'seo-wordpress-plugins', section: 'seo-wissen', cluster: 'technisches-seo', title: 'SEO-WordPress-Plugins' },
  { slug: 'structured-data-rich-snippets', section: 'seo-wissen', cluster: 'technisches-seo', title: 'Structured Data und Rich Snippets' },
  { slug: 'wettbewerbsanalyse-seo', section: 'seo-wissen', cluster: 'content-keywords', title: 'Wettbewerbsanalyse fuer SEO' },
  { slug: 'kostenlose-seo-tools', section: 'seo-wissen', cluster: 'content-keywords', title: 'Kostenlose SEO-Tools' },
  { slug: 'bewertungen-lokales-seo', section: 'seo-wissen', cluster: 'lokales-seo', title: 'Bewertungen im lokalen SEO' },
  { slug: 'internationales-seo', section: 'seo-wissen', cluster: 'technisches-seo', title: 'Internationales SEO' },
  { slug: 'lokales-seo-restaurants', section: 'seo-wissen', cluster: 'lokales-seo', title: 'Lokales SEO fuer Restaurants' },
  { slug: 'redirects-richtig-einsetzen', section: 'ratgeber', cluster: undefined, title: 'Redirects richtig einsetzen' },
  { slug: 'content-hubs-aufbauen', section: 'ratgeber', cluster: undefined, title: 'Content-Hubs aufbauen' },
  { slug: 'w-fragen-seo', section: 'seo-wissen', cluster: 'content-keywords', title: 'W-Fragen fuer SEO' },
  { slug: 'zukunft-von-seo-2025', section: 'watchblog', cluster: undefined, title: 'Die Zukunft von SEO 2025' },
  { slug: 'negative-seo-erkennen', section: 'seo-wissen', cluster: 'offpage-linkbuilding', title: 'Negative SEO erkennen' },
  { slug: 'domainautoritaet-seo', section: 'seo-wissen', cluster: 'offpage-linkbuilding', title: 'Domain-Autoritaet und SEO' },
];
