// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      STRAPI_URL: process.env.STRAPI_URL
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: false
  },
  future: {
    compatibilityVersion: 4
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-svgo',
    '@nuxt/image',
    [
      '@storyblok/nuxt',
      {
        accessToken: 'OGKES9ieCiqdiQkj63xPoQtt',
      },
    ],
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  css: ['~/assets/scss/styles.scss'],
  tailwindcss: {
    cssPath: false,
    exposeConfig: true
  },
  googleFonts: {
    families: {
      Lora: [400, 500, 600, 700],
      Montserrat: [400, 500, 600, 700]
    }
  },
})