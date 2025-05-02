import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-04-29",
  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-free/css/all.css",
    "vue3-toastify/dist/index.css",

  ],
  modules: [
    '@element-plus/nuxt' ,
     '@pinia/nuxt'
  ],
  
  plugins: [
    '~/plugins/axiosGlobal.ts'
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
