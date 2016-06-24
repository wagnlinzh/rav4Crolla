console.log("test2 online changes :)");
require('./css/main.css');
require('./css/style.css');

var path=require('path');

// var HtmlwebpackPlugin = require('html-webpack-plugin');

//定义了一些文件夹路径
var ROOT_PATH=path.resolve(__dirname);
var APP_PATH=path.resolve(ROOT_PATH,'app');
var BUILD_PATH=path.resolve(ROOT_PATH,'build');
console.log(APP_PATH);
console.log(ROOT_PATH);
console.log(BUILD_PATH);
