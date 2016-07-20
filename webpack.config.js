var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var DIST_PATH = path.resolve(ROOT_PATH, 'dist');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');


// var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
  //入口
  entry:
  {
    bundle: './main.js', //这个里面主要放的是各种css 等样式
    // jquery:'./js/jquery1.8.3.min.js',
    // supperSlide:'./js/jquery.SuperSlide.js',
    // mScrollbar:'./js/jquery.mCustomScrollbar.min.js',
    // regCom: './js/reg_com.js',
    // common: './js/common.js',

    //  wl:'./js/wl.js', 
    //  has:'./hah.js',
    // market:'./common/base_market.js', 
    // dealer:'./common/dealer.js',
    jquery:'jquery'
  },

  //出口
  output: {
    path: DIST_PATH, // 输出文件的保存路径
    // filename: 'bundle.js', // 输出文件的名称
    filename: '[name].js',
    publicPath: "http://localhost:8080/dist/"
  },

  //enable dev source map
  devtool: 'eval-source-map',
  //enable dev server

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    // contentBase: './dist'
  },

  //引入模块
  module: {

    //  preLoaders: [
    //     {
    //            test: /\.jsx?$/,
    //            loader: 'jshint-loader'
    //     }
    // ],

    loaders: [
      {
        test: /\.css$/,
        // loader: 'style!css',
        loaders: ['style', 'css?sourceMap'],
        exclude: 'node_modules'
      },

      {
        test: /\.(png|jpg|gif|jpeg)$/,
        loader: 'url-loader?limit=81920&name=images/[hash].[ext]',
        exclude: 'node_modules'
      },

      // {
      //   test: /\.jsx?$/,
      //   loader: 'babel',
      //   // include: APP_PATH,
      //   query: {
      //     presets: ['es2015'],
      //   }
      // },

      // {
      //   test: /\.html$/,
      //   loader: 'html-loader',
      //   exclude: 'node_modules'
      // }
    ]
  },

  // resolve:{
  //   extensions:["","js","jsx",".es6","css","scss","png","jpeg","gif","jpg"],
  //   alias:{
  //   }
  // },

  plugins: [

    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),

    //provide $, jQuery and window.jQuery to every script
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),

    new webpack.optimize.CommonsChunkPlugin('jquery', 'jquery.js'),


    // new CommonsChunkPlugin('jquery.js'),

    new HtmlwebpackPlugin({
      title: 'Ha.html-webpack-plugin',
      filename: 'ha.html',
      template: "./index.html",
      inject: 'body',
    }),







    new OpenBrowserPlugin({
      url: 'http://localhost:8080/dist/ha.html',
    }),

   
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  
  ],
  
};
