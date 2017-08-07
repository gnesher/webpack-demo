const webpack = require('webpack');

const config = {
    context: __dirname + '/src',
    entry: {
        app: './app.js'
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/src',
    }
}

module.exports = config;