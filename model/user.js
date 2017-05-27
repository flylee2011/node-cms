/**
 * @fileoverview 数据模型-用户模块
 * @author liyifei<yifei@zoocer.com>
 * @date 2017/05
 */
var db = require('../database');

var User = {};

// 获取登录用户
User.getLoginUser = function(params, callback) {
    // sql 语句
    var sql = 'SELECT uid, username, email, super FROM cms_manager WHERE email = ? and password = ?';
    db.getConnection(function(err, connection) {
        if (err) {
            callback(err);
            return;
        }
        // 执行
        connection.query(sql, [params.email, params.password], function(err, res) {
            if (err) {
                callback(err);
                return;
            }
            callback(false, res);
        });
    });
};

module.exports = User;
