// 引入Vue
import Vue from 'vue';
import App from './app.vue'

//引入子组件对象
import overallVue from '../components/overall.vue'
Vue.component('overallVue',overallVue)

// 创建实例
new Vue({
    el:'#app',
    render:function(creater){
       return creater(App)
    }
})