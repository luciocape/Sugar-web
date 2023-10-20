import App from './App.vue'
import router from './Router.js'
import "@/assets/bootstrap.min.css"
import "@/assets/bootstrap.bundle.min.js"
// Importa la función createApp desde el módulo 'vue'
import { createApp } from 'vue'

createApp(App).use(router).mount('#app')