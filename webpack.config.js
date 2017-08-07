const webpack = require('webpack');

const config = {
    context: __dirname + '/src',
    entry: {
        app: './app.js'
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/assets/',
        filename: '[name].bundle.js'
    }
}

module.exports = config;