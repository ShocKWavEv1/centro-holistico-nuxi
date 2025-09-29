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
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxtjs/sanity"],
  sanity: {
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_SANITY_DATASET,
    apiVersion: "2022-03-25",
    useCdn: true, // Set to false for fresh data
  },
  image: {
    sanity: {
      projectId: process.env.NUXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NUXT_PUBLIC_SANITY_DATASET,
    },
    domains: ["cdn.sanity.io"],
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
