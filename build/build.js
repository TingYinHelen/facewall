require('shelljs/global')
var path = require('path')
var webpack = require('webpack')

var assetsPath = path.join('./', 'dist')
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/*', assetsPath)

