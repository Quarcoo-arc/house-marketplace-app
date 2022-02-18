// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2OyNjMG6IGfIiWYE2DEhcvxNay77S6PM",
  authDomain: "house-marketplace-app-minoq.firebaseapp.com",
  projectId: "house-marketplace-app-minoq",
  storageBucket: "house-marketplace-app-minoq.appspot.com",
  messagingSenderId: "442753246233",
  appId: "1:442753246233:web:1ff23d009c57c4ecf83688",
  measurementId: "G-WMKHNGEMJV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
