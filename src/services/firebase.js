import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "pti-data.firebaseapp.com",
    projectId: "pti-data",
    storageBucket: "pti-data.appspot.com",
    messagingSenderId: "66483967014",
    appId: "1:66483967014:web:1de492702d4691b18682e7",
    measurementId: "G-4VJB5LMMB9",
};

export const app = initializeApp(firebaseConfig);
