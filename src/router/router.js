import { createWebHistory, createRouter } from 'vue-router'

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'

// User
import UserTemplate from '../components/Vendors/UserTemplate.vue'
import VendorDashboard from '../components/Vendors/VendorDashboard.vue'
import VendorProperties from '../components/Vendors/VendorProperties.vue'
import VendorWallet from '../components/Vendors/VendorWallet.vue'
import VendorTransactions from '../components/Vendors/VendorTransactions.vue'
import StaffManagement from '../components/Vendors/StaffManagement.vue'
import VendorSettings from '../components/Vendors/VendorSettings.vue'
// Admin
import AdminTemplate from '../components/Admin/AdminTemplate.vue'
import AdminDashboard from '../components/Admin/AdminDashboard.vue'
import AdminTransactions from '../components/Admin/AdminTransactions.vue'
import AdminStaff from '../components/Admin/AdminStaff.vue'
import AdminSecurity from '../components/Admin/AdminSecurity.vue'

const history = createWebHistory()
const router = createRouter({
 history,
 routes: [
  { path: '/', name: 'home', component: Home },
  { path: '/login', name: 'login', component: Login },
  { path: '/sign-up', name: 'sign-up', component: SignUp },
  {
   path: '/user',
   component: UserTemplate,
   name: 'vendor',
   children: [
    { path: 'dashboard', component: VendorDashboard, name: 'vendor-dashboard' },
    { path: 'properties', component: VendorProperties, name: 'vendor-properties' },
    { path: 'wallet', component: VendorWallet, name: 'vendor-wallet' },
    { path: 'transactions', component: VendorTransactions, name: 'vendor-transactions' },
    { path: 'staff', component: StaffManagement, name: 'vendor-staff' },
    { path: 'settings', component: VendorSettings, name: 'vendor-settings' },
   ],
  },
  {
   path: '/admin',
   component: AdminTemplate,
   name: 'admin',
   children: [
    { path: 'dashboard', component: AdminDashboard, name: 'admin-dashboard' },
    { path: 'transactions', component: AdminTransactions, name: 'admin-transactions' },
    { path: 'staff', component: AdminStaff, name: 'admin-staff' },
    { path: 'security', component: AdminSecurity, name: 'admin-security' },
   ],
  },
  // { path: '/:pathMatch(.*)*', name: 'login', component: Login }
 ],
})

export default router
