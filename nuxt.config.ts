export default defineNuxtConfig({
  srcDir: "./",
  css: ["@/assets/css/main.css"],

  modules: [
    // ...
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `defineStore`
          "defineStore", // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
  //buildModules: ["@pinia/nuxt"],
  alias: {
    "./runtimeConfig": "./runtimeConfig.browser",
  },

  //
  plugins: [{ src: "@/plugins/amplify.ts", mode: "client" }],
  vite: {
    // temp-fix for dev, it breaks build for now (see: https://github.com/nuxt/framework/issues/4916)
    define: {
      // global: {}
      "window.global": {},
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {},
});
