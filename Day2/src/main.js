// 引入Vue
import Vue from 'vue';
import App from './app.vue'
import VueRouter from 'vue-loader'

//引入子组件对象
import overallVue from '../components/overall.vue'
import subVue from '../components/sub.vue'
Vue.component('overallVue',overallVue)
Vue.component('subVue',subVue)

//加载路由插件
Vue.use(VueRouter)
//创建全局过滤器
Vue.filter('myFilter',function(value){
    return 1
})
const router = new VueRouter({
    routers:[
        {
            path:'/sub',component:subVue
        }
    ]
})
// 创建实例
new Vue({
    el:'#app',
    router:router,
    render:function(creater){
       return creater(App)
    }
})

