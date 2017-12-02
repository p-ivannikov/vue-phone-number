const path = require('path')
const eslintFormatter = require('eslint-friendly-formatter')

module.exports = {
  entry: {
    'vue-phone-number': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    library: 'vue-phone-number',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: path.resolve(__dirname, '../example'),
        exclude: /node_modules, build/,
        options: {
          formatter: eslintFormatter
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader!eslint-loader'
          }
        }
      }
    ]
  },
  externals: {
    'vue': 'vue'
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}
