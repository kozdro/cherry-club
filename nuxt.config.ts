// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/cherry-club/'
  },
  nitro: {
    preset: 'static',
  },
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
    'nuxt-swiper',
    'nuxt-marquee',
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
      'Playfair Display': [400, 500, 600, 700],
      Poppins: [300, 400, 500, 600, 700],
      Montserrat: [300, 400, 500, 600, 700]
    }
  },
})