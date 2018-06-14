'use strict';
const webpack = require("webpack");
const htmlWebpackPlugin = require('html-webpack-plugin') 
const path = require('path')
// const VueLoaderPlugin = require('vue-loader')

module.exports = {
    // context: path.join(__dirname,'src'),  //从对应的文件夹开始,__dirname指的是根目录
    node:{
      fs:"empty"
    },
    // target: 'node',
    entry: {                      //入口
      main: "./src/main.js",
    },
    output: {                     //出口
      path: path.join(__dirname,'dist'), //当前目录的上一级的dist
      filename: "[name].bundle.js",
    },
    module:{
        loaders:[
            {	//解析CSS文件
                test:/\.css$/,
                loader:'style-loader!css-loader!autoprefixer-loader',//顺序是反过来的
            },
            {
              test:/\.less$/,
              loader:'style-loader!css-loader!autoprefixer-loader!less-loader'
            },
            {
              test:/\.(jpg|svg|png|ttf|woff|woff2|gif)$/,
              loader:'url-loader',
              options:{
                limit:4096,//4096字节以上生成文件
                name:'[name].[ext]'
              }
            },
            {	//解析js文件
              test:/\.js$/,
              loader:'babel-loader',
              exclude:/node_modules/,	//把node_modules中的js文件排除
              options:{
                presets:['es2015'],
                plugins:['transform-runtime'],
            }
            },
            {
              //解析Vue
              test:/\.vue$/,
              loader:'vue-loader',
            }
              ]
    },
    plugins:[
		// 插件的执行顺序是依次执行的
      new htmlWebpackPlugin({
          template:'./src/index.html',
	  }),
    ],
    
};