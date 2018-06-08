# Vue学习路径

## Day1

### webpack

- webpack使用
    + 概念
        - 针对所有前端代码的管理工具
    + 安装
        - `npm install webpack -g`全局安装
        - `npm install --save-dev webpack`项目安装
    + 在项目根目录配置`webpack.config.js`
        + ```javascript
            'use strict';
            const webpack = require("webpack");
            module.exports = {
            context: __dirname + "/src",
            entry: {    //入口
                app: "./app.js",
            },
            output: {   //出口
                path: __dirname + "/dist",
                filename: "[name].bundle.js",
            },
            };
            ```
    + 运行`webpack -p` 完成输出(p表示production)
    + 运行`webpack-dev-server` 开发模式

- 自动执行开发
    + 在`package.json`中添加
        - ```javacript
            "dev":".\\node_modules\\.bin\\webpack-dev-server --inline --hot --open",
            "build":"webpack" //打包代码到生产环境目录
            ```
    + `npm run dev`自动执行
    + `npm run build`自动打包

- es6模块
    + `babel`
        - `babel-loader`(内部依赖`babel-core`)

### Vue

- 安装

- Vue单文件(`.vue`)
    + 1.`template`
    + 2.`script`
    + 3.`style` 
        - 可以设置`scoped`属性，让其只在`template`中生效

    + 创建实例
        - `new Vue({})`
- 解决bug
    + `google`
    + 注意格式

- Vue常用指令
    + `v-text`元素的innerText,只能在双标签中使用
    + `v-html`元素的innerHTML,不能包含{{}}
    + `v-if`元素是否移除
    + `v-show`元素是否显示/隐藏
    + `v-model`双向数据绑定
    + `v-bind:`单向数据绑定

