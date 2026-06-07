import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const gradient = z.enum(['g1', 'g2', 'g3', 'g4', 'g5', 'g6']).default('g1');

// ── SEO-Tools (Money-Pages: Reviews mit Score-System) ──
const tools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
  schema: z.object({
    name: z.string(),
    shortName: z.string(),               // 2-Buchstaben-Tile, z.B. "Se"
    category: z.string(),                // "All-in-One-Suite"
    categorySlug: z.string(),            // Hub-Zuordnung, z.B. "seo-software"
    gradient,
    scoreOverall: z.number(),            // 0–5
    subScores: z.object({
      funktionsumfang: z.number(),
      datenqualitaet: z.number(),
      bedienung: z.number(),
      preisLeistung: z.number(),
      support: z.number(),
    }),
    price: z.string(),                   // "ab 139,95 €/Monat"
    freeTrial: z.string().optional(),
    affiliateUrl: z.string(),
    idealFor: z.string(),
    lessFor: z.string().optional(),
    verdict: z.string(),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    alternatives: z.array(z.string()).default([]),  // tool-slugs
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    rank: z.number().optional(),
    updated: z.string().optional(),
  }),
});

// ── Vergleichs-Hubs (/tools/...) ──
const hubs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/hubs' }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string().optional(),
    intro: z.string(),
    affiliateGroup: z.enum(['seo-tools', 'hosting', 'plugins', 'kurse']).default('seo-tools'),
    toolSlugs: z.array(z.string()).default([]),
    filters: z.array(z.string()).default([]),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    updated: z.string().optional(),
  }),
});

// ── Wissen / Watchblog / Ratgeber (migrierte + neue Artikel) ──
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    section: z.enum(['seo-wissen', 'watchblog', 'ratgeber']),
    cluster: z.string().optional(),      // grundlagen, onpage, ...
    excerpt: z.string(),
    date: z.string(),
    readingTime: z.string().optional(),
    image: z.string().optional(),
    imageCredit: z.string().optional(),
    gradient: gradient.optional(),
    relatedTools: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { tools, hubs, articles };
