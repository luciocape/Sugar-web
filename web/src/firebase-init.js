// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvREK5yVchjb6HCRqLozUdylHRTdualvw",
    authDomain: "sugarcoach-1614000290164.firebaseapp.com",
    databaseURL: "https://sugarcoach-1614000290164-default-rtdb.firebaseio.com",
    projectId: "sugarcoach-1614000290164",
    storageBucket: "sugarcoach-1614000290164.appspot.com",
    messagingSenderId: "341853924281",
    appId: "1:341853924281:web:5eb5fd3d1f010bce19e468",
    measurementId: "G-L24E8QRE2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db}