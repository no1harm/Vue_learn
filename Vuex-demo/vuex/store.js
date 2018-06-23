import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//多个组件共用的状态
const state = {
    //包含了NodesList组件要渲染的notes对象
    notes:[],
    //包含当前选中的笔记
    activeNote:{}
}

//共用组件所拥有的方法
const mutations = { 
    //添加新笔记
    ADD_NOTE (state) {
        const newNote = {
            text: 'New note',
            favorite :fals
        }
        state.notes.push(newNote)
        state.activeNote = newNote
    },
    //编辑笔记
    EDIT_NOTE (state,text) {
        state.activeNote.text = text
    },
    //删除笔记
    DELETE_NOTE (state) {
        state.notes.$remove(state.activeNote)
        state.activeNote = state.notes[0]
    },
    //收藏笔记
    TOGGLE_FAVORITE (state) {
        state.activeNote.favorite = !state.activeNote.favorite
    },
    //选中笔记
    SET_ACTIVE_NOTE(state,note) {
        state.activeNote = note
    }
 }

export default new Vuex.Store({
    state,
    mutations
})