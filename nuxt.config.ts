import tailwindcss from "@tailwindcss/vite";
import { fontPreload } from "./config/fontPreload";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: {
      link: fontPreload,
    },
  },
  modules: ["@nuxt/eslint", "@nuxt/image"],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
