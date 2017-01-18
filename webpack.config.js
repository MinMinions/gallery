var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: path.resolve(__dirname, './src/index.js'),
    entry: {
        app: ['./src/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'A beautiful gallery'
    })]
};