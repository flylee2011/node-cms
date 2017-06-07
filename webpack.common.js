/**
 * @fileoverview webpack 通用配置
 * @author liyifei<liyifei@le.com>
 * @date 2017/05
 */
var commonConfig = {
    publicPath: '/',
    // 开发目录
    devPath: './public/dev/',
    // 发布目录
    distPath: './public/dist/',
    // 图片相对路径
    imgPath: 'images/',
    // 图片转 base64 最大文件大小，<10k 的图片转 base64
    imgMaxSize: 10 * 1000
};

// 入口
commonConfig.entry = {
    // 公共类库
    vendor: ['vue'],
    // 业务
    page: commonConfig.devPath + 'js/page/index.js'
};

module.exports = commonConfig;
