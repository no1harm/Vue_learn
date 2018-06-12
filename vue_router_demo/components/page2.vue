<template>
    <div>
        Page2
        <br>
        <button @click="goBack">Go Back</button>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>

<style>

</style>
