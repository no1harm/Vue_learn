<template>
    <div>
        Peoples : <input type="text" v-model="peopleNum">
        <br>
        Price : <input type="text" v-model="peoplePri">
        <br>
        Totally : {{ totally }}
    </div>
</template>

<script>
export default {
    data(){
        return{
            peopleNum:0,
            peoplePri:0,
        }
    },
    watch:{
        //普通变量监视
        peopleNum:function(newVul,oldVul){
            console.log(newVul,oldVul)
        },
        peoplePri:function(newVul,oldVul){
            console.log(newVul,oldVul)
        },
        //深度监视
        someDeepWatch: {
        handler: function (val, oldVal) { /* ... */ },
        deep: true
        },
    },
    // 计算属性
    computed:{
        totally:function(){
            return this.peopleNum * this.peoplePri
        }
    }
}
</script>

<style scoped>
div {
    height: 300px;
    background-color: rgb(206, 109, 64);
}
</style>
