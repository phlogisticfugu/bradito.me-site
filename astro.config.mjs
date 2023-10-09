import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import favicons from "astro-favicons";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://bradito.me',
  integrations: [mdx(), sitemap(), favicons({
    masterPicture: "./src/website-icon.png",
    emitAssets: true,
    faviconsDarkMode: false
  })],
  output: "hybrid",
  adapter: cloudflare()
});