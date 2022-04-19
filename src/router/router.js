import { createWebHistory, createRouter } from 'vue-router'

import Home from '../components/Home.vue'
import Login from '../components/Auth/Login.vue'
import SignUp from '../components/Auth/SignUp.vue'
import ForgotPassword from '../components/Auth/ForgotPassword.vue'
// User
import UserTemplate from '../components/Users/UserTemplate.vue'
import Dashboard from '../components/Users/Dashboard.vue'
import Profile from '../components/Users/Profile.vue'
import Transactions from '../components/Users/Transactions.vue'

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
    { path: 'profile', component: Profile, name: 'profile' },
    { path: 'transactions', component: Transactions, name: 'transactions' },
   ],
  },
  // { path: '/:pathMatch(.*)*', name: 'login', component: Login }
 ],
})

export default router
