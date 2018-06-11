<template>
    <div>
        <router-link to="/page1"><button>This is Page1</button> </router-link>
        <router-link to="/page2"><button>This is Page2</button></router-link>
        <router-link to="/home"><button>This is Home</button></router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style>

</style>
