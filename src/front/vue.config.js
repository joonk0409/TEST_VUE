const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true ,
  outputDir : "../vue_outputDir/src/main/resources/static",
  devServer : {
    proxy : {
      '/api' : {
        target: 'http://localhost:8006',
        changeOrigin : true
      }
    }
  }
})
