---
title: "Redirects richtig einsetzen"
section: "ratgeber"
excerpt: "301 oder 302? Wann welche Weiterleitung sinnvoll ist und wie du Linkkraft erhältst."
date: "2026-04-07"
readingTime: "7 Min."
gradient: "g2"
---

Redirects gehören zu den häufigsten technischen SEO-Maßnahmen - und zu den am häufigsten falsch eingesetzten. Wer 301 und 302 verwechselt oder Redirect-Ketten entstehen lässt, riskiert unnötige Linkkraft-Verluste und langsamere Ladezeiten.

## 301 vs. 302: Der Unterschied zählt

Ein **301-Redirect** signalisiert eine dauerhafte Weiterleitung. Google überträgt den größten Teil des Linkwerts (PageRank) von der alten auf die neue URL. Dieser Redirect-Typ ist die richtige Wahl bei Domain-Umzügen, URL-Strukturänderungen oder dem Zusammenführen von Seiten.

Ein **302-Redirect** steht für eine vorübergehende Weiterleitung. Google behält die ursprüngliche URL im Index und überträgt keinen Linkwert. Wer irrtümlich 302 statt 301 setzt, verliert damit dauerhaft Ranking-Potenzial. Der 302 ist sinnvoll bei A/B-Tests oder saisonal gesperrten Seiten, die später wieder aktiv werden.

Meta-Refresh-Redirects im HTML-Code sind für SEO weitgehend ungeeignet und sollten nur im Ausnahmefall eingesetzt werden.

## Redirect-Ketten vermeiden

Eine Redirect-Kette entsteht, wenn URL A auf URL B zeigt, URL B aber wiederum auf URL C weiterleitet. Jeder zusätzliche Hop kostet Crawl-Budget, verlängert die Ladezeit und mindert den übertragenen Linkwert. Die Faustregel lautet: maximal eine Weiterleitung pro Pfad. Bei Domain-Migrationen oder CMS-Wechseln lohnt sich eine vollständige Redirect-Map, die alte URLs direkt auf ihre endgültigen Ziele leitet.

Serverseitige Redirects (über `.htaccess` bei Apache oder `nginx.conf` bei Nginx) sind clientseitigen Lösungen immer vorzuziehen, weil sie ohne Seitenrenderer greifen und deutlich schneller ausgeführt werden.

## Häufige Fehler und wie du sie vermeidest

Die gefährlichsten Fehler beim Einsatz von Redirects sind Weiterleitungsschleifen (URL A verweist auf URL B, B zurück auf A), fehlerhafte Ziel-URLs mit 404-Fehlern sowie unterschiedliche Redirect-Regeln für Desktop und Mobile. Letzteres wertet Google seit dem Mobile-First-Indexing als Cloaking-Signal.

Kontrolliere deine Weiterleitungen regelmäßig mit der Google Search Console (Bericht "Crawl-Fehler") oder einem Crawler wie Screaming Frog. Dokumentiere jede Änderung mit Datum und Begründung - das erleichtert spätere Audits erheblich.
