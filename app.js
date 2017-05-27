/**
 * @fileoverview 应用启动入口文件
 * @author liyifei<yifei@zoocer.com>
 * @date 2017/05
 */
// express
var express = require('express');
var bodyParser = require('body-parser');
var login = require('./routes/api/login');
// webpack
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('./webpack.config');

// 判断开发环境
var env = process.argv[2] || process.env.NODE_ENV;
var isDev = (env == 'develop') ? true : false;
// 静态文件目录
var staticDir = isDev ? 'public/dev' : 'public/dist';

var app = express();

// 中间件
if (isDev) {
    // webpack 开发环境
    app.use(webpackDevMiddleware(webpack(webpackConfig), {
        lazy: false,
        publicPath: webpackConfig.output.publicPath,
        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        }
    }));
}
// 解析 body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// 路由
// 静态资源
app.use('/', express.static(staticDir));
// 接口
app.use('/api', login);

// 启动
var server = app.listen(8001, function() {
    // var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening on port ', port);
});
