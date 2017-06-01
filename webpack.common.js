/**
 * @fileoverview webpack 通用配置
 * @author liyifei<liyifei@le.com>
 * @date 2017/05
 */
// var webpack = require('webpack');
// var path = require('path');

var commonConfig = {
    publicPath: '/',
    // 开发目录
    devPath: './public/dev/',
    // 发布目录
    distPath: './public/dist/',
    // 图片相对路径
    imgPath: 'images/'
};

// 入口
commonConfig.entry = {
    // 公共类库
    vendor: ['vue'],
    // 业务
    page: commonConfig.devPath + 'js/page/index.js'
};

// // 开发环境
// // 入口
// commonConfig.devEntry = {
//     // 公共类库
//     vendor: ['vue'],
//     // 业务
//     page: [commonConfig.devPath + '/js/page/index.js', 'webpack-hot-middleware/client']
// };
// // 输出
// commonConfig.devOutput = {
//     path: path.resolve(__dirname, commonConfig.devPath),
//     publicPath: commonConfig.publicPath,
//     filename: 'js/[name].js'
// };

// // 发布环境
// // 入口
// commonConfig.distEntry = {
//     // 公共类库
//     vendor: ['vue'],
//     // 业务
//     page: commonConfig.devPath + '/js/page/index.js'
// };

// // loaders
// commonConfig.loaders = {
//     // file loader
//     fileLoader: {
//         test: /\.(png|jpg|gif|svg)$/,
//         use: {
//             loader: 'file-loader?name=[name].[ext]&publicPath=' + commonConfig.publicPath + '&outputPath=' + commonConfig.imgPath
//         }
//     },
//     // css loader
//     devCSSLoader: {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader']
//     },
//     distCSSLoader: {
//         test: /\.css$/,
//         use: extractTextPlugin.extract({
//             use: {
//                 loader: 'css-loader',
//                 options: {
//                     minimize: true
//                 }
//             }
//         })
//     }
// };
// // plugins
// commonConfig.plugins = {
//     // 分离公共类库
//     commonChunk: new webpack.optimize.CommonsChunkPlugin({
//         name: ['vendor', 'manifest']
//     }),
//     // manifest 文件内容内联到 html 中
//     inlineManifest: new inlineManifestPlugin({
//         name: 'webpackManifest'
//     })
// };

console.log(commonConfig);
module.exports = commonConfig;
