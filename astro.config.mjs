// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from '@tailwindcss/vite'
import react from "@astrojs/react";
import vue from "@astrojs/vue";

import netlify from "@astrojs/netlify";

export default defineConfig({
  integrations: [react(), vue()],

  vite: {
      plugins: [tailwindcss()],
      resolve: {
          alias: {
              '@': '/src',
          },
      },
  },

  adapter: netlify(),
});