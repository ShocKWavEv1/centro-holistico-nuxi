import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        // PPLettraMono
        {
          rel: "preload",
          as: "font",
          href: "/fonts/museum/PPLettraMono-Ultralight.woff2",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          href: "/fonts/museum/PPLettraMono-Regular.woff2",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          href: "/fonts/museum/PPLettraMono-Medium.woff2",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          href: "/fonts/museum/PPLettraMono-Ultrabold.woff2",
          type: "font/woff2",
          crossorigin: "anonymous",
        },

        // PPRadioGrotesk
        {
          rel: "preload",
          as: "font",
          href: "/fonts/radio/PPRadioGrotesk-Ultralight.woff2",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          href: "/fonts/radio/PPRadioGrotesk-Light.woff2",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          href: "/fonts/radio/PPRadioGrotesk-Regular.woff2",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          href: "/fonts/radio/PPRadioGrotesk-Bold.woff2",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          href: "/fonts/radio/PPRadioGrotesk-Black.woff2",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  modules: ["@nuxt/eslint", "@nuxt/image"],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
