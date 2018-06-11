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
        - 可以设置`scoped`属性，让其只在当前`template`中生效

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
    + `methods`
    + `v-on：事件名 = "表达式||函数名"`绑定事件的方法 
    + `v-for`
        - 可以使用操作数组（item,index）
        - 可以使用操作对象（value，key，index）
- vue component 组件使用
    + 一个组件的data选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝
    + 父子组件/局部注册
        - 父组件中引入子组件`import xx from yy.vue`
        - 父组件声明组件对象`components:{xx:xx}`
        - 父组件中`template`中`<xx></xx>`
    + 全局注册/使用方便，不需要声明
        - 在`main.js`在中引用一次`import xx from yy.vue`
        - 使用`vue.components('组件名','组件对象')`
        - 所有的组件就可以通过组件名直接使用
    + 父组件传值给子组件
        - 父组件设定值 `xx='yy'`
        - 子组件使用`props:['xx']`接收值
    + 父组件和子组件之间的通信
        - 中间通讯器Vuebus建造`connector.js`（个人理解）
            + ```javascript
                import Vue from 'vue'
                var connector = new Vue()
                export default connector
            ```
        - 父组件监听子组件的反馈
            + ```html
                <button @click="listen">listen</button>
                ```
                ```javascript
                //引入连接器
                import connect from './connector.js'
                methods:{
                    listen(){
                        connect.$on('phone',function(msg){
                            console.log(msg)
                        })
                    }
                }
                ```
        - 子组件反馈信息至父组件
            + ```html
                <button @click="callFather">call father</button>
                ```
                ```javascript
                //引入连接器
                import connect from './connector.js'
                methods:{
                    callFather(){
                        //发射信号
                        connect.$emit('phone','64 mins later')
                    }
                }
                ```
## Day2

### vue 过滤器

- 当组件内过滤器命名与全局过滤器命名冲突时，组件内过滤器有效
- 组件内的过滤器
    + `options`中的`filter`属性
        - 多个key就是不同过滤器名，多个value就是与key对应的过滤方式函数体
        + ```html
            <div>Out: {{ text | myFilter }}</div>
            ```
        + ```javascript
          filters:{
              myFilter:function(value){}
          }
          ```

- 全局过滤器
    + `Vue.filter(name,fu)`

### 获取DOM元素

- 和生命周期有关

### mint-ui

### vue-router

- 核心插件
    + `vue-router` 路由
    + `vuex` 管理全局共享数据
- 使用方法
    + `npm i vue-router -S`安装
    + 在`main.js`中引用`Vue-router`
        - `import VueRouter from 'vue-router'`
    + 加载插件 `Vue.use(VueRouter)`
    + 创建路由对象并配置路由规则
        - ```javascript
            const router = new VueRouter({
                routers:[
                    { path:'/home',component:Home }        
                ]
            });
            ```
    + 将其路由对象传递给Vue的实例，在`options`中
        - `router:router`
    + 在`app.vue`中预留位置`<router-view></router-view>`

- 问题
    + `npm run dev`可以运行，但是浏览器F12报错`Uncaught ReferenceError: require is not defined`
        - `webpack.config.js`中设置`electron:false`
            + 但是现在把选项删除了又没有影响了，真坑...