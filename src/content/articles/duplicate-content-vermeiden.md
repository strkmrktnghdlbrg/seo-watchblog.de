---
title: "Duplicate Content vermeiden"
section: "seo-wissen"
cluster: "technisches-seo"
excerpt: "Doppelte Inhalte verwirren Suchmaschinen. Mit Canonical-Tags und sauberer Struktur vermeidest du das Problem."
date: "2025-06-21"
readingTime: "8 Min."
gradient: "g3"
---

Doppelte Inhalte entstehen schneller als gedacht - und können dafür sorgen, dass Google falsche Seiten rankt oder Sichtbarkeit auf mehrere URLs aufteilt statt zu bündeln. Das Gute: Die häufigsten Ursachen lassen sich mit wenigen technischen Massnahmen beheben.

## Was ist Duplicate Content genau?

Duplicate Content bezeichnet Inhalte, die auf mehreren URLs identisch oder nahezu identisch erscheinen. Das betrifft nicht nur Textkopien zwischen verschiedenen Domains, sondern häufig auch technisch bedingte Duplikate innerhalb einer einzigen Website. Typische Ursachen:

- **URL-Parameter**: Tracking-Parameter wie `?ref=newsletter` oder Session-IDs erzeugen eigenständige URLs mit identischem Inhalt.
- **HTTP vs. HTTPS / www vs. non-www**: Ohne Weiterleitung oder Canonical-Tag indexiert Google unter Umständen vier verschiedene Varianten derselben Startseite.
- **Pagination und Filterseiten**: Shop-Kategorien mit Sortieroptionen produzieren oft dutzende Duplikate.
- **Syndizierter Content**: Wer Artikel auf mehreren Plattformen veröffentlicht, riskiert, dass die Kopie besser rankt als das Original.

## Die wichtigsten technischen Gegenmassnahmen

**Canonical-Tags** sind das Mittel der Wahl, wenn Duplikate aus technischen Gründen nicht vermeidbar sind. Das Tag `<link rel="canonical" href="https://example.com/hauptseite/">` signalisiert Google, welche URL als Original zu werten ist. Wichtig: Auch die kanonische Seite selbst muss das Tag auf sich selbst setzen - das verhindert versehentliche Ketten.

**301-Weiterleitungen** kommen zum Einsatz, wenn eine URL dauerhaft aufgegeben wird. Sie übertragen den Grossteil des Linkwerts auf die Ziel-URL und räumen das Duplikat aus dem Index.

**URL-Parameter in der Google Search Console** konfigurieren: Für reine Tracking-Parameter kann Google direkt angewiesen werden, sie zu ignorieren - ohne Canonical auf jeder einzelnen Seite.

## Inhaltlich sauber arbeiten

Neben der Technik zahlt sich redaktionelle Disziplin aus. Jede Seite sollte einen klar abgegrenzten Fokus haben, der sich nicht mit anderen Seiten derselben Domain überschneidet. Bei Produktbeschreibungen im E-Commerce lohnt es sich, Herstellertexte grundsätzlich zu ersetzen - da viele Shops identische Lieferantentexte verwenden, ist eigenständiger Content hier ein echter Rankingvorteil.

Regelmässige Audits mit einem Crawling-Tool decken Duplikate auf, bevor sie zum Problem werden. Tools wie Screaming Frog zeigen doppelte Title-Tags und Canonical-Fehler auf einen Blick; professionelle SEO-Suiten bieten darüber hinaus domain- und siteübergreifende Analyse.
