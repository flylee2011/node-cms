/**
 * @fileoverview js入口
 * @author liyifei<yifei@zoocer.com>
 * @date 2017/05
 */
// 热替换
if (module.hot) {
    module.hot.accept();
}

require('../../css/index.css');
require('vue');
require('../mods/module1.js');

console.log('main/index.js, test 1');

document.getElementById('img').style.display = 'none';
