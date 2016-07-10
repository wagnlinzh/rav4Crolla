var webpack=require('webpack');

module.exports = {
  //入口
  entry: './main.js',

  //出口
  output: {
    path: __dirname+'/img', // 输出文件的保存路径
    filename: 'bundle.js', // 输出文件的名称
     publicPath: "./img/"
  },

  //引入模块
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.png$/,
        loader: "file-loader"
      },

      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192'
      }

    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
  ]



};
