const fs = require('fs')

module.exports = {
  transpileDependencies: true,
  devServer: {
    port: 5000,
    https: {
      key: fs.readFileSync('/etc/letsencrypt/live/pucmg.vps.webdock.cloud/privkey.pem'),
      cert: fs.readFileSync('/etc/letsencrypt/live/pucmg.vps.webdock.cloud/fullchain.pem'),
    },
    disableHostCheck: true,
    public: 'https://pucmg.vps.webdock.cloud:5000'
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
