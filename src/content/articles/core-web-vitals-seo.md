---
title: "Core Web Vitals und SEO"
section: "seo-wissen"
cluster: "technisches-seo"
excerpt: "LCP, INP und CLS sind Googles Messgrößen für Nutzererlebnis. Was sie bedeuten und wie du sie verbesserst."
date: "2025-06-11"
readingTime: "7 Min."
gradient: "g2"
relatedTools: ["semrush"]
---

Core Web Vitals sind seit 2021 offiziell ein Google-Rankingfaktor. Sie messen drei Dimensionen der Nutzererfahrung und fließen direkt in die Bewertung einer Seite ein. Wer technisches SEO ernst nimmt, kommt an diesen drei Metriken nicht vorbei.

## Die drei Metriken im Überblick

**Largest Contentful Paint (LCP)** misst, wie schnell das größte sichtbare Element einer Seite gerendert wird - typischerweise ein Hero-Bild oder eine große Überschrift. Google bewertet Werte unter 2,5 Sekunden als gut. Häufige Ursachen für schlechten LCP sind unoptimierte Bilder, langsame Serverantwortzeiten und blockierendes JavaScript.

**Interaction to Next Paint (INP)** hat 2024 den alten FID-Wert abgelöst und misst die Reaktionszeit auf alle Nutzerinteraktionen - nicht nur die erste. Zielwert: unter 200 Millisekunden. JavaScript-lastiger Code und lange Aufgaben im Hauptthread sind die häufigsten Ursachen für schlechten INP.

**Cumulative Layout Shift (CLS)** bewertet die visuelle Stabilität. Springen Elemente während des Ladens unkontrolliert, steigt der CLS-Wert. Gut ist alles unter 0,1. Bilder ohne definierte Maße, nachträglich eingebundene Schriften und dynamisch geladene Inhalte sind typische Auslöser.

## Wo du deine Werte messen kannst

Google stellt mit **PageSpeed Insights** und **Lighthouse** zwei kostenlose Tools bereit, die konkrete Verbesserungsvorschläge liefern. Wichtig: PageSpeed Insights zeigt neben Labordaten auch echte Nutzerdaten aus dem Chrome User Experience Report (CrUX) an. Diese Felddaten sind für das Ranking maßgeblich, nicht nur die Laborwerte.

Die **Google Search Console** fasst Core-Web-Vitals-Daten unter "Nutzererfahrung" zusammen und zeigt, welche URL-Gruppen problematische Werte aufweisen. Das ist der schnellste Einstieg, um Priorisierungen zu setzen.

## Konkrete Maßnahmen zur Verbesserung

Für besseren LCP helfen moderne Bildformate wie WebP oder AVIF, `loading="eager"` und `fetchpriority="high"` für das Hero-Bild sowie ein CDN für kürzere Serverantwortzeiten.

INP verbessert sich vor allem durch Code-Splitting, das Vermeiden langer JavaScript-Aufgaben und den gezielten Einsatz von `defer` bzw. `async` beim Skript-Laden.

CLS lässt sich oft schnell beheben: Dimensionen für alle Bilder und Iframes explizit setzen, Schriften mit `font-display: swap` einbinden und keine Inhalte nachträglich über bestehende Elemente schieben.

Core Web Vitals sind kein einmaliges Projekt - regelmäßige Checks nach Deployments und Design-Änderungen gehören zur guten SEO-Praxis. Mit [Semrush](/tools/review/semrush/) lassen sich technische Audits und Rankings parallel im Blick behalten, was die Nachverfolgung von Optimierungsmaßnahmen deutlich vereinfacht.
