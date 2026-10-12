// @ts-check
import { defineConfig } from "astro/config";

import solidJs from "@astrojs/solid-js";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://rmilichiewicz.com",
  integrations: [solidJs(), mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});