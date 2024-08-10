// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  
  devtools: {
    enabled: true
  },

  modules: ['@nuxtjs/tailwindcss', "@nuxtjs/sitemap"],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=2',
      htmlAttrs: {
        lang: 'ru'
      },
      meta: [
        {
          name: 'MobileOptimized',
          content: '320'
        },
        {
          name: 'HandheldFriendly',
          content: 'True'
        },
        {
          'http-equiv': 'cleartype',
          content: 'on'
        },
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'ie=edge'
        }
      ]
    }
  },

  typescript: {
    shim: false
  },
})