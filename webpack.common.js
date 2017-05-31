/**
 * @fileoverview webpack 配置文件
 * @author liyifei<liyifei@le.com>
 * @date 2017/05
 */
var webpack = require('webpack');
var path = require('path');
// plugins
var extractTextPlugin = require('extract-text-webpack-plugin');
var uglifyPlugin = require('uglifyjs-webpack-plugin');
var htmlPlugin = require('html-webpack-plugin');
var inlineManifestPlugin = require('inline-manifest-webpack-plugin');

// 判断开发环境
var env = process.env.NODE_ENV;
var isDev = env !== 'production';
var devPath = './public/dev/';
var distPath = './public/dist/';
var staticPath = isDev ? devPath : distPath;
var publicPath = '/';

var webpackConfig = {
    // 入口
    entry: {
        // 公共类库
        vendor: ['vue'],
        // 业务
        main: [devPath + 'js/main/index.js', 'webpack-hot-middleware/client']
    },
    // 输出
    output: {
        path: path.resolve(__dirname, staticPath),
        publicPath: publicPath,
        filename: isDev ? 'js/[name].js' : 'js/[name].[chunkhash:8].js'
        // chunkFilename: '[name].[chunkhash:8].js'
    },
    // 模块，各种 loaders
    module: {
        rules: [
            // css loader
            // {
            //     test: /\.css$/,
            //     use: extractTextPlugin.extract({
            //         use: {
            //             loader: 'css-loader',
            //             options: {
            //                 minimize: true
            //             }
            //         }
            //     })
            // },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // file loader
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: {
                    loader: 'file-loader?name=[name].[ext]&publicPath=' + publicPath + '&outputPath=images/'
                }
            }
        ]
    },
    // plugins
    plugins: [
        // // 分离 css 文件
        // new extractTextPlugin({
        //     filename: isDev ? 'css/[name].css' : 'css/[name].[contenthash:8].css',
        //     allChunks: true
        // }),

        // 分离公共类库
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest']
        }),
        // manifest 文件内容内联到 html 中
        new inlineManifestPlugin({
            name: 'webpackManifest'
        }),
        // uglifyjs
        // new uglifyPlugin({}),

        // 热替换
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),

        // html 生成
        new htmlPlugin({
            template: devPath + 'index.html'
        })
    ]
};

module.exports = webpackConfig;
