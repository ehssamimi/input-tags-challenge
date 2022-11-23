import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import makeServer from './Server/server.js'
import 'animate.css';
import './assets/main.scss'
 import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'

const app = createApp(App)
makeServer();
app.use(createPinia())
app.use(Vue3Lottie)

app.mount('#app')
