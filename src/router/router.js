import { createWebHistory, createRouter } from "vue-router";
import Login from '../components/Login.vue'
import AdminTemplate from '../components/AdminTemplate.vue'
import Stats from '../components/Stats/Stats.vue'
import CreateUser from '../components/Users/CreateUser.vue'
import ListUsers from '../components/Users/ListUsers.vue'
import ListBranches from '../components/Branches/ListBranches.vue'
import CreateBranch from '../components/Branches/CreateBranch.vue'
import Dashboard from '../components/Dashboard.vue'
import Adults from '../components/Stats/Adults.vue'
import ChildrenStats from '../components/Stats/ChildrenStats.vue'
import AddStats from '../components/Stats/AddStats.vue'

const history = createWebHistory()
const router = createRouter({
    history,
    routes: [
        { path: '/', name:'login', component: Login},
        { path: '/dashboard', component: Dashboard, name:'dashboard'},
        { path: '/admin', component: AdminTemplate, children: [
            { path: 'stats', component: Stats, name:'stats' },
            { path: 'stats/adults', component: Adults, name:'adults'},
            { path: 'stats/children', component: ChildrenStats, name:'childrenStats'},
            { path: 'list-users', component: ListUsers, name:'listUsers'},
            { path: 'create-user', component: CreateUser, name:'createUser'},
            { path: 'user-management', component: CreateUser, name:'user-management'},
            { path: 'branches', component: ListBranches, name:'branches'},
            { path: 'create-branch', component: CreateBranch, name:'createBranch'},
            { path: 'stats/add', component: AddStats, name:'addStats'},
        ],
        // beforeEnter: (to, from, next) => {
        //     if (localStorage.getItem('token')) {
        //         next()
        //     } else {
        //         next('/')
        //     }
        // }
    },
    // { path: '/:pathMatch(.*)*', name: 'login', component: Login }
    ]
})

export default router