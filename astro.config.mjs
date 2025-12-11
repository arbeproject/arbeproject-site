// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.arbeproject.org",
  output: "static", // explícito, aunque es el valor por defecto
  vite: {
    plugins: [tailwindcss()],
  },
});








