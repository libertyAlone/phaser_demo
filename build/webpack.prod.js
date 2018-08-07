const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.nODE_ENV': JSON.stringify('production')
    }),
    new UglifyJSPlugin({
      sourceMap: true,
      cache: true,
      parallel: true
    }),
    new OptimizeCSSAssetsPlugin({}),
    // 不再使用extracttextplugin
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[name].[contenthash:8].css'
    })
  ]
})