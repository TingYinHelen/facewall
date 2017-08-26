var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var InsertHtml = require('./webpack-insert-html.js')
var baseConfig = require('./webpack.base.config.js')

var prodOpt = {
  entry: path.resolve(__dirname, '../index.js'),
  output: {
    path: path.resolve(__dirname, '../docs'),
    filename: './[name]/[hash].js',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true}),
    new InsertHtml({paths: ['static/lib/CSS3DRenderer.js','static/lib/TrackballControls.js','static/lib/tween.min.js', 'static/lib/three.js']})
  ]
}
var webpackConfig = Object.assign({}, baseConfig, prodOpt)
module.exports = webpackConfig