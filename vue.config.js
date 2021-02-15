const config = require('./src/config.js')
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}
const port = process.env.port || process.env.npm_config_port || 9528 // dev port

module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test'
      ? process.env.VUE_APP_BASE
      : '/',
  lintOnSave: false,
  productionSourceMap: false,
  outputDir:config.dirName,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    // proxy: {
    //   // change xxx-api/login => mock/login
    //   // detail: https://cli.vuejs.org/config/#devserver-proxy
    //   [process.env.VUE_APP_BASE_API]: {
    //     target: 'http://dev-a.sxwyzt.com',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       ['^' + process.env.VUE_APP_BASE_API]: ''
    //     },
    //     logLevel: 'debug'
    //   }
    // }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@',resolve('src'))
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true
      })
      .end()
  }
}
