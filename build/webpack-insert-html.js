function InsertHtml(options){
  this.options = options
}
InsertHtml.prototype.apply = function(compiler){
  var paths = this.options.paths
  compiler.plugin('compilation', function(compilation, options){
    compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback){
      paths.forEach((val, index)=>{
        htmlPluginData.assets.js.unshift(val)
      })
      callback(null, htmlPluginData)
    })
  })
}


module.exports = InsertHtml