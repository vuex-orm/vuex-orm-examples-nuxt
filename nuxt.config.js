module.exports = {
  mode: 'universal',

  build: {
    postcss: [
      require('postcss-import')({ path: './assets' }),
      require('postcss-nested')(),
      require('postcss-css-variables')()
    ]
  },

  head: {
    title: 'Vuex ORM – Nuxt',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],

    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700|Raleway:400,700' }
    ],
  },

  loading: {
    color: '#292929',
    failedColor: '#d71f4a',
    height: '2px'
  },

  css: ['normalize.css', '@/assets/styles/bootstrap.css']
}
