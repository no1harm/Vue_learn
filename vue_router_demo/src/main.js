import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './app.vue'
import Home from '../components/home.vue'

// 挂载属性
Vue.use(VueRouter)

// 创建路由对象并配置路由规则
let router = new VueRouter({
    //我*&%……*&%*%（……（*……@（……
    //原来这个是routes,不是routers,我说他么的调半天，我&*（%&……￥&￥
    routes:[
        { path:'/home',component:Home }        
    ]
});

new Vue({
    el:'#app',
    router,
    render:c => c(App)
})