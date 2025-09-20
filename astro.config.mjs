// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";
import react from "@astrojs/react";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  site: isProd ? "https://salvadorvasqz.github.io" : undefined,
  base: isProd ? "/reactune-demo/" : "/",
  integrations: [react(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
