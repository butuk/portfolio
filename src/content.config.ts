import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cases = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/cases' }),
  schema: z.object({
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
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    cover: z.string().optional(),
  }),
});

export const collections = { cases };
