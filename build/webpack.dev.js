const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-souce-map',
  devServer: {
    contentBase: '../dist'
  },
})