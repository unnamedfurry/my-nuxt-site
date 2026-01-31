// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [],
  $development: {
    app: {
      head: {
        title: 'DEV | unnamed_furry | ABOUT'
      }
    }
  },
  $production: {
    app: {
      head: {
        title: 'unnamed_furry | ABOUT'
      }
    }
  }
})