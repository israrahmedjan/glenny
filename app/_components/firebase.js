// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD-N_h8JBXmoxxx8cTQWZQiB0gMOhOXWks",
    authDomain: "online-shop-b6d21.firebaseapp.com",
    databaseURL: "https://online-shop-b6d21-default-rtdb.firebaseio.com",
    projectId: "online-shop-b6d21",
    storageBucket: "online-shop-b6d21.firebasestorage.app",
    messagingSenderId: "804602920917",
    appId: "1:804602920917:web:eaf7f63f562f5465c0075c",
    measurementId: "G-207TG9DHF9"
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
