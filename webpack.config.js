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
// var webpackMd5Hash = require('webpack-md5-hash');
// var chunkManifestPlugin = require('chunk-manifest-webpack-plugin');

// 判断开发环境
var env = process.env.NODE_ENV;
var isDev = (env == 'develop') ? true : false;
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
        main: devPath + 'js/main/index.js'
    },
    // 输出
    output: {
        path: path.resolve(__dirname, staticPath),
        publicPath: publicPath,
        filename: isDev ? 'js/[name].js' : 'js/[name].[chunkhash:8].js',
        chunkFilename: '[name].[chunkhash:8].js'
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
            filename: isDev ? 'css/[name].css' : 'css/[name].[contenthash:8].css',
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

        // new webpack.HashedModuleIdsPlugin(),
        // new webpackMd5Hash(),

        // uglifyjs
        new uglifyPlugin({}),
        // html 生成
        new htmlPlugin({
            template: devPath + 'index.html'
        })

    ]
};

module.exports = webpackConfig;
