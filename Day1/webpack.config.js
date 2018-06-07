'use strict';
const webpack = require("webpack");
module.exports = {
  context: __dirname + "/src",  //从对应的文件夹开始,__dirname指的是根目录
  entry: {                      //入口
    app: "./app.js",
  },
  output: {                     //出口
    path: __dirname + "/dist",
    filename: "[name].bundle.js",
  },
  module:{
      loaders:[
          {
              test:/\.css$/,
              loader:'style-loader!css-loader',
          },
      ]
  },
  plugins:[
    new htmlWebpackPlugin({
        template:'./src/index.html',
    })
  ]
};