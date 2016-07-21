// 对于dist 目录,的原则是, 不需要的插件,尽可能的去掉.
//todo : 图片压缩的 解决方法 亦或是,现在已经是最优的情况了?

var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var DIST_PATH = path.resolve(ROOT_PATH, 'dist');
var HtmlwebpackPlugin = require('html-webpack-plugin');


var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  //入口
  entry: {
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

    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css'],
      exclude: 'node_modules',
      // include: __dirname + '/src',
    },

      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   loaders: [
      //     'file?name=./images/[hash].[ext]',
      //     'image-webpack?bypassOnDebug&optimizationLevel=2&interlaced=false'
      //   ],
      //   exclude: 'node_modules'
      // },

      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   loader: 'url-loader?limit=8192&name=./images/[hash].[ext]',
      //   exclude: 'node_modules'
      //   // include: __dirname + '/src',
      // },

      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   loader: 'url?limit=10000&name=./images/[hash].[ext]!img?minimize',
      //   exclude: 'node_modules'

      // },

      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   loaders: [
      //     'url?limit=41960&name=./images/[hash].[ext]',
      //     'img-loader?optimizationLevel=7&progressive=true'
      //     ],
      //   exclude: 'node_modules'
      // },

        {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url?limit=41960&name=./images/[hash].[ext]',
          'img-loader?minimize'
          ],
        exclude: 'node_modules'
      },

      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: 'node_modules'
        // include: './src',
      },

    ]
  },

 imagemin: {
    gifsicle: { interlaced: false },
    jpegtran: {
      progressive: true,
      arithmetic: false
    },
    optipng: { optimizationLevel: 5 },
    pngquant: {
      floyd: 0.5,
      speed: 2
    },
    svgo: {
      plugins: [
        { removeTitle: true },
        { convertPathData: false }
      ]
    }
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
      template: "./src/index.html",
      inject: 'body'
    }),

  ],

};