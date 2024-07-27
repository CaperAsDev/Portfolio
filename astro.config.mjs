import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  base: process.env.SERVER === 'development' ? `/${process.env.REPO}` : '/',
  build: {
    assets: 'assets'
  }
});