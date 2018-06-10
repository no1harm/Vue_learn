<template>
    <div>
        <div>
            This is overall component
            <overall-vue texttwo="props value.2"></overall-vue>
        </div>
        <div>
            This is subvue
            <sub-vue></sub-vue>
            <button @click="listen">listen</button>
        </div>
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
            name:'',
            score:'',
            text:'Here',
            html:`
                <h1>v-html</h1>
                `,
            isIf:true,
            isShow:true,
            isModel:'This is v-model',
            isRed:false,
            stus:[
                {name:'Jack',score:'A'},
                {name:'Jay',score:'B'},
            ]
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
