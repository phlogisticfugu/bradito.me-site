import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().refine((img) => img.width >= 920, {
			message: "Cover image must be at least 920 pixels wide!",
		}),
		status: z.enum(['draft', 'published']),
	}),
});

export const collections = { blog };
