require('./css/style.css');
require('./css/main.css');


// var ha=require("./hah.js");
// ha();
// require("./js/");
require("./js/mousewheel.js");
require("./js/fixJquery.js");
require("./js/jquery.mCustomScrollbar.min.js");
require('./js/jquery.SuperSlide.js');


var commonData=require("./js/common.js");
commonData();

var regCom=require("./js/reg_com.js");
regCom();

var JSonData=require('./common/dealer.js');
var baseMarket=require('./common/base_market.js');

baseMarket(JSonData);
var wanglinzhizhiTest=require('./js/wl.js');

wanglinzhizhiTest();



