const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const rules = require('./rules.js')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    app: './src/app.js'
  },
  plugins:[
    // 构建前先删除build目录
    new CleanWebpackPlugin('dist', {
      root: path.resolve(__dirname, '../')
    }),
    // 使用时无需import
    new webpack.ProvidePlugin({
      _: 'lodash'
    }),
    // webpack使用hash值得10位作为moduleid
    new webpack.HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 10
    }),
    // autoinject link script to index.html
    new HtmlWebpackPlugin({
      title: '测试',
      template: './src/index.html',
      inject: 'body',
      chunksSortMode: function(a, b) {
        const order = ['vendor', 'another', 'app'];
        return order.indexOf(a.names[0]) - order.indexOf(b.names[0]);
      }
    })
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: devMode ? '[name].[hash:8].js' : '[name].[chunkhash:8].js',
    chunkFilename: devMode ? '[name].[hash:8].js' : '[name].[chunkhash:8].js',
  },
  module: {
    rules
  },
  resolve: {
    extensions: ['.js', '.scss', '.css']
  },
  // webpack4中不再使用commonchunksplugin
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0
        },
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10, // 优先级
          enforce: true
        }
      }
    },
    runtimeChunk: {
      name: 'runtime',
    }
  }
}