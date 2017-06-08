/**
 * @fileoverview webpack 配置文件 - 生产环境
 * @author liyifei<liyifei@le.com>
 * @date 2017/05
 */
var webpack = require('webpack');
var path = require('path');
// 通用配置
var commonConfig = require('./webpack.common.js');
// plugins
var extractTextPlugin = require('extract-text-webpack-plugin');
var uglifyPlugin = require('uglifyjs-webpack-plugin');
var htmlPlugin = require('html-webpack-plugin');
var inlineManifestPlugin = require('inline-manifest-webpack-plugin');
var cleanPlugin = require('clean-webpack-plugin');

var productionConfig = {
    // 入口
    entry: {
        // 公共类库
        vendor: commonConfig.entry.vendor,
        // 业务
        page: commonConfig.entry.page
    },
    // 输出
    output: {
        path: path.resolve(__dirname, commonConfig.distPath),
        publicPath: commonConfig.publicPath,
        filename: 'js/[name].[chunkhash:8].js'
    },
    // 模块，各种 loaders
    module: {
        rules: [
            // css loader
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }]
                })
            },
            // url loader
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: commonConfig.publicPath,
                        outputPath: commonConfig.imgPath,
                        limit: commonConfig.imgMaxSize
                    }
                }]
            },
            // html loader
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                        attrs: ['img:src']
                    }
                }]
            }
            // // html-withimg-loader
            // {
            //     test: /\.html$/,
            //     use: [{
            //         loader: 'html-withimg-loader',
            //         options: {
            //             min: false
            //         }
            //     }]
            // }
        ]
    },
    // plugins
    plugins: [
        // 分离 css 文件
        new extractTextPlugin({
            filename: 'css/[name].[contenthash:8].css',
            allChunks: true
        }),
        // 分离公共类库
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest']
        }),
        // // manifest 文件内容内联到 html 中
        // new inlineManifestPlugin({
        //     name: 'webpackManifest'
        // }),
        // uglifyjs
        new uglifyPlugin(),
        // 清理发布目录
        new cleanPlugin(commonConfig.distPath),
        // html 生成
        new htmlPlugin({
            template: commonConfig.devPath + 'index.html'
        })
    ]
};

module.exports = productionConfig;
