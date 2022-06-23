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
import APIkeys from '../components/Users/APIkeys.vue'
import BankAccount from '../components/Users/BankAccount.vue'
import Funding from '../components/Users/Funding.vue'
import Webhook from '../components/Users/Webhook.vue'
import Withdraw from '../components/Users/Withdraw.vue'
import Notification from '../components/Users/Notification.vue'
import BVN from '../components/Users/BVN.vue'
import CreateBusiness from '../components/Users/CreateBusiness.vue'
import Team from '../components/Users/Team.vue'
import VerifyEmail from '../components/Auth/VerifyEmail.vue'
import Roles from '../components/Users/Roles.vue'
import Documents from '../components/Users/Documents.vue'

const history = createWebHistory()
const router = createRouter({
 history,
 linkActiveClass: 'active',
 linkExactActiveClass: 'exact-active',
 routes: [
  { path: '/', name: 'home', component: Home },
  { path: '/login', name: 'login', component: Login },
  { path: '/sign-up', name: 'sign-up', component: SignUp },
  { path: '/forgot-password', name: 'forgot', component: ForgotPassword },
  { path: '/bvn', name: 'bvn', component: BVN },
  { path: '/create-business', name: 'create-business', component: CreateBusiness },
  { path: '/verify-email', component: VerifyEmail, name: 'verify-email' },
  {
   path: '/user',
   component: UserTemplate,
   name: 'user',
   children: [{ path: '/profile', component: Profile, name: 'profile' }],
  },
  {
   path: '/business',
   component: UserTemplate,
   name: 'business',
   children: [
    { path: '/dashboard', component: Dashboard, name: 'dashboard' },
    { path: '/transactions', component: Transactions, name: 'transactions' },
    { path: '/api-keys', component: APIkeys, name: 'api-keys' },
    { path: '/bank-account', component: BankAccount, name: 'bank-account' },
    { path: '/funding', component: Funding, name: 'funding' },
    { path: '/webhook', component: Webhook, name: 'webhook' },
    { path: '/withdraw', component: Withdraw, name: 'withdraw' },
    { path: '/team', component: Team, name: 'team' },
    { path: '/notifications', component: Notification, name: 'notifications' },
    { path: '/roles', component: Roles, name: 'roles' },
    { path: '/documents', component: Documents, name: 'documents' },
   ],
  },
  // { path: '/:pathMatch(.*)*', name: 'login', component: Login }
 ],
})

export default router
