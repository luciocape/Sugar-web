import App from './App.vue'
import router from './Router.js'
import "@/assets/bootstrap.min.css"
import "@/assets/bootstrap.bundle.min.js"
// Importa la función createApp desde el módulo 'vue'
import { createApp } from 'vue'

createApp(App).use(router).mount('#app')

firebase.messaging().requestPermission()
    .then(function (token) {
        console.log('Recibido permiso.');
        // En el parámetro "token" tienes el código para poder enviar las notificaciones
    })
    .catch(function (err) {
        console.log('No se ha obtenido permiso', err);
    });
/*
try {
    fetch('http://localhost:1337/api/sugar-premios', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => console.log(data));
}
catch (error){
    console.log(error)
}*/
