---
title: "Bilder-SEO optimieren"
section: "seo-wissen"
cluster: "onpage"
excerpt: "Mit Dateinamen, Alt-Texten und moderner Komprimierung holst du mehr Sichtbarkeit und Tempo aus deinen Bildern."
date: "2025-11-28"
readingTime: "4 Min."
gradient: "g1"
relatedTools: ["semrush", "seobility"]
---

Bilder sind auf den meisten Websites ein unterschätzter SEO-Hebel. Suchmaschinen können Bildinhalte nicht direkt lesen - sie stützen sich auf Metadaten, Dateinamen und Kontext. Wer diese Stellschrauben sauber dreht, gewinnt Sichtbarkeit in der Google-Bildersuche und verbessert gleichzeitig Ladezeiten und Barrierefreiheit.

## Alt-Texte: beschreibend, nicht vollgestopft

Der Alt-Text ist das wichtigste Signal für Suchmaschinen und gleichzeitig die Fallback-Anzeige, wenn ein Bild nicht lädt. Gute Alt-Texte beschreiben konkret, was auf dem Bild zu sehen ist - inklusive des wichtigsten Keyword-Bezugs, ohne den Text mit Suchbegriffen zu überladen.

Praktische Regeln:
- Unter 125 Zeichen bleiben
- "Bild von..." als Einstieg vermeiden - es ist klar, dass es ein Bild ist
- Dekorative Bilder mit leerem Alt-Attribut (`alt=""`) markieren, damit Screenreader sie überspringen

Ein leerer Alt-Text ist kein Fehler bei rein dekorativen Elementen. Ein fehlender Alt-Text bei inhaltlich relevanten Bildern hingegen schon.

## Dateinamen und Format: Grundlagen, die viele überspringen

Bevor ein Bild überhaupt hochgeladen wird, lohnt sich der Blick auf den Dateinamen. `IMG_4823.jpg` gibt Suchmaschinen keinen Kontext - `maenner-wanderschuhe-gore-tex.jpg` schon. Bindestriche als Trennzeichen, keine Umlaute, keine Leerzeichen.

Beim Format gilt 2026 folgende Faustregel:
- **WebP** für Fotos und komplexe Grafiken - deutlich kleinere Dateigröße bei vergleichbarer Qualität
- **AVIF** wenn Rendering-Support im Projekt gesichert ist - noch bessere Komprimierung als WebP
- **SVG** für Logos und Icons - skaliert verlustfrei, oft winzige Dateigröße
- JPEG und PNG nur noch als Fallback für ältere Systeme

## Ladezeit und technische Einbindung

Schlecht komprimierte Bilder sind einer der häufigsten Gründe für schlechte Core Web Vitals. Konkret wichtig:

- Bilder vor dem Upload mit Tools wie Squoosh, TinyPNG oder direkt im Build-Prozess (z.B. `astro:assets`) komprimieren
- `width` und `height`-Attribute immer setzen, damit der Browser Layout-Shifts vermeidet
- Lazy Loading (`loading="lazy"`) für Bilder unterhalb des sichtbaren Bereichs aktivieren
- Hero-Bilder hingegen mit `loading="eager"` und `fetchpriority="high"` priorisieren, damit der LCP-Wert stimmt

Die Google Search Console zeigt unter "Core Web Vitals", ob Bilder auf deinen Seiten Performance-Probleme verursachen - ein guter Ausgangspunkt für gezielte Verbesserungen.
