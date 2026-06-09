---
title: "Structured Data und Rich Snippets"
section: "seo-wissen"
cluster: "technisches-seo"
excerpt: "Mit strukturierten Daten erhält Google Kontext und zeigt Rich Snippets. So setzt du Schema.org richtig ein."
date: "2026-02-06"
readingTime: "6 Min."
gradient: "g2"
relatedTools: ["semrush"]
---

Strukturierte Daten sind einer der wenigen technischen SEO-Hebel, bei denen der Aufwand direkt sichtbar wird: nämlich im Suchergebnis selbst. Wer Schema.org-Markup korrekt einsetzt, gibt Google den nötigen Kontext, um Inhalte als Rich Snippet darzustellen - mit Sternebewertungen, Preisen, Rezeptzeiten oder Event-Details direkt in der SERP.

## Was Structured Data konkret bewirkt

Suchmaschinen lesen Texte, verstehen aber nicht automatisch, ob eine Zahl ein Preis, eine Bewertung oder eine Telefonnummer ist. Schema.org-Markup liefert diesen Kontext maschinenlesbar. Das bevorzugte Format ist heute JSON-LD: ein separater Script-Block im `<head>`, der den sichtbaren Seiteninhalt nicht verändert und sich leicht per CMS oder Template steuern lässt. Microdata und RDFa sind technisch weiterhin gültig, aber deutlich umständlicher zu pflegen.

Rich Snippets sind keine Ranking-Garantie - Google entscheidet selbst, ob und wann ein erweitertes Suchergebnis angezeigt wird. In der Praxis steigen Click-through-Rates messbar, weil angereicherte Ergebnisse mehr Fläche belegen und Nutzern sofort relevante Details zeigen.

## Die wichtigsten Schema-Typen für Content-Sites

Nicht jeder Typ ist für jede Website relevant. Die häufigsten mit direktem Rich-Snippet-Potenzial:

- **Article / BlogPosting** - Datum, Autor, Bild: Standard für redaktionelle Seiten
- **Product** - Preis, Verfügbarkeit, AggregateRating: unverzichtbar für Affiliate-Vergleiche
- **FAQPage** - Fragen und Antworten klappbar direkt in der SERP
- **BreadcrumbList** - saubere URL-Struktur im Suchergebnis
- **HowTo** - Schritt-für-Schritt-Anleitungen mit optionalen Bildern

Für SEO-Affiliate-Seiten ist die Kombination aus `Product`-Markup mit echten Nutzerbewertungen und `FAQPage` auf Vergleichsseiten besonders wirksam.

## Implementierung und Qualitätskontrolle

Der schnellste Einstieg: JSON-LD-Block manuell erstellen, per [Rich Results Test](https://search.google.com/test/rich-results) validieren, dann in der Google Search Console unter "Erweiterungen" die Abdeckung überwachen. Fehler wie fehlende Pflichtfelder (`name`, `image`, `ratingValue`) oder veraltete Typen führen dazu, dass Google das Markup ignoriert.

Wichtig: Markup muss den tatsächlichen Seiteninhalt widerspiegeln. Bewertungen im Markup, die auf der Seite nicht sichtbar sind, verstoßen gegen die Google-Richtlinien und können zu manuellen Maßnahmen führen.

Wer mehrere Seiten systematisch auf Markup-Lücken prüfen will, findet in [Semrush](/tools/review/semrush/) einen Site-Audit, der fehlende oder fehlerhafte strukturierte Daten seitengenau auflistet.
