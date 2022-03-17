import { createWebHistory, createRouter } from "vue-router";
import Login from '../components/Login.vue'
import UsersTemplate from '../components/Users/UsersTemplate.vue'
import Dashboard from '../components/Users/Dashboard.vue'
import Properties from '../components/Users/Properties.vue'
import MyAssets from '../components/Users/MyAssets.vue'
import Accounts from '../components/Users/Accounts.vue'

const history = createWebHistory()
const router = createRouter({
    history,
    routes: [
        { path: '/', name:'login', component: Login},
        { path: '/users', component: UsersTemplate, name: 'users-template', children: [
            { path: 'dashboard', component: Dashboard, name:'dashboard'},
            { path: 'properties', component: Properties, name:'properties'},
            { path: 'my-assets', component: MyAssets, name:'myAssets'},
            { path: 'accounts', component: Accounts, name:'accounts'},
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