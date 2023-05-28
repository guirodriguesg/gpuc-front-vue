const fs = require('fs')

module.exports = {
  mode: 'production',
  transpileDependencies: true,
  devServer: {
    port: 5000,
    https: {
      key: fs.readFileSync('/etc/letsencrypt/live/pucmg.vps.webdock.cloud/privkey.pem'),
      cert: fs.readFileSync('/etc/letsencrypt/live/pucmg.vps.webdock.cloud/fullchain.pem'),
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
