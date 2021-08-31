module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/scss/_settings.scss";'
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
