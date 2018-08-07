const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: 'babel-loader'
  },
  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'sass-loader',
    ]
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      },
    ]
  },
  {
    test: /\.(png|svg|jpg|gif|webp)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      },
      {
        loader: 'image-webpack-loader',
        options: {
          disable: true,
          webp: {
            quality: 75
          }
        }
      }
    ]
  }
]