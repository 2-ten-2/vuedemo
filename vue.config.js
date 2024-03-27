const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // publicPath: '/',
    host: "localhost",
    port: 8082,
    proxy: {
      'api': {
        target: process.env.VUE_APP_URL,
        ws: true,
        changeOrign: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
