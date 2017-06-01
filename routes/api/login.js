/**
 * @fileoverview 接口路由-登录模块
 * @author liyifei<yifei@zoocer.com>
 * @date 2017/05
 */
var express = require('express');
var router = express.Router();
var md5 = require('md5');
var User = require('../../model/user');

// 登录接口
router.post('/admin/login', function(req, res) {
    var reqData = {
        email: req.body.username,
        password: md5(req.body.password)
    };
    User.getLoginUser(reqData, function(err, data) {
        console.log('login user', data);
        if (data && data.length) {
            console.log('has user');
        }
        res.send(data);
    });
});

module.exports = router;
