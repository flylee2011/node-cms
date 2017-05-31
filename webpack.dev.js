/**
 * @fileoverview webpack 配置文件 - 开发环境
 * @author liyifei<liyifei@le.com>
 * @date 2017/05
 */
var webpack = require('webpack');
var path = require('path');
// plugins
var htmlPlugin = require('html-webpack-plugin');
var inlineManifestPlugin = require('inline-manifest-webpack-plugin');

var devConfig = {
    // 入口
    entry: {
        // 公共类库
        vendor: ['vue'],
        // 业务
        main: ['./public/dev/js/main/index.js', 'webpack-hot-middleware/client']
    },
    // 输出
    output: {
        path: path.resolve(__dirname, './public/dev/'),
        publicPath: '/',
        filename: 'js/[name].js'
    },
    // 模块，各种 loaders
    module: {
        rules: [
            // css loader
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
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
        // 分离公共类库
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest']
        }),
        // manifest 文件内容内联到 html 中
        new inlineManifestPlugin({
            name: 'webpackManifest'
        }),
        // 热替换
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // html 生成
        new htmlPlugin({
            template: './public/dev/index.html'
        })
    ]
};

module.exports = devConfig;
