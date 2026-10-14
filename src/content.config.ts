import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// A file can be either `slug.md` or a folder `slug/index.md` (with its images beside it).
const generateId = ({ entry }: { entry: string }) =>
  entry.replace(/\/index\.md$/, '').replace(/\.md$/, '');

const notes = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*'], base: './src/content/notes', generateId }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),            // full title on the Notes list
      short: z.string().optional(), // shorter title for the note page
      tile: z.string().optional(),  // title on the home-page tile
      placeholder: z.string().optional(), // tile text until a cover image exists
      date: z.coerce.date(),
      tag: z.string().default('Note'),
      standfirst: z.string().optional(),
      cover: image().optional(),
      home: z.number().optional(), // position on the home page grid; leave out to keep it off home
      draft: z.boolean().default(false),    // hide from the live site
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*'], base: './src/content/projects', generateId }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      label: z.string(),                 // small mono label: company or "Build"
      order: z.number().default(100),    // lower = earlier on the Design page
      cover: image().optional(),
      placeholder: z.string().optional(),// text shown until a cover image exists
      home: z.number().optional(),       // position on the home page grid; leave out to keep it off home
      draft: z.boolean().default(false),
    }),
});

export const collections = { notes, projects };
