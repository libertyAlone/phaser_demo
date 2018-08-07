module.exports = {
  plugins: {
    'postcss-cssnext': {},
    'cssnano': process.env.NODE_ENV === 'production' ? {} : false
  }
}