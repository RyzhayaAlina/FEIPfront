// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Open Sans": true,
          Montserrat: true,
        },
      },
    ],
    "nuxt-svgo",
    "nuxt-swiper",
  ],
});
