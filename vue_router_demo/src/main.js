import Vue from 'vue'
import VueRouter from 'vue-router'

//主体
import App from './app.vue'
//路由切换页面
import Home from '../components/home.vue'
import page1 from '../components/page1.vue'
import page2 from '../components/page2.vue'

// 挂载属性
Vue.use(VueRouter)

// 创建路由对象并配置路由规则
let router = new VueRouter({
    //我*&%……*&%*%（……（*……@（……
    //原来这个是routes,不是routers,我说他么的调半天，我&*（%&……￥&￥
    routes:[
        { name:'home', path:'/home',component:Home },        
        { name:'page1', path:'/page1',component:page1 },        
        { name:'page2', path:'/page2',component:page2 },        
    ]
});

new Vue({
    el:'#app',
    router,
    render:c => c(App)
})