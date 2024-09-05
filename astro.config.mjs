import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import playformCompress from "@playform/compress";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://caperasdev.com",
  integrations: [icon(), sitemap(), playformCompress(
    {CSS: false}
  )],
  base: process.env.SERVER === 'development' ? `/${process.env.REPO}` : '/',
  build: {
    assets: 'assets'
  }
});