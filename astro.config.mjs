import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://caperasdev.com",
  integrations: [icon(), sitemap(
    {
      i18n: {
      defaultLocale: 'es',
      locales: {
        en: 'en-US', 
        es: 'es-ES',
      },
    },
  }
  )],
  base: process.env.SERVER === 'development' ? `/${process.env.REPO}` : '/',
  build: {
    assets: 'assets'
  },
});