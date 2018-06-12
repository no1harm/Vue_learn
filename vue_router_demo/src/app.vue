<template>
    <div>
        <!-- <router-link to="/page1"><button>This is Page1</button> </router-link>
        <router-link to="/page2"><button>This is Page2</button></router-link>
        <router-link to="/home"><button>This is Home</button></router-link> -->
        <header-vue></header-vue>
        <button @click="goPage1">To Page1</button>
        <button @click="goPage2">To Page2</button>
        <router-view></router-view>
        <footer-vue></footer-vue>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        goPage1(){
            this.$router.push('/page1')
        },
        goPage2(){
            this.$router.push('/page2')
        }
    }
}
</script>

<style>

</style>
