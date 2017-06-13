/**
 * @fileoverview 接口路由-登录模块
 * @author liyifei<yifei@zoocer.com>
 * @date 2017/05
 */
var express = require('express');
var router = express.Router();
var md5 = require('md5');
var User = require('../../model/user');

// 返回 json
var resJson = {
    code: 500,
    data: null,
    message: 'system error'
};

// 登录接口
router.post('/admin/login', function(req, res) {
    var reqData = {
        username: req.body.username,
        password: md5(req.body.password)
    };
    User.getLoginUser(reqData, function(err, data) {
        resJson.data = data;
        if (data && data.length) {
            resJson.code = 200;
            resJson.message = 'success';
        } else {
            resJson.code = 404;
            resJson.message = 'no user';
        }
        res.send(resJson);
    });
});

module.exports = router;
