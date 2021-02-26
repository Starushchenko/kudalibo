export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Кудалибо — сервис транферов по Крыму',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'application-name', content: 'Кудалибо' },
      { name: 'msapplication-TileColor', content: '/mstile-144x144.png' },
      { name: 'msapplication-square70x70logo', content: '/mstile-70x70.png' },
      { name: 'msapplication-square150x150logo', content: '/mstile-150x150.png' },
      { name: 'msapplication-wide310x150logo', content: '/mstile-310x150.png' },
      { name: 'msapplication-square310x310logo', content: '/mstile-310x310.png' },
    ],
    link: [
      { rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: '/apple-touch-icon-57x57.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: '/apple-touch-icon-114x114.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: '/apple-touch-icon-72x72.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: '/apple-touch-icon-144x144.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '60x60', href: '/apple-touch-icon-60x60.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: '/apple-touch-icon-120x120.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '76x76', href: '/apple-touch-icon-76x76.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: '/apple-touch-icon-152x152.png' },
      { rel: 'icon', type: 'image/png', href: '/favicon-196x196.png', sizes: '196x196'},
      { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96'},
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32'},
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16'},
      { rel: 'icon', type: 'image/png', href: '/favicon-128x128.png', sizes: '128x128'},
      { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/style.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // "~/plugins/LRoutingMachine.vue",
    "~/plugins/vee-validate",
    "~/plugins/vuedraggable",
    "~/plugins/vue2-datepicker",
    { src: '~/plugins/vue-js-modal', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@aceforth/nuxt-optimized-images',
    'nuxt-leaflet',
    'cookie-universal-nuxt',
  ],

  optimizedImages: {
    optimizeImages: true,
    mozjpeg: {
      quality: 100,
    },
    webp: {
      preset: 'default',
      quality: 100,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

	router: {
		middleware: ['mobile']
	},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules", "vuedraggable"],
  }
}
