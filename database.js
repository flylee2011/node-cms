/**
 * @fileoverview 创建数据库连接池
 * @author liyifei<yifei@zoocer.com>
 * @date 2017/05
 */
var mysql = require('mysql');
var dbConfig = require('./config/database');
var pool = mysql.createPool(dbConfig.develop);

module.exports = pool;
