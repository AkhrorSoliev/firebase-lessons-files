import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbiFmU0CmI4aqG5eGFWgMt5NHLrd-LX5w",
  authDomain: "mymoney-ace9e.firebaseapp.com",
  projectId: "mymoney-ace9e",
  storageBucket: "mymoney-ace9e.firebasestorage.app",
  messagingSenderId: "270215205270",
  appId: "1:270215205270:web:c72e06f2f8914b1e764db7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// db
export const db = getFirestore(app);

// auth
export const auth = getAuth();
