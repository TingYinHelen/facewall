var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=10000&reload=true'



var baseConfig = {
    entry: {
        page: ['./main.js', hotMiddlewareScript],
    },
    output: {
        filename: './[name]/[hash].js',
        path: path.resolve('./dist'),
        publicPath: '/'
    },
    resolve: {
      extensions: ['', '.js'],
      fallback: [path.join(__dirname, '../node_modules')],
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
        },
        {
          test: /\.css$/,
          loader: 'css-loader',
        },
      ]
    },
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html'
      })
    ]
}

Object.keys(baseConfig.entry).forEach(function (name) {
  baseConfig.entry[name] = ['./build/dev-server.js'].concat(baseConfig.entry[name])
})
module.exports = baseConfig;