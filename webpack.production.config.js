const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname + '/app', 
    entry: './render.js',
    output: {
        path: __dirname + '/build',
        filename: '[name]-[hash].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { importLoaders: 1, modules: true } },
                        'postcss-loader'
                    ]
                })
            },
            { 
                test: /\.(png|jpg|gif|ico)$/, 
                loader: 'file-loader?name=resources/img/[name].[ext]' 
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin("Copyright Jeon Seung Hoon."),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/tmpl.html"
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("[name]-[hash].css")
    ]
}