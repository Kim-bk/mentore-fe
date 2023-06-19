import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import './assets/css/audio.css'
// import './assets/css/demo.css'
import './assets/css/bootstrap.css'
import './assets/css/main.css'
import './assets/css/responsive.css'
import './assets/css/footer-distributed-with-address-and-phones.css'
import VueSimpleAlert from "vue3-simple-alert";

createApp(App)
.use(VueSimpleAlert)
.use(router)
.mount('#app')


