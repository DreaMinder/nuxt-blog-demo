module.exports = {
  mode: 'spa',
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: 'https://jsonplaceholder.typicode.com'
  },
  css: [
    '@assets/style.scss',
  ]
}
