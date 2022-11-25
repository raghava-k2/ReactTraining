import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBkAD43PB5vJKmaNHXZoREh9mtrV_PLs34",
    authDomain: "spring-boot-security-15f6c.firebaseapp.com",
    projectId: "spring-boot-security-15f6c",
    storageBucket: "spring-boot-security-15f6c.appspot.com",
    messagingSenderId: "21198045969",
    appId: "1:21198045969:web:40c94819d49037984d42b0",
    measurementId: "G-XP7479KMYY"
};

const firebaseapp = initializeApp(firebaseConfig);

export default firebaseapp;