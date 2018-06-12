<template>
    <div>
        Page1 List:
        <ul>
            <li v-for="(stu,index) in stus" :key="index">
                {{ stu.name }}
                <router-link :to="{name:'page2',query:{id:index}}"><button>Detail</button></router-link>
            </li>
        </ul>
        <!-- <button @click="goPage2">To Page2</button> -->
        <router-link :to="{ name :'page1_1'}"><button>Page1-1</button></router-link>
        <router-link :to="{ name :'page1_2'}"><button>Page1-2</button></router-link>
        <router-view></router-view>
        <hr>
        <button @click="goBack">Go Back</button>
        <button @click="goNext">Go Next</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            stus:[
                {name:'Jack'},
                {name:'Jay'},
            ]
        }
    },
    methods:{
        goPage2(){
            this.$router.push({ name:'page2'})
        },
        goBack(){
            this.$router.go(-1)
        },
        goNext(){
            this.$router.go(1)
        }
    }
}
</script>

<style>

</style>
