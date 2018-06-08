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
                <li v-for="stu in stus" :class="{'A': 'red','B':'green'}[stu.score]">{{ stu.name }}</li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return {
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
