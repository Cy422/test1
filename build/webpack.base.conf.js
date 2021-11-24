// require('./check-versions')()
const path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin')
var projectRoot = path.resolve(__dirname, '../')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/' //静态资源最终访问路径=output.publicPath+资源loader或插件等配置路径
    },
    // resolve: {
    //     alias: {
    //         'vue$': 'vue/dist/vue.js' // 指定真正的vue文件
    //     }
    // },
    // resolveLoader: {
    //     fallback: [path.join(__dirname, '../node_modules')]
    // },
    module: {
        rules: [
            {
                test: /\.vue$/i,
                use: ['vue-loader','style-loader', 'css-loader'],
            },
        ],
    },
    // devtool: 'inline-source-map',
    plugins: [
        // new webpack.ProvidePlugin({
        //     jQuery: "jquery",
        //     $: "jquery"
        // }),
        // new webpack.ProvidePlugin({
        //     ol: "openlayers"
        // }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "index.html", // 要打包输出哪个文件，可以使用相对路径
            filename: "index.html",// 打包输出后该html文件的名称
            chunks: ['manifest', 'vendor'],
        }),
    ],
};
