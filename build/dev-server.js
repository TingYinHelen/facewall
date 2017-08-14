var path = require('path')
var express = require('express')
var webpack = require('webpack')
var opn = require('opn')  //自动打开网页
var webpackConfig = require('../webpack.config.js')

var app = express()
var compiler = webpack(webpackConfig) //webpack配置

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})


// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
// var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
// app.use(staticPath, express.static('./static'))

module.exports = app.listen(8888, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + '8888'
  console.log('Listening at ' + uri + '\n')
  // opn(uri)
})
