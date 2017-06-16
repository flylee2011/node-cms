# nodejs 网站脚手架

一个通过 nodejs && expressjs && webpack && react(vue) 搭建的网站。

你可以只使用一种语言（Javascript）完成整个网站的搭建！

[English Document](README.md)

---

## 安装说明
```
sudo npm install -g supervisor forever
git clone https://github.com/flylee2011/node-cms.git
cd node-cms
npm install -d
```

## 目录结构
```
├─config # 服务端配置文件，比如数据库配置
├─database # 数据库驱动
│   ├─mysql.js # mysql 驱动
├─model # 数据模型
├─routes # 路由控制器
├─app.js # server 入口
├─public # 前端静态文件
│   ├─dev # 开发环境
│       ├─css
│       ├─js
│       ├─images
│   ├─dist # 生产环境，由 webpack 构建生成，目录结构与 dev 相似
├─webpack.common.js # webpack 配置，通用设置
├─webpack.dev.js # webpack 配置，开发环境
├─webpack.prod.js # webpack 配置，生产环境
├─package.json # npm 依赖，脚本 cli 命令配置
├─.eslintrc.json # eslint 脚本校验配置
```

---

## 特性

* 基于 expressjs 4.x 框架，mysql 数据驱动
* 使用 webpack 构建前端代码
* 开发环境，添加模块热替换（Hot Module Replace），自动刷新 html，方便开发过程

TODO：

~~* 添加打包目录清理插件~~

~~* 添加 html loader~~

~~* 处理图片压缩~~

~~* eslint 插件~~

* 异步打包 && 懒加载

* 支持 ES6

---

## 命令行工具
```
// 启动开发环境, 浏览器访问 localhost:8002
npm run server-dev

// 打包构建前端代码
npm run build

// 启动生产环境, 浏览器访问 localhost:8001
npm run server-dist
```
---

## License

BSD license

---
