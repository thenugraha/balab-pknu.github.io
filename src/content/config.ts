import { defineCollection, z } from "astro:content";

const bilingual = z.object({ en: z.string(), ko: z.string() });

// News/achievements. One markdown file per item in src/content/news/.
// To add news: drop a new YYYY-MM-DD-slug.md file with this frontmatter.
// `en`/`ko` may contain inline HTML (<strong>, <em>); they render bilingually.
//
// `award` is what makes an item show up on /awards — the awards page is derived
// from this collection, so a competition win is written once, here, and never
// duplicated. Use an array when one event produced several prizes.
const news = defineCollection({
  type: "content",
  schema: z.object({
    date: z.coerce.date(),
    title: bilingual, // short headline
    image: z.string().optional(), // single photo: /img/news/xxx.jpg (put file in public/img/news/)
    images: z.array(z.string()).optional(), // multiple photos → shown as a gallery
    en: z.string(), // description body (may contain inline HTML)
    ko: z.string(),
    award: z
      .array(
        z.object({
          rank: bilingual, // e.g. { en: "Grand Prize", ko: "대상" }
          competition: bilingual, // name of the competition
          host: bilingual, // organizer(s), shown under the competition name
          team: z.string().optional(), // team name, if the entry ran under one
          members: z.string().optional(), // BALAB members who took the prize
        })
      )
      .optional(),
  }),
});

// Publications. One JSON file per paper in src/content/publications/ (NN.json).
// Files are shown grouped by year (newest first); add a new paper = new file.
const publications = defineCollection({
  type: "data",
  schema: z.object({
    year: z.number(),
    status: z.enum(["published", "under review"]),
    selected: z.boolean().default(false), // true → shown in home "Featured publications"
    title: z.string(),
    authors: z.string(),
    venue: z.string().optional(),
    url: z.string().url().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

// Funded projects. One JSON file per project in src/content/projects/ (NN.json).
const projects = defineCollection({
  type: "data",
  schema: z.object({
    title: bilingual,
    funder: bilingual,
    role: bilingual,
    period: z.string(),
    amount: z.string().optional(),
    status: z.enum(["current", "completed"]),
    category: z.enum(["National", "Industry"]),
    featured: z.boolean().optional(),
    blurb: bilingual.optional(),
  }),
});

// Research areas. One JSON file per area in src/content/research/ (NN.json);
// filename order = display order on the home page.
const research = defineCollection({
  type: "data",
  schema: z.object({
    title: bilingual,
    blurb: bilingual,
    tags: z.array(z.string()),
  }),
});

// Lab members. One JSON file per person in src/content/team/ (NN.json).
// `photo`: path under public/, e.g. "/img/people/heungjun-lim.jpg".
// Leave "" until a photo exists — the page then shows an initials placeholder.
const team = defineCollection({
  type: "data",
  schema: z.object({
    name: bilingual,
    role: bilingual,
    focus: bilingual,
    email: z.string().email().optional(),
    photo: z.string().optional(),
  }),
});

// Alumni. One JSON file per graduate in src/content/alumni/ (NN.json).
const alumni = defineCollection({
  type: "data",
  schema: z.object({
    name: bilingual,
    degree: bilingual, // e.g. "M.S., Data Engineering (2026)"
    now: bilingual.optional(), // current position / destination, if known
    photo: z.string().optional(), // e.g. "/img/people/name.jpg"; omit for initials avatar
    thesis: bilingual.optional(), // dissertation title; official language kept in both fields when no Korean title exists
  }),
});

export const collections = { news, publications, projects, team, alumni, research };
