// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://cjdc007-blog.netlify.app/",
  integrations: [preact()]
});