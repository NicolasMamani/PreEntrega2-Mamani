import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVGLzC_aYKcJ3owVB_K_9SLc9eMdKjGno",
  authDomain: "nicocomputacion-7668b.firebaseapp.com",
  projectId: "nicocomputacion-7668b",
  storageBucket: "nicocomputacion-7668b.appspot.com",
  messagingSenderId: "878911020094",
  appId: "1:878911020094:web:cffb323f82257f956e056f",
};

// Inicializamos Firebase con la información sensible de la variable  firebaseConfig
const app = initializeApp(firebaseConfig);
//Ahora accedemos a la base de datos que contiene todos los documentos y luego la exportamos
export const database = getFirestore(app);
