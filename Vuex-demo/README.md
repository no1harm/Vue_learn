# 用Vuex构建一个笔记应用

## 目的：学习Vuex

### 安装项目依赖

- ```nodejs
    npm install\
    webpack webpack-dev-server\
    vue-loader vue-html-loader css-loader vue-style-loader vue-hot-reload-api\
    babel-loader babel-core babel-plugin-transform-runtime babel-preset-es2015\
    babel-runtime@5\
    --save-dev

    npm install vue vuex --save
    ```

### 配置Webpack

- ```javascript
        // webpack.config.js
        module.exports = {
        entry: './main.js',
        output: {
            path: __dirname,
            filename: 'build.js'
        },
        module: {
            loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
            ]
        },
        babel: {
            presets: ['es2015'],
            plugins: ['transform-runtime']
        }
        }
    ```
- `package.json`
    + ```javascript
        "scripts": {
            "dev": "webpack-dev-server --inline --hot",
            "build": "webpack -p"
        }
    ```

### vuex核心

- `./vuex/store.js`
    + `store.js` 里面的状态对象会包含所有应用级别的状态，也就是各个组件需要共享的状态。   
    + ```javascript
        import Vue from 'vue'
        import Vuex from 'vuex'

        Vue.use(Vuex)

        //多个组件共用的状态
        const state = {
        notes: [],
        activeNote: {}
        }

        //共用组件所拥有的方法
        const mutations = {  }

        export default new Vuex.Store({
        state,
        mutations
        })
            ```
- `./vuex/actions`
    + `actions` 是组件内用来分发 mutations 的函数。它们接收 `store` 作为第一个参数
    + ```javascript
        export const addNote = ({ dispatch }) => {
            dispatch('ADD_NOTE')
        }
        ...
        ```
