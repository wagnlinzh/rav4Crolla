// 对于dist 目录,的原则是, 不需要的插件,尽可能的去掉.

var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var DIST_PATH = path.resolve(ROOT_PATH, 'dist');
var HtmlwebpackPlugin = require('html-webpack-plugin');


var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  //入口
  entry:
  {
    bundle: './main.js', //这个里面主要放的是各种css 等样式
  },

  //出口
  output: {
    path: DIST_PATH, // 输出文件的保存路径
    // filename: 'bundle.js', // 输出文件的名称
    filename: '[name].[hash].js',
    // publicPath: "./dist/"
  },


  //引入模块
  module: {

    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        exclude: 'node_modules'
      },

      {
        test: /\.(png|jpg|gif|jpeg)$/,
        loader: 'url-loader?limit=81920&name=./images/[hash].[ext]',
        exclude: 'node_modules'
      },
    
    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=./images/[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],
        exclude: 'node_modules'
    },

      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: 'node_modules'
      },

    ]
  },

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


    new HtmlwebpackPlugin({
      title: 'Ha.html html-webpack-plugin',
      filename: 'ha.html',
      template: "./index.html",
      inject: 'body'
    }),

  ],

};
