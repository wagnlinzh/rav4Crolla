console.log("test2 online changes :)");
require('./css/style.css');
require('./css/main.css');

// var $=require('jquery');

// var ha=require("./hah.js");
// ha();


// require("./js/fixJquery.js");
// require("./js/jquery.mCustomScrollbar.min.js");
// require('./js/jquery.SuperSlide.js');

// var wanglinzhizhiTest=require('./js/wl.js');
// wanglinzhizhiTest();

import $ from 'jquery';
import a from 'imports?jQuery=jquery!./js/jquery.mCustomScrollbar.min.js';
import b from  'imports?jQuery=jquery!./js/jquery.SuperSlide.js';
import CCC from 'imports?jQuery=jquery!./hah.js'

import  wanglinzhizhiTest from 'imports?jQuery=jquery!./js/wl.js';

wanglinzhizhiTest();
a();
b();
CCC();

// var ha=require("./hah.js");
// ha();




