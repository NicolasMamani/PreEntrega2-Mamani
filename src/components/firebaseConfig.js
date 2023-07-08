// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVGLzC_aYKcJ3owVB_K_9SLc9eMdKjGno",
  authDomain: "nicocomputacion-7668b.firebaseapp.com",
  projectId: "nicocomputacion-7668b",
  storageBucket: "nicocomputacion-7668b.appspot.com",
  messagingSenderId: "878911020094",
  appId: "1:878911020094:web:cffb323f82257f956e056f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
