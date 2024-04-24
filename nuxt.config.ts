// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
  ],
  css: ['~/assets/css/main.css'],
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },
  colorMode: {
    preference: 'dark'
  },
  googleFonts: {
    display: "swap",
    download: true,
    families: {
      "Nunito": [300, 400, 600, 700, 800, 900],
    },
  },
  typescript: {
    shim: false
  },
  app: {
    head: {
      title: 'Premier Art',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  alias: {
    'images': "/assets/images",
  },
})