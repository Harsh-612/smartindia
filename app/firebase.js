// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmp5b-s-8il2GSWPQt5tSASoL3j-U4yRI",
  authDomain: "next-auth-7df41.firebaseapp.com",
  projectId: "next-auth-7df41",
  storageBucket: "next-auth-7df41.appspot.com",
  messagingSenderId: "842061653086",
  appId: "1:842061653086:web:d13ba361a7dcdf13db80cf",
  measurementId: "G-ZHGDWBTV0N",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore(app);
