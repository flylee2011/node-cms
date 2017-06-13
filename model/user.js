/**
 * @fileoverview 数据模型-用户模块
 * @author liyifei<yifei@zoocer.com>
 * @date 2017/05
 */
var db = require('../database/mysql');

var User = {};

// 获取登录用户
User.getLoginUser = function(params, callback) {
    // sql 语句
    var sql = 'SELECT id, username FROM zc_demo_admin_user WHERE username = ? and password = ?';
    db.getConnection(function(err, connection) {
        if (err) {
            callback(err);
            return;
        }
        // 执行
        connection.query(sql, [params.username, params.password], function(err, res) {
            if (err) {
                callback(err);
                return;
            }
            callback(false, res);
        });
    });
};

module.exports = User;
