// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // SSG: statisches HTML zur Build-Zeit generieren
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },

  // Performance
  experimental: {
    payloadExtraction: false
  },

/*  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/styles/_variables.scss" as *;`
        }
      }
    }
  }*/
})
