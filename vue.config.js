module.exports = {
  transpileDependencies: true,devServer: {
    port: 5000
   },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto'
        }
      ]
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
