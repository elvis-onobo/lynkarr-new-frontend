import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/Home.vue'
import UsersTemplate from '../components/Users/UsersTemplate.vue'
import Dashboard from '../components/Users/Dashboard.vue'
import Properties from '../components/Users/Properties.vue'
import MyAssets from '../components/Users/MyAssets.vue'
import Transactions from '../components/Users/Transactions.vue'
import Settings from '../components/Users/Settings.vue'
import SetupPlan from '../components/Users/Plans/SetupPlan.vue'
import VendorTemplate from '../components/Vendors/VendorTemplate.vue'
import VendorDashboard from '../components/Vendors/VendorDashboard.vue'
import VendorProperties from '../components/Vendors/VendorProperties.vue'
import VendorWallet from '../components/Vendors/VendorWallet.vue'
import VendorTransactions from '../components/Vendors/VendorTransactions.vue'

const history = createWebHistory()
const router = createRouter({
    history,
    routes: [
        { path: '/', name:'home', component: Home},
        { path: '/user', component: UsersTemplate, name: 'users-template', children: [
            { path: 'dashboard', component: Dashboard, name:'dashboard'},
            { path: 'properties', component: Properties, name:'properties'},
            { path: 'my-assets', component: MyAssets, name:'my-assets'},
            { path: 'transactions', component: Transactions, name:'transactions'},
            { path: 'settings', component: Settings, name:'settings'},
            { path: 'setup-plan', component: SetupPlan, name:'setup-plan'},
        ],
        // beforeEnter: (to, from, next) => {
        //     if (localStorage.getItem('token')) {
        //         next()
        //     } else {
        //         next('/')
        //     }
        // }
    },
    { path: '/vendor', component: VendorTemplate, name: 'vendor', children: [
        { path: 'dashboard', component: VendorDashboard, name:'vendor-dashboard'},
        { path: 'properties', component: VendorProperties, name:'vendor-properties'},
        { path: 'wallet', component: VendorWallet, name:'vendor-wallet'},
        { path: 'transactions', component: Transactions, name:'vendor-transactions'}
    ]}
    // { path: '/:pathMatch(.*)*', name: 'login', component: Login }
    ]
})

export default router