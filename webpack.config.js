module.exports = {
  entry: './main.js',
  output: {
    path: __dirname+'/img', // 输出文件的保存路径
    filename: 'bundle.js' // 输出文件的名称
  },


  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css',
      },

      {
        test: /\.png$/,
        loader: "file-loader"
      },

      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }

    ]
  },


}
