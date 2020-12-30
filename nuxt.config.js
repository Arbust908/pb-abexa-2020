// import getRoutes from './utils/getRoutes'

export default {
  // -
  server: {
    port: 3088,
    host: '0.0.0.0',
  },
  // https://www.npmjs.com/package/@nuxtjs/sitemap
  sitemap: {
    hostname: 'https://www.abexa.com',
    // routes() {
    //   return getRoutes()
    // },
  },
  // -
  // modern: true,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: process.env.APP_LANG || 'es',
    },
    title: 'Abexa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      /** HTTP-EQUIV */
      {
        hid: 'contentLanguage',
        'http-equiv': 'content-language',
        content: 'es',
      },
      {
        hid: 'XUACompatible',
        'http-equiv': 'X-UA-Compatible',
        content: 'ie=edge',
      },
      { hid: 'cleartype', 'http-equiv': 'cleartype', content: 'on' },

      /** UTILIDADES */
      { hid: 'mobileOptimized', name: 'MobileOptimized', content: '320' },
      { hid: 'themeColor', name: 'theme-color', content: '#005c9e' },
      { hid: 'handheldFriendly', name: 'HandheldFriendly', content: 'True' },
      {
        hid: 'description',
        name: 'description',
        content: `Abexa <> Articulando Empresas`,
      },
      {
        hid: `og:title`,
        property: 'og:title',
        content: `Abexa`,
      },
      {
        hid: `og:description`,
        property: 'og:description',
        content: `Abexa <> Articulando Empresas`,
      },
      {
        hid: `og:image`,
        property: 'og:image',
        content: `/pm-meta.jpg`,
      },
      {
        hid: `og:site_name`,
        property: 'og:site_name',
        content: `Abexa`,
      },
      // {
      //     hid: `og:url`,
      //     property: 'og:url',
      //     content: this.baseUrl + this.$route.fullPath
      // },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: `Abexa`,
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: `Abexa <> Articulando Empresas`,
      },
      {
        hid: 'twitter:image:src',
        property: 'twitter:image:src',
        content: `/pm-meta.jpg`,
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: `summary_large_image`,
      },
      // {
      //   hid: 'twitter:creator',
      //   property: 'twitter:creator',
      //   content: `@BlancoPancho`,
      // },
      // {
      //   hid: 'twitter:site',
      //   property: 'twitter:site',
      //   content: `@BlancoPancho`,
      // },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16.png',
        sizes: '16x16',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32.png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-48.png',
        sizes: '48x48',
      },
      { rel: 'apple-touch-icon', href: '/favicon-57.png', sizes: '57x57' },
      { rel: 'apple-touch-icon', href: '/favicon-120.png', sizes: '120x120' },
      { rel: 'apple-touch-icon', href: '/favicon-152.png', sizes: '152x152' },
      { rel: 'apple-touch-icon', href: '/favicon-167.png', sizes: '167x167' },
      { rel: 'apple-touch-icon', href: '/favicon-180.png', sizes: '180x180' },
      { rel: 'icon', href: '/favicon-96.png', sizes: '96x96' },
      { rel: 'icon', href: '/favicon-192.png', sizes: '192x192' },
    ],
  },

  // Customize the progress-bar color
  loading: { color: '#005c9e' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // -
    'nuxt-i18n',
    // https://github.com/vanhoofmaarten/nuxt-mq
    'nuxt-mq',
  ],
  // https://color-mode.nuxtjs.org/
  colorMode: {
    classSuffix: '',
  },
  mq: {
    defaultBreakpoint: 'sm',
    breakpoints: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: Infinity,
    },
  },
  /**
   * La Internacionalizacion
   */
  i18n: {
    vueI18nLoader: true,
    locales: [
      { name: 'Español', code: 'es', iso: 'es', file: 'es.js' },
      { name: 'English', code: 'en', iso: 'en', file: 'en.js' },
      { name: 'Portuges', code: 'pt', iso: 'pt', file: 'pt.js' },
    ],
    defaultLocale: process.env.APP_LANG || 'es',
    lazy: true,
    // langDir: 'lang/',
    // strategy: 'no_prefix',
    strategy: 'prefix_and_default',
    detectBrowserLanguage: false,
    baseUrl: 'https://www.abexa.com',
    vueI18n: {
      fallbackLocale: 'es',
      messages: require('./lang'),
    },
  },

  // -
  pwa: {
    manifest: {
      name: 'Abexa',
      short_name: 'Abexa',
      lang: 'es',
      author: 'Abexa || yo@panchoblanco.com',
    },
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
