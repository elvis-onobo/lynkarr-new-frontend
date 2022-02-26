import { createWebHistory, createRouter } from "vue-router";
import LandingPage from '../components/LandingPage.vue'
import AdminTemplate from '../components/AdminTemplate.vue'
import Stats from '../components/Stats.vue'
import CreateUser from '../components/Users/CreateUser.vue'
import ListBranches from '../components/Branches/ListBranches.vue'
import CreateBranch from '../components/Branches/CreateBranch.vue'

const history = createWebHistory()
const router = createRouter({
    history,
    routes: [
        { path: '/', component: LandingPage},
        { path: '/admin', component: AdminTemplate, children: [
            { path: 'stats', component: Stats, name:'stats'},
            { path: 'user-management', component: CreateUser, name:'user-management'},
            { path: 'branches', component: ListBranches, name:'branches'},
            { path: 'create-branch', component: CreateBranch, name:'createBranch'},
        ]},
    ]
})

export default router