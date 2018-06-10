<template>
    <div>
        <h1>subvue</h1>
        <button @click="callFather">call father</button>
    </div>
</template>

<script>
import connect from '../src/connector.js'
export default {
    data(){
        return
    },
    methods:{
        callFather(){
            //发射信号
            connect.$emit('phone','64 mins later')
        }
    }
}
</script>

<style scoped>
div {
    background-color:orange;
}
</style>
