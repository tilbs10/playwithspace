import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        date: z.coerce.date(),
        category: z.enum(['fundamentals', 'coaching', 'mindset', 'stories']),
        tags: z.array(z.string()).optional(),
        type: z.enum(['article', 'quick-take', 'deep-dive', 'post-game', 'post-training']).default('article'),
        // hero image: shown at the top of the post and used as the social share card
        heroImage: image().optional(),
        heroAlt: z.string().optional(),
        // post-game fields
        result: z.string().optional(),
        // post-training fields
        focus: z.string().optional(),
        draft: z.boolean().optional().default(false),
      })
      .refine((data) => !data.heroImage || !!data.heroAlt, {
        message: 'heroAlt is required when heroImage is set',
        path: ['heroAlt'],
      }),
});

export const collections = { blog };
