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
require('../mods/root.js');

console.log('main/index.js, test 1');
