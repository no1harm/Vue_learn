<template>
    <div>
        <pre>
            v-text 
            v-html
            v-if
            v-show
            v-model
        </pre>
        <div>
            This is v-text : <span v-text="text"></span>
        </div>
        <hr>
        <div>
            This is v-html : <span v-html="html"></span>
        </div>
        <hr>
        <div>
            This is v-if : 
            <div v-if = "isIf" style="height:100px;background-color:yellow;"></div>
        </div>
        <hr>
        <div>
            This is v-show : 
            <div v-show = "isShow"style="height:100px;background-color:black;"></div>
        </div>
        <hr>
        <div>
            This is v-model :
            <h3>{{ isModel }}</h3>
            <input type="text" v-model="isModel">
            <hr>
            <input type="text" v-bind:value="isModel">
        </div>
        <hr>
        <div v-bind:class="isRed?'red':'green'">v-bind:one class</div>
        <div :class="{'red':true,'big':true,}">v-bind:many class</div>
        <hr>
        <div>
            <ul>
                <li v-for="(stu,index) in stus" :class="{'A': 'red','B':'green'}[stu.score]" :key="index"> {{ stu.name }}
                    <button @click="del(index)">删除</button>
                </li>
            </ul>
            <button v-on:click="isRed = !isRed">Click Me</button>
            <button @click="change">Click Me Again</button>
            <input type="text" name="" v-model="name">
            <input type="text" name="" v-model="score">
            <button @click="addStu">ADD STUDENT</button>
        </div>
        <hr>
        <div>
            This is component
            <header-vue textone='props value'></header-vue>
            <body-vue></body-vue>
            <footer-vue></footer-vue>
        </div>
        <div>
            This is overall component
            <overall-vue></overall-vue>
        </div>
    </div>
</template>

<script>

//引入子组件
import headerVue from '../components/header.vue'
import bodyVue from '../components/body.vue'
import footerVue from '../components/footer.vue'

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
