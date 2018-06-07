// 引入Vue
import Vue from 'vue';
import App from './app.vue'

// 创建实例
new Vue({
    el:'#app',
    render:function(creater){
       return creater(App)
    }
})