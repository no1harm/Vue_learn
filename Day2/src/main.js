// 引入Vue
import Vue from 'vue';
import App from './app.vue'

//引入子组件对象
import overallVue from '../components/overall.vue'
import subVue from '../components/sub.vue'
Vue.component('overallVue',overallVue)
Vue.component('subVue',subVue)

//创建全局过滤器
Vue.filter('myFilter',function(value){
    return 1
})

// 创建实例
new Vue({
    el:'#app',
    render:function(creater){
       return creater(App)
    }
})