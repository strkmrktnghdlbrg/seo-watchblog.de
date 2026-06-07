// 301-Redirects WP→Astro. Regel: /<slug>/ -> /artikel/<slug>/
// Alle Artikel-Detailseiten liegen einheitlich unter /artikel/<slug>/.
// Die 2 Gastartikel (hi-level-crm, webverzeichnis-webkatalog) bleiben
// URL-stabil auf Root-Ebene und sind hier bewusst NICHT enthalten.

import { clusterMap } from './cluster-map';

export interface Redirect {
  from: string;
  to: string;
  status: number;
}

export const redirects: Redirect[] = clusterMap.map((e) => ({
  from: `/${e.slug}/`,
  to: `/artikel/${e.slug}/`,
  status: 301,
}));
