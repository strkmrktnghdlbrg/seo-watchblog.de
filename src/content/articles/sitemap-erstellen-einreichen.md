---
title: "Sitemap erstellen und einreichen"
section: "ratgeber"
excerpt: "Schritt für Schritt: XML-Sitemap erstellen und in der Google Search Console einreichen."
date: "2025-07-11"
readingTime: "5 Min."
gradient: "g5"
---

Eine XML-Sitemap ist eine strukturierte Liste aller URLs deiner Website und signalisiert Suchmaschinen, welche Seiten es gibt, wie oft sie sich ändern und welche besonders wichtig sind. Wer eine Sitemap korrekt erstellt und einreicht, gibt Google und Bing einen direkten Fahrplan - besonders bei neuen Seiten oder umfangreichen Websites mit vielen Unterseiten.

## Wie du eine XML-Sitemap erstellst

Für WordPress-Seiten übernehmen Plugins wie Yoast SEO oder Rank Math die Sitemap-Erstellung vollautomatisch. Die fertige Datei ist dann meistens unter `deinedomain.de/sitemap.xml` oder `deinedomain.de/sitemap_index.xml` erreichbar.

Bei statischen Websites oder eigenen Setups lohnt sich ein Generator wie **XML-sitemaps.com** oder **Screaming Frog**. Screaming Frog crawlt deine gesamte Website und exportiert eine saubere XML-Sitemap - inklusive `<lastmod>`, `<changefreq>` und `<priority>` Feldern. Wichtig dabei: Nur Seiten mit Indexierungsstatus aufnehmen, keine 404-Seiten, Weiterleitungen oder noindex-URLs.

Vor der Einreichung die Sitemap kurz mit dem [Rich Results Test](https://search.google.com/test/rich-results) oder dem URL-Inspektor in der Search Console validieren - so fallen fehlerhafte URLs oder falsch kodierte Zeichen rechtzeitig auf.

## Sitemap in der Google Search Console einreichen

1. In der [Google Search Console](https://search.google.com/search-console/) anmelden und die passende Property öffnen.
2. Im linken Menü auf "Sitemaps" klicken.
3. Die Sitemap-URL eingeben (z.B. `sitemap.xml` oder `sitemap_index.xml`) und auf "Senden" klicken.
4. Nach wenigen Minuten zeigt die Console den Status "Erfolgreich" sowie die Anzahl erkannter und indexierter URLs.

Für Bing funktioniert das gleiche Prinzip über die Bing Webmaster Tools. Wer den robots.txt-Trick nutzt, trägt die Sitemap-URL dort ebenfalls ein: `Sitemap: https://deinedomain.de/sitemap.xml` - das beschleunigt das Crawling zusätzlich.

## Häufige Fehler und wie du sie vermeidest

Der häufigste Fehler ist die Aufnahme von noindex-Seiten in die Sitemap. Seiten, die du aus dem Index ausschließt, gehören nicht in die Sitemap - das sendet widersprüchliche Signale an Google. Ebenso kritisch: URLs in der Sitemap, die einen 301-Redirect aufweisen. Immer auf die kanonische End-URL verweisen.

Prioritätswerte (`<priority>`) und `<changefreq>` werden von Google offiziell als Hinweise behandelt, nicht als verbindliche Angaben. Zu hohe Prioritätswerte für alle Seiten haben keinen Effekt - besser sparsam und realistisch einsetzen.

Nach einem Relaunch oder größeren Strukturänderungen sollte die Sitemap sofort aktualisiert und neu eingereicht werden, damit Google die neuen URLs schnell entdeckt.
