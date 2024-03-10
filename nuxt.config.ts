// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxt/image-edge',
    'nuxt-headlessui',
    'nuxt-simple-robots',
    'nuxt-simple-sitemap',
  ],
  // Optionally change the default prefix.
  headlessui: {
    prefix: 'Headless'
  },
  css: [
    '@/assets/css/main.css',
  ],

})
