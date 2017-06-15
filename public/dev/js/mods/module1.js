console.log('mods/module1.js');

// 操作 dom
var imgNode = document.getElementById('img');
if (imgNode) {
    imgNode.style.display = 'none';
}

// 渲染 dom
var renderBox = $('#render-box');
var imgKiss = require('../../images/kiss.gif');
renderBox.html($('<img src="' + imgKiss + '">'));
