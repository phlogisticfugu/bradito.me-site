import { defineCollection, z } from 'astro:content';

const timeZone = "America/Chicago";

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date({ timeZone }),
		updatedDate: z.coerce.date({ timeZone }).optional(),
		heroImage: z.string().optional(),
		status: z.enum(['draft', 'published']),
	}),
});

export const collections = { blog };
