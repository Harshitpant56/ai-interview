// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import  {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCecLWIJ8Ah8t4wJVDKEfIzgNZa-Khk9lQ",
    authDomain: "prepwise-f0398.firebaseapp.com",
    projectId: "prepwise-f0398",
    storageBucket: "prepwise-f0398.firebasestorage.app",
    messagingSenderId: "621415964709",
    appId: "1:621415964709:web:dc44142b590bf1ff67dfcc",
    measurementId: "G-MVJHD4L1XR"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app)