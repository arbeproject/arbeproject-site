// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://arbeproject.github.io",   // dominio de GitHub Pages
  base: "/arbeproject-site/",             // nombre del repo
  vite: {
    plugins: [tailwindcss()],
  },
});







