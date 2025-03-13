import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import './assets/scss/allStyle.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')