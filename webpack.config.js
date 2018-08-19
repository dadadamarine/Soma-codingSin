const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool : 'eval-source-map',
    context : __dirname + '/app',    
    entry : './render.js',
    output : {
        path : __dirname + '/build',
        publicPath: '/',
        filename : 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader : "babel-loader"
            },
            {  
                test : /\.css$/,
                loader : "style-loader!css-loader?modules!postcss-loader"
            },
            { 
                test: /\.(png|jpg|gif|ico)$/, 
                loader: 'file-loader?name=resources/img/[name].[ext]' 
            }
        ]
    },
    plugins : [
        new webpack.BannerPlugin("Copyright Jeon Seung Hoon."),
        new HtmlWebpackPlugin({
            template : __dirname + "/app/tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer : {
        contentBase : "/build",
        port : 8000,
        historyApiFallback : true,
        inline : true,
        hot: true
    }
}