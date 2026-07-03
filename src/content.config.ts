import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['fundamentals', 'coaching', 'mindset', 'stories']),
    tags: z.array(z.string()).optional(),
    type: z.enum(['article', 'quick-take', 'deep-dive', 'post-game', 'post-training']).default('article'),
    // post-game fields
    result: z.string().optional(),
    // post-training fields
    focus: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
