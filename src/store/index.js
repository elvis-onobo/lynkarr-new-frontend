import {HTTP} from '../axios-config'
import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    state: {
        user: {},
        role: {},
        token: '',
        churchId: '',
        selectedPage: ''
    },
    mutations: {
        formatUserData(state, data){
            state.user = data.user
            state.role = data.user.userRole
            state.token = data.token.token
            state.churchId = data.user.church_center_id
        },
        selectedPage(state, page){
            state.selectedPage = page
        }
    },
    actions: {
    },
    getters: {
        // user: (state)=>{
        //     return state.user
        // },
        // role: (state)=>{
        //     return state.role
        // },
        // token: (state)=>{
        //     return state.token
        // },
        // churchId: (state)=>{
        //     return state.churchUuid
        // },
    },
    plugins: [createPersistedState()],

})

export default store