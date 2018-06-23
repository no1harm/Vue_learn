<template>
    <div id="app">
        <toolbar></toolbar>
        <!-- <note-list></note-list> -->
        <editor></editor>
    </div>
</template>

<script>
import Toolbar from './Toolbar.vue'
import NoteList from './NoteList.vue'
import Editor from './Editor.vue'

export default {
    components:{
        Toolbar,
        NoteList,
        Editor
    }
}
</script>

<style>

</style>
