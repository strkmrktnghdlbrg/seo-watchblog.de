---
title: "Technische-SEO-Checkliste"
section: "ratgeber"
excerpt: "Eine kompakte Checkliste für die technische Basis deiner Website, vom Crawling bis zur Indexierung."
date: "2025-09-29"
readingTime: "8 Min."
gradient: "g1"
relatedTools: ["semrush"]
---

Technische SEO ist das Fundament jeder organischen Sichtbarkeit. Ohne eine saubere technische Basis können selbst die besten Inhalte nicht ranken - weil Google sie schlicht nicht richtig erfassen oder bewerten kann. Diese Checkliste gibt dir einen strukturierten Überblick über die wichtigsten Stellschrauben.

## Crawling und Indexierung

Der erste Schritt ist sicherzustellen, dass Google deine Seiten überhaupt crawlen und indexieren kann. Prüfe regelmäßig die Google Search Console auf Crawling-Fehler, 404-Seiten und Indexierungsausschlüsse. Eine korrekte `robots.txt` verhindert, dass unwichtige Bereiche wie Admin-Pfade oder Suchergebnisseiten gecrawlt werden. Dazu gehört auch eine aktuelle XML-Sitemap, die du in der Search Console einreichst.

Canonical-Tags sind Pflicht, sobald inhaltlich ähnliche URLs existieren - etwa durch URL-Parameter, Paginierung oder Sprachvarianten. Fehlende oder falsche Canonicals erzeugen Duplicate-Content-Probleme, die dein Ranking-Potenzial auf mehrere URLs verteilen statt bündeln.

## Performance und Core Web Vitals

Seit den Google-Updates der letzten Jahre fließen die Core Web Vitals (LCP, INP, CLS) direkt ins Ranking ein. Ein guter LCP-Wert liegt unter 2,5 Sekunden. Typische Ursachen für schlechte Werte: zu große Bilder ohne modernes Format (WebP/AVIF), kein Lazy Loading, fehlende Browser-Caching-Headers oder kein CDN.

Wichtige Punkte auf dieser Ebene:

- Bilder komprimieren und in modernen Formaten ausliefern
- CSS und JavaScript minimieren und nicht-kritisches JS deferred laden
- Server-Antwortzeiten (TTFB) unter 200 ms halten
- Layout Shifts durch feste Bildabmessungen im HTML vermeiden

## Sicherheit, Struktur und Mobile

HTTPS ist seit Jahren kein Bonus mehr, sondern Grundvoraussetzung. Fehlende oder falsch konfigurierte SSL-Zertifikate schaden sowohl dem Ranking als auch dem Nutzervertrauen. Prüfe zusätzlich, ob alle HTTP-Varianten sauber auf HTTPS umleiten.

Mobile-First Indexing bedeutet: Google bewertet primär die mobile Version deiner Seite. Responsives Design, lesbare Schriftgrößen ohne Zoom-Zwang und kein horizontales Scrollen sind keine Kür, sondern Standard.

Für die interne Verlinkung gilt: Jede wichtige Seite sollte von mehreren anderen Seiten erreichbar sein und möglichst wenige Klicks von der Startseite entfernt liegen. Verwaiste Seiten ohne eingehende interne Links werden seltener gecrawlt und ranken schlechter.

Ein professionelles Audit-Tool wie [Semrush](/tools/review/semrush/) hilft dabei, technische Fehler systematisch aufzudecken und nach Priorität abzuarbeiten - besonders bei größeren Websites mit hunderten von URLs.
