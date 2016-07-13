var webpack=require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //入口
  entry:
  {
    bundle:'./main.js',
    vendors: './src/js/jquery1.8.3.min.js',
  },

  //出口
  output: {
    path: __dirname+'/dist/', // 输出文件的保存路径
    // filename: 'bundle.js', // 输出文件的名称
    filename:'[name].js',
    publicPath: "./dist/"
  },

  //enable dev source map
  devtool: 'eval-source-map',
  //enable dev server

  //引入模块
  module: {

    loaders: [
      {
        test: /\.css$/,
        loader: ['style','css?sourceMap'],
        include:src
      },

      {
        test: /\.(png|jpg|gif|jpeg)$/,
        loader: 'url-loader?limit=8192&name=./images/[hash].[ext]'
      },

      {
        test: /\.jsx?$/,
        loader: 'babel',
        // include: APP_PATH,
        query: {
          presets: ['es2015'],
        }
      },

      {
        test:/\.html$/,
        loader:'html-loader'
      }
    ]
  },

  plugins: [

    // //provide $, jQuery and window.jQuery to every script
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    // new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    new HtmlwebpackPlugin({
      title: 'Hello Mobile app',
      template: path.resolve(TEM_PATH, 'mobile.html'),
      filename: 'mobile.html'
    }),
  ]



};
