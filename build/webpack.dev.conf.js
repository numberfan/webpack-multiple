var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})
module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin()
  ]
})
// 自动生成多页面 html
// https://github.com/ampedandwired/html-webpack-plugin
var htmls = utils.getMultiEntry('./src/' + config.rootHtmlPage + '/**/*.html');
for (html in htmls) {
  var pluginConf = {
    filename: html + '.html',
    // 模板路径
    template: htmls[html],
    // 每个html引用的js模块
    chunks: [html, 'vendors', 'manifest'],
    // js 文件引入的位置，填 true 或者 'body' 放在 body 元素最后，如果这里填 'head'， 你懂得
    inject: true
  }
  module.exports.plugins.push(new HtmlWebpackPlugin(pluginConf))
}
