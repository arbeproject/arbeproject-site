// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // OJO: esto es para GitHub Pages SIN dominio propio
  site: "https://arbeproject.github.io",
  base: "/arbeproject-site/",

  vite: {
    plugins: [tailwindcss()],
  },
});

});







