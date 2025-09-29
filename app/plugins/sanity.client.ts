import { defineNuxtPlugin } from "#app";
import { createClient } from "@sanity/client";
import type { SanityClient } from "@sanity/client";

export default defineNuxtPlugin((nuxtApp) => {
  const client: SanityClient = createClient({
    projectId: "w7i6y8uy",
    dataset: "dev",
    apiVersion: "2022-03-25",
    useCdn: true,
  });

  // Inject as $sanity in Nuxt app
  nuxtApp.provide("sanity", client);
});
