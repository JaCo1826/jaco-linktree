// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  nitro: {
    prerender: {
      crawlLinks: true
    }
  },

  experimental: {
    payloadExtraction: false
  },

  css: [
    '~/assets/styles/_reset.scss',
    '~/assets/styles/main.scss'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/styles/_variables.scss" as *;`
        }
      }
    }
  }
})