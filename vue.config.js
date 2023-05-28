const fs = require('fs')

module.exports = {
  mode: 'production',
  transpileDependencies: true,
  devServer: {
    port: 5000,
    https: {
      key: fs.readFileSync('./ssl/server.key'),
      cert: fs.readFileSync('./ssl/server.crt'),
    }
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
