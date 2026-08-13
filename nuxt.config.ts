// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,

  modules: ['@nuxt/eslint'],

  eslint: {
    config: {
      stylistic: false,
    },
  },

  app: {
    baseURL: '/jaco-linktree/',
    head: {
      base: { href: '/jaco-linktree/' },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=DM+Sans:wght@300;400&display=swap',
        },
      ],
      script: [
        {
          key: 'strip-landing-hash',
          innerHTML: `
            if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; }
            if (location.hash) {
              history.replaceState(null, '', location.pathname + location.search);
            }
          `,
        },
      ],
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
