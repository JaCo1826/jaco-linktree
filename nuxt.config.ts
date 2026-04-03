export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,

  app: {
    baseURL: '/jaco-linktree/',

    head: {
      base: { href: '/jaco-linktree/' },
    },
  },

  nitro: {
    baseURL: 'jaco-linktree',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/impressum', '/projects', '/projects/landscape-section'],
      failOnError: false,
    },
  },

  experimental: {
    payloadExtraction: false,
  },

  css: ['~/assets/styles/_reset.scss', '~/assets/styles/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/styles/_variables.scss" as *;`,
        },
      },
    },
  },
});
