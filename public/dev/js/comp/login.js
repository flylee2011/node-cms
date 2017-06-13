// import Vue from 'vue';
// import $ from 'n-zepto';
// import md5 from 'md5';

/* beautify ignore:start */
/* eslint-disable */
// 登录表单模板
var tpl = [
    '<form v-on:submit="onSubmitLogin($event)" class="form-signin">',
        '<h2 class="form-signin-heading">Please sign in</h2>',
        '<label for="inputUsername" class="sr-only">Username</label>',
        '<input id="inputUsername" type="text" v-model="username" class="form-control" placeholder="Enter Username">',
        '<label for="inputPassword" class="sr-only">Password</label>',
        '<input id="inputPassword" type="password" v-model="password" class="form-control" placeholder="Enter Password">',
        '<div class="checkbox">',
            '<label>',
                '<input type="checkbox" value="remember-me"> Remember me',
            '</label>',
        '</div>',
        '<button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>',
    '</form>'
].join('');
/* beautify ignore:end */
/* eslint-disable */

// 登录表单组件
var data = {
    username: '',
    password: ''
};
Vue.component('form-login', {
    template: tpl,
    data: function() {
        return data;
    },
    methods: {
        // 提交登录表单
        onSubmitLogin: function(e) {
            e.preventDefault();
            this.reqLoginApi();
        },
        // 调用登录接口
        reqLoginApi: function() {
            var reqData = {
                username: this.username,
                password: this.password
            };
            $.ajax({
                url: '/api/admin/login',
                type: 'POST',
                dataType: 'json',
                data: reqData,
                success: function(res) {
                    var code = res.code;
                    if (code == 200) {
                        alert('login success');
                    } else {
                        alert('error(' + code + ')');
                    }
                }
            })
        }
    }
});

new Vue({
    el: '#app-admin'
});
