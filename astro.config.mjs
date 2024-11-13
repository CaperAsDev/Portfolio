import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"]
  },
  site: "https://caperasdev.com",
  integrations: [icon(), sitemap()],
  base: process.env.SERVER === 'development' ? `/${process.env.REPO}` : '/',
  build: {
    assets: 'assets'
  }
});