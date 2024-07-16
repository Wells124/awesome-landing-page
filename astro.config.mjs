import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solid from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import astroExpressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel/serverless'
import houston from "./houston.theme.json";


// https://astro.build/config
export default defineConfig({
	site: "https://www.awesomelandingpage.com",
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		solid(),
		astroExpressiveCode({
			themes: [houston],
			frames: false,
		}),
		mdx(),
		sitemap(),
	],
	image: {
		domains: ["v1.screenshot.11ty.dev", "storage.googleapis.com"],
	},
	vite: {
		ssr: {
			noExternal: ["smartypants"],
		},
	},
	output: "server",
	adapter: vercel({
		webAnalytics: {
			enabled: true
		}
	})
});
