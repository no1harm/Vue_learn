<template>
    <div>
        <router-link :to="{name:'home'}"><button>Home</button></router-link>
        <router-link :to="{name:'page1'}"><button>Page1</button></router-link>
        
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped>
div{
    height: 100px;
    background-color: brown;
}
</style>
