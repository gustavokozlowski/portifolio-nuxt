// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    css: "/<rootDir>/assets/css",
  },
//  app:{
//   baseURL: "http://localhost:3000/home/",
//  },
css: [
  '~/assets/css/main.css',
  '~/assets/css/globals.css',
]
});
