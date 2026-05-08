// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR5frcCRh3kgcVdAvzw-42wXbTp_OqX9s",
  authDomain: "meu-app-sexta.firebaseapp.com",
  projectId: "meu-app-sexta",
  storageBucket: "meu-app-sexta.firebasestorage.app",
  messagingSenderId: "573996073145",
  appId: "1:573996073145:web:929cbe1677a3faa68f1b68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const autenticacao = getAuth(app);

export { autenticacao };