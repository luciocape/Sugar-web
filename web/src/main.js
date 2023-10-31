import App from './App.vue'
import router from './Router.js'
import "@/assets/bootstrap.min.css"
import "@/assets/bootstrap.bundle.min.js"
// Importa la función createApp desde el módulo 'vue'
import { createApp } from 'vue'

createApp(App).use(router).mount('#app')

fetch('http://localhost:1337/restaurants', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then(response => response.json())
    .then(data => console.log(data));
