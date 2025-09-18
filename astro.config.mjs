// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

export default defineConfig({
  site: 'https://salvadorvasqz.github.io',
  base: "/reactune-demo/",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
