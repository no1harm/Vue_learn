<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>

//引入子组件
import headerVue from '../components/header.vue'
import bodyVue from '../components/body.vue'
import footerVue from '../components/footer.vue'

//引入连接器
import connect from './connector.js'

export default {
    data(){
        return {
           text:'here'
        }
    },
    //声明函数，属于组件对象
    methods:{
        //包含多个函数名做key,函数体做value
        change(){
            this.isRed = !this.isRed;
            this.stus.push(
                {
                    name:'mick',score:'A',
                },
            )
        },
        addStu(){
            this.stus.push({
                name:this.name,
                score:this.score,
            });
            this.name='';
            this.score='';
        },
        del(index){
            this.stus.splice(index,1)
        },
        listen(){
            connect.$on('phone',function(){
                console.log('I got it')
            })
        }
    },
    components:{
        //组件使用，组件调用
        headerVue:headerVue,
        bodyVue:bodyVue,
        footerVue:footerVue
    },
    //组件内过滤器
    filters:{
        myFilter:function(value){
            return value.split('').reverse().join('')
        }
    }
}
</script>
<style>
.red {
    background-color: red;
}
.green {
    background-color: green;
}
.big {
    font-size: 30px;
}
</style>
