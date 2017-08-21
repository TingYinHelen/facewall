var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=10000&reload=true'
var baseConfig = require('./webpack.base.config.js')

var devOpt = {
  entry: {
    app:[
      'webpack-hot-middleware/client',
      path.resolve(__dirname, '../index.js')
      ],
    },
    output: {
      path: '/',
      publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin(),
      ]
}
var webpackConfig = Object.assign({}, baseConfig, devOpt)
module.exports = webpackConfig;