// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.arbeproject.org",
  vite: {
    plugins: [tailwindcss()],
  },
});




