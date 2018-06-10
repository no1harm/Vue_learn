<template>
    <div>
        <h1>header {{ textone }}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return
    },
    props:['textone']
}
</script>

<style scoped>
div {
    background-color: aquamarine
}
</style>
