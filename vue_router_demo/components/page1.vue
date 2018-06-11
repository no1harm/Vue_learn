<template>
    <div>
        Page1 List:
        <ul>
            <li v-for="(stu,index) in stus" :key="index">
                {{ stu.name }}
                <router-link :to="{name:'page2',query:{id:index}}"><button>Detail</button></router-link>
            </li>
        </ul>

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
    }
}
</script>

<style>

</style>
