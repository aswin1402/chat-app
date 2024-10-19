// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDzhudoUOOmEPV-perKcpkJ1O2BD0fOvXA",
    authDomain: "chat-53636.firebaseapp.com",
    projectId: "chat-53636",
    storageBucket: "chat-53636.appspot.com",
    messagingSenderId: "866546009326",
    appId: "1:866546009326:web:adabaacabd88128c255fff",
    measurementId: "G-BXN4BVY2S8"
  };
  initializeApp(firebaseConfig)
  const auth =getAuth();
  const provider = new GoogleAuthProvider();
  const db =getFirestore()

  export {auth,provider,db};