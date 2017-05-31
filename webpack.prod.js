/**
 * @fileoverview webpack 配置文件 - 生产环境
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

var productionConfig = {
    // 入口
    entry: {
        // 公共类库
        vendor: ['vue'],
        // 业务
        main: ['./public/dev/js/main/index.js']
    },
    // 输出
    output: {
        path: path.resolve(__dirname, './public/dist/'),
        publicPath: '/',
        filename: 'js/[name].[chunkhash:8].js'
    },
    // 模块，各种 loaders
    module: {
        rules: [
            // css loader
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    use: {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }
                })
            },
            // file loader
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: {
                    loader: 'file-loader?name=[name].[ext]&publicPath=/&outputPath=images/'
                }
            }
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
        // manifest 文件内容内联到 html 中
        new inlineManifestPlugin({
            name: 'webpackManifest'
        }),
        // uglifyjs
        new uglifyPlugin({}),
        // html 生成
        new htmlPlugin({
            template: './public/dev/index.html'
        })
    ]
};

module.exports = productionConfig;
