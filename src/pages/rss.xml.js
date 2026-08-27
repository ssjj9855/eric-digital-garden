import rss from "@astrojs/rss";
import { getCollection } from "astro:content";


export async function GET(){

const posts = await getCollection("blog");


return rss({

title: "Eric Digital Garden",

description: "Eric Digital Garden - AI、科技、工具和个人探索记录",

site: "https://eric-digital-garden.vercel.app",


items: posts.map((post)=>({

title: post.data.title,

description: post.data.description,

pubDate: post.data.date,

link: `/blog/${post.id}/`,

})),


});

}