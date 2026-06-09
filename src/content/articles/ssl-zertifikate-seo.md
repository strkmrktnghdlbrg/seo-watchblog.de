---
title: "SSL-Zertifikate und SEO"
section: "seo-wissen"
cluster: "technisches-seo"
excerpt: "HTTPS ist Standard und ein leichter Ranking-Faktor. Was ein SSL-Zertifikat leistet und wie du es korrekt einrichtest."
date: "2025-07-31"
readingTime: "7 Min."
gradient: "g1"
---

HTTPS ist heute keine Kür mehr, sondern Pflicht. Seit Google 2014 das SSL-Zertifikat offiziell als Ranking-Signal eingeführt hat, zeigt die Search Console für ungesicherte HTTP-Seiten deutliche Hinweise auf Handlungsbedarf. 2026 ist eine Website ohne gültiges Zertifikat im Grunde nicht mehr wettbewerbsfähig.

## Was ein SSL-Zertifikat technisch leistet

Ein SSL- bzw. TLS-Zertifikat verschlüsselt die Datenübertragung zwischen Browser und Server. Nutzer sehen das vertraute Schloss-Symbol in der Adresszeile - fehlt es, zeigen Chrome und Firefox eine "Nicht sicher"-Warnung, die nachweislich die Absprungrate erhöht.

Für die meisten Websites reicht ein Domain-validiertes Zertifikat (DV). Es lässt sich kostenlos über Let's Encrypt beziehen und bei nahezu allen Hostern mit wenigen Klicks aktivieren. Organisationsvalidierte (OV) oder erweiterte Zertifikate (EV) sind nur für Unternehmens- und Shop-Seiten relevant, bei denen das grüne Trust-Signal in der Adresszeile konversionsrelevant ist.

## Der SEO-Effekt: Ranking-Faktor und Nutzersignale

Google stuft HTTPS als "leichten" Ranking-Faktor ein - es ist kein Gamechanger, aber ein Tiebreaker bei vergleichbaren Seiten. Wichtiger ist der indirekte Effekt: Nutzer, die eine Sicherheitswarnung sehen, springen häufiger ab. Höhere Absprungraten und kürzere Verweildauer wirken sich negativ auf das Nutzersignal-Profil aus, das Google bei der Bewertung berücksichtigt.

Nach der Umstellung auf HTTPS musst du außerdem sicherstellen, dass alle internen Links, kanonische URLs, die Sitemap und der hinterlegte Domainname in der Google Search Console auf die HTTPS-Version zeigen. Ein fehlerhafter Mix aus HTTP und HTTPS erzeugt doppelte Inhalte und verteilt den Linkjuice auf zwei Versionen derselben Seite.

## Korrekte Implementierung in drei Schritten

1. **Zertifikat aktivieren** - über den Hoster (Hostinger, All-Inkl, Strato) oder direkt über Let's Encrypt. Die meisten Hoster bieten Auto-Renewal.
2. **HTTP-zu-HTTPS-Weiterleitungen einrichten** - per 301-Redirect in der `.htaccess` oder über die Serverkonfiguration, damit keine Linkjuice-Verluste entstehen.
3. **Mixed-Content prüfen** - Bilder, Skripte oder eingebettete Ressourcen, die noch über HTTP geladen werden, erzeugen Mixed-Content-Warnungen und heben die HTTPS-Sicherheit faktisch auf. Browser-DevTools oder ein Crawler zeigen offene Baustellen sofort an.

Eine saubere technische Basis - dazu gehört das SSL-Setup - ist Voraussetzung dafür, dass Content und Backlinks ihre volle Wirkung entfalten können.
