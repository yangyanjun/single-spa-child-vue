const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      library: 'singleVue',
      libraryTarget: 'umd',
    },
    devServer: {
      port: 10000,
    }
  }
})
