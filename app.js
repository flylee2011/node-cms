/**
 * @fileoverview 应用启动入口文件
 * @author liyifei<yifei@zoocer.com>
 * @date 2017/05
 */
var http = require('http');
var reload = require('reload');
var browserSync = require('browser-sync').create();
// express
var express = require('express');
var bodyParser = require('body-parser');
// webpack
var webpack = require('webpack');
var webpackConfig = require('./webpack.dev.js');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackCompiler = webpack(webpackConfig);
// 接口
var login = require('./routes/api/login');

// 判断开发环境
var env = process.argv[2] || process.env.NODE_ENV;
var isDev = (env == 'develop') ? true : false;
// 静态文件目录
var staticDir = isDev ? 'public/dev' : 'public/dist';

var app = express();

// 中间件
if (isDev) {
    // webpack 开发环境
    app.use(webpackDevMiddleware(webpackCompiler, {
        publicPath: webpackConfig.output.publicPath,
        noInfo: true
    }));
    // webpack 热替换
    app.use(webpackHotMiddleware(webpackCompiler));
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
// var server = http.createServer(app);
// reload(server, app);
app.listen(8001, function() {
    // var port = server.address().port;
    browserSync.init({
        open: false,
        ui: false,
        notify: false,
        proxy: 'localhost:8001',
        files: ['./public/dev/*.html'],
        port: 8002
    });
    // console.log('Example app listening on port ', port);
});
