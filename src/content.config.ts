import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const schema = z.object({
    title: z.string(),
    client: z.string(),
    year: z.union([z.number(), z.string()]),
    role: z.string(),
    team: z.string().optional(),
    format: z.enum(['full', 'medium', 'short', 'playground']),
    tags: z.array(z.enum(['product', 'ux', 'data'])),
    order: z.number().default(99),
    selfInitiated: z.boolean().default(false),
    summary: z.string(),
    seoTitle: z.string().optional(),        // <title> and og:title; defaults to "Title, Name"
    seoDescription: z.string().optional(),  // meta description, up to ~155 characters; defaults to the summary
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    cover: z.string().optional(),
    // Own colours for this case: the preview card and the case page get this background and text colour
    // (instead of the coral card and the scrolling colours).
    bg: z.string().optional(),
    ink: z.string().optional(),
    // false: the preview card doesn't lighten on hover (when the cover image is meant to sit right on the card's colour)
    hoverTint: z.boolean().optional(),
});

// English cases in content/cases, their Polish versions (same file names) in content/cases-pl.
const cases = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/cases' }), schema });
const casesPl = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/cases-pl' }), schema });

export const collections = { cases, casesPl };
