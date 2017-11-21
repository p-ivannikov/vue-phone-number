const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const eslintFormatter = require('eslint-friendly-formatter')

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
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../example/index.html'),
            filename: 'index.html'
        })
    ],
    devtool: 'sourcemap',
    devServer: {
        contentBase: path.join(__dirname, '../dist-example'),
        port: 8889,
        inline: true
    }
}
