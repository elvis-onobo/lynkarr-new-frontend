import { createWebHistory, createRouter } from 'vue-router'

import Home from '../components/Home.vue'
import Login from '../components/Auth/Login.vue'
import SignUp from '../components/Auth/SignUp.vue'
import ForgotPassword from '../components/Auth/ForgotPassword.vue'
// User
import UserTemplate from '../components/Users/UserTemplate.vue'
import Dashboard from '../components/Users/Dashboard.vue'
import Transactions from '../components/Users/Transactions.vue'
import UserSettings from '../components/Users/UserSettings.vue'

import ChangeMoney from '../components/Users/ChangeMoney.vue'
import Withdraw from '../components/Users/Withdraw.vue'
import Send from '../components/Users/Send.vue'
import Profile from '../components/Users/Profile.vue'
import Accounts from '../components/Users/Accounts.vue'


const history = createWebHistory()
const router = createRouter({
 history,
 linkActiveClass: "active",
 linkExactActiveClass: "exact-active",
 routes: [
  { path: '/', name: 'home', component: Home },
  { path: '/login', name: 'login', component: Login },
  { path: '/sign-up', name: 'sign-up', component: SignUp },
  { path: '/forgot-password', name: 'forgot', component: ForgotPassword },
  {
   path: '/user',
   component: UserTemplate,
   name: 'user',
   children: [
    { path: 'dashboard', component: Dashboard, name: 'dashboard' },
    { path: 'transactions', component: Transactions, name: 'transactions' },
    { path: 'settings', component: UserSettings, name: 'vendor-settings' },
    { path: 'change-money', component: ChangeMoney, name: 'change-money' },
    { path: 'withdraw', component: Withdraw, name: 'withdraw' },
    { path: 'send', component: Send, name: 'send' },
    { path: 'profile', component: Profile, name: 'profile' },
    { path: 'accounts', component: Accounts, name: 'accounts' },
   ],
  },
  // { path: '/:pathMatch(.*)*', name: 'login', component: Login }
 ],
})

export default router
