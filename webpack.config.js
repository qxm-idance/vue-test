var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer')

var devPath = path.join(__dirname + '/dev/js');
var buildPath = path.join(__dirname + '/build');
var stylePath = path.join(__dirname + '/dev/style');

var ENV = process.env.npm_lifecycle_event;
var isBuild = ENV === 'build';
var isDev = ENV === 'dev';

module.exports = function cfg (){
    var cfg = {};
    cfg.entry = {
        app:path.join(devPath,'index.js')
    }
    cfg.output = {
        path: buildPath,//存放文件的绝对路径
        // buildPath: isBuild ? '' : 'http://192.168.18.240:7000/',//网站运行时的访问路径
        filename: isBuild ? 'js/[name].[chunkhash:8].js' : '[name].bundle.js'
    }
    cfg.module = {
        loaders:[
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel!eslint',
                // make sure to exclude 3rd party code in node_modules
                exclude: /node_modules/
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                loader: 'url',
                query: {
                    // inline files smaller then 10kb as base64 dataURL
                    limit: 10000,
                    // fallback to file-loader with this naming scheme
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract(
                    'css?sourceMap&-minimize!' + 'postcss-loader!' + 'less?sourceMap'
                )
            },
            { 
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    };    
    cfg.postcss = [autoprefixer];
    cfg.plugins = [
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            template:'dev/index.html',
            filename: 'index.html',
            inject:'body'
        }) 
    ]
    return cfg;
}();