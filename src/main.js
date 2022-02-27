import { createApp } from 'vue'
import router from './router/router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import './tailwind.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

library.add(fas)

// sweet alert button colour config
const options = {
    confirmButtonColor: '#4B5563',
    cancelButtonColor: '#EA5933',
  };

createApp(App)
.use(router)
.use(VueSweetalert2, options)
.use(VueChartkick)
.component('fa', FontAwesomeIcon)
.mount('#app')
