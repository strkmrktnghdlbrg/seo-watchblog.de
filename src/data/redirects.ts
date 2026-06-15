// 301-Redirects WP→Astro. Regel: /<slug>/ -> /artikel/<slug>/
// Alle Artikel-Detailseiten liegen einheitlich unter /artikel/<slug>/.
// Gastartikel webverzeichnis-webkatalog bleibt URL-stabil auf Root-Ebene
// und ist hier bewusst NICHT enthalten. (hi-level-crm wurde nach Auslaufen
// des Gastpost-Deals entfernt -> /hi-level-crm/ liefert nun 404.)

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
