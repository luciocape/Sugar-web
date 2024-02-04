import App from './App.vue'
import router from './Router.js'
import "@/assets/bootstrap.min.css"
import "@/assets/bootstrap.bundle.min.js"
import VueMeta from 'vue-meta'

// Importa la función createApp desde el módulo 'vue'
import { createApp } from 'vue'

createApp(App).use(router).mount('#app')
Vue.use(VueMeta)
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

//notificaciones de firebase
// Importar el SDK de Firebase Cloud Messaging JS





/*
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Inicializar Firebase con tu configuración del proyecto
const firebaseApp = initializeApp({
    apiKey: "AIzaSyBvREK5yVchjb6HCRqLozUdylHRTdualvw",
    authDomain: "sugarcoach-1614000290164.firebaseapp.com",
    databaseURL: "https://sugarcoach-1614000290164-default-rtdb.firebaseio.com",
    projectId: "sugarcoach-1614000290164",
    storageBucket: "sugarcoach-1614000290164.appspot.com",
    messagingSenderId: "341853924281",
    appId: "1:341853924281:web:5eb5fd3d1f010bce19e468",
    measurementId: "G-L24E8QRE2Y"
});

// Recuperar una instancia de Firebase Messaging
const messaging = getMessaging(firebaseApp);

// Solicitar el permiso al usuario para enviar notificaciones
Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
        console.log("Notification permission granted.");
        // Obtener el token de registro del dispositivo
        getToken(messaging, { vapidKey: "AAAAT5gU67k:APA91bE77m6Gjkdoyad-U6vlQWXV2Uy7n_Sisxtt9lt30td-_eox1URMd_QX3ZH7LD3Tn8eNVJmFp0sMuLR8EPrF2I7DRVF8mw_89S_eAniiK2bP4pMY35IDzuaUtNImWo4ZeXEMH8Sd" })
            .then((currentToken) => {
                if (currentToken) {
                    // Enviar el token a tu backend o almacenarlo en una base de datos
                    console.log(currentToken);
                } else {
                    // Mostrar un mensaje de error si no se pudo obtener el token
                    console.log(
                        "No registration token available. Request permission to generate one."
                    );
                }
            })
            .catch((err) => {
                console.log("An error occurred while retrieving token. ", err);
            });
    } else {
        console.log("Unable to get permission to notify.");
    }
});

// Suscribir el dispositivo al topic "noticias"
subscribeToTopic(messaging, "noticias")
    .then((response) => {
        console.log("Subscribed to topic:", response);
    })
    .catch((error) => {
        console.error("Error subscribing to topic:", error);
    });

// Registrar un controlador para recibir los mensajes en primer plano
onMessage(messaging, (payload) => {
    console.log("Message received. ", payload);
    // Mostrar una notificación en pantalla usando la API de Notification
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    };

    new Notification(notificationTitle, notificationOptions);
});
*/
