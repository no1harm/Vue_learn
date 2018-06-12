import Vue from 'vue'
import VueRouter from 'vue-router'

//主体
import App from './app.vue'
//路由切换页面
import Home from '../components/home.vue'
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import page1 from '../components/page1.vue'
import page2 from '../components/page2.vue'

// 引入子路由
import page1_1 from '../components/page1_1.vue'
import page1_2 from '../components/page1_2.vue'

Vue.component('headerVue',Header)
Vue.component('footerVue',Footer)
// 挂载属性
Vue.use(VueRouter)

// 创建路由对象并配置路由规则
let router = new VueRouter({
    //我*&%……*&%*%（……（*……@（……
    //原来这个是routes,不是routers,我说他么的调半天，我&*（%&……￥&￥
    routes:[
        // 重定向
        { path:'/',redirect:'/home'},
        { name:'home', path:'/home',component:Home },   
        // 嵌套路由     
        { name:'page1', path:'/page1',component:page1,children:[
            {name:'page1_1',path:'page1_1',component:page1_1},
            {name:'page1_2',path:'page1_2',component:page1_2},
        ]},        
        { name:'page2', path:'/page2',component:page2 },        
    ]
});

new Vue({
    el:'#app',
    router,
    render:c => c(App)
})