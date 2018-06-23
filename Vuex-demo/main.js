import Vue from 'vue'
import store from './vuex/store'
import App from './components/app.vue'

new Vue({
    store,//注入到所有子组件
    el:'#app',
    // components:{App},
    render:function(creater){
        return creater(App)
     }
})