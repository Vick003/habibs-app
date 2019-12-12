const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/vuetify',
    [
      'nuxt-fire',
      {
        config: {
          apiKey: "AIzaSyDmzt4zYJqF4LYk_q0KJ6Y6Vi7cDf2WzFc",
          authDomain: "findcar-34b1a.firebaseapp.com",
          databaseURL: "https://findcar-34b1a.firebaseio.com",
          projectId: "findcar-34b1a",
          storageBucket: "findcar-34b1a.appspot.com",
          messagingSenderId: "858740610595",
          appId: "1:858740610595:web:d79ce9ccf0549f757dc396",
        },
        services: {
          auth: true,
          firestore: true,
          functions: true,
          storage: true,
          // realtimeDb: true,
          // messaging: true,
          // performance: true,
          // analytics: true,
          // remoteConfig: true
        }
      }
    ]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
