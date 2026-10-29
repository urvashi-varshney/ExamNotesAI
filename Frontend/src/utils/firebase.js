
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "notes-6a150.firebaseapp.com",
  projectId: "notes-6a150",
  storageBucket: "notes-6a150.firebasestorage.app",
  messagingSenderId: "1053924109849",
  appId: "1:1053924109849:web:df72019e9e6aa3bb8b0488"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}