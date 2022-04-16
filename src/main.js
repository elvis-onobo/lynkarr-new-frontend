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
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import {Vue3ProgressPlugin} from '@marcoschulte/vue3-progress';
import '@marcoschulte/vue3-progress/dist/index.css'
import store from './store/index'


library.add(fas)

// sweet alert button colour config
const options = {
  confirmButtonColor: '#3684a7',
  cancelButtonColor: '#EA5933',
};

Chartkick.options = {
  colors: ["#3684a7", "#8D7CFF"]
}

createApp(App)
.use(router)
.use(VueSweetalert2, options)
.use(VueChartkick)
.use(VueToast, {
  position: 'top',
  dismissible: true,
})
.use(store)
.use(Vue3ProgressPlugin)
.component('fa', FontAwesomeIcon)
.mount('#app')
