const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const eslintFormatter = require('eslint-friendly-formatter')

const postcssConfig = require('../.postcssrc.js')

module.exports = {
  entry: {
    scripts: './example/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist-example'),
    filename: '[name].js'
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
      },
      {
        test: /\.pcss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: true,
                url: false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => postcssConfig.plugins,
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'vue-phone-number': path.resolve(__dirname, '../dist/vue-phone-number.js')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../example/index.html'),
      filename: 'index.html'
    }),
    new ExtractTextPlugin({
      filename: 'styles.css'
    })
  ],
  devtool: 'sourcemap',
  devServer: {
    contentBase: path.join(__dirname, '../dist-example'),
    port: 8889,
    inline: true
  }
}
