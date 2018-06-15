'use strict'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './app.vue'
import Home from './components/home/home.vue'
import Axios from 'axios'

Vue.use(VueRouter)
Vue.use(Mint)
// Vue.use(Axios)

Vue.prototype.$ajax = Axios;

let router = new VueRouter({
    routes:[
        { path:'/',redirect:{ name : 'home' }},
        { name:'home',path:'/home',component:Home}
    ]
})

new Vue({
    el:'#app',
    router,
    render:c=>c(App)
})