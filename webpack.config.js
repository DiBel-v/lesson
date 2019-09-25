const path = require('path');
const MiniCssExctractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                exclude: /node-modules/,
                use: ['style-loader', MiniCssExctractPlugin.loader, 'css-loader'],
            },
        ],
    },
    plugins: [
        new MiniCssExctractPlugin({
            filename: 'style.css',
        }),
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html' 
        })
    ],
}