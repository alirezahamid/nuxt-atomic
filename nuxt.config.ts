/** @format */

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/storybook",
  ],
  pinia: {
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
