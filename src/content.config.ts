import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";


const blog = defineCollection({

  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/blog",
  }),


  schema: z.object({

    title: z.string(),

    date: z.date(),

    category: z.string(),

    description: z.string(),

    tags: z.array(z.string()).optional(),

    cover: z.string().optional(),

    series:z.string().optional(),

  }),

});


export const collections = {

  blog,

};