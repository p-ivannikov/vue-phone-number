const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

let config = merge({
    watch: true
}, baseConfig)

module.exports = config
