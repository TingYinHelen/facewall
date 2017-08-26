require('shelljs/global')
var path = require('path')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf.js')

var assetsPath = path.join('./', 'docs')
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static', assetsPath)

webpack(webpackConfig, function(err, stats){
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})

