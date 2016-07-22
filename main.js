// require('./src/css/style.css');
require('./src/css/main.css');


// var ha=require("./src/js/hah.js");
// ha();
require("./src/js/mousewheel.js");
require("./src/js/fixJquery.js");
require("./src/js/jquery.mCustomScrollbar.min.js");
require('./src/js/jquery.SuperSlide.js');


var commonData=require("./src/js/common.js");
commonData();

// var regCom=require("./src/js/reg_com.js");
// regCom();

var JSonData=require('./src/common/dealer.js');
var baseMarket=require('./src/common/base_market.js');

baseMarket(JSonData);
var wanglinzhizhiTest=require('./src/js/wl.js');

wanglinzhizhiTest();



