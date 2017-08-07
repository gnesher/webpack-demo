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
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ],
    },
    devServer: {
        contentBase: __dirname + '/src',
    }
}

module.exports = config;