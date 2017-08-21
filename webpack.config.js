var webpack = require('webpack')
var path = require('path')
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=10000&reload=true'
var HtmlWebpackPlugin = require('html-webpack-plugin')

var baseConfig = {
  entry: {
    page: ['./index.js', hotMiddlewareScript],
    vendor1: ['jquery'],
    vendor2: ['three'],
    client: 'webpack-hot-middleware/client'
  },
  output: {
    path: path.resolve('./dist'),
    filename: './[name]/[hash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js'],
    fallback: [path.join(__dirname, './node_modules')],
  },
  module: {
      loaders: [
        {
          test: /\.(png|jpg)$/,
          loader: 'url?limit=8192&context=client&name=[path][name].[ext]'
        },
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/
        }
      ]
    },
  plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new HtmlWebpackPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
    		names: ["vendor2", "vendor1"],
    		minChunks: Infinity
    	})
    ]
}
module.exports = baseConfig;