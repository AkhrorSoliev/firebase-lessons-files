import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFQ2SdKD90r-IbbdgENu7yC45wdmm4XHw",
  authDomain: "test-app-a591b.firebaseapp.com",
  projectId: "test-app-a591b",
  storageBucket: "test-app-a591b.firebasestorage.app",
  messagingSenderId: "619010028404",
  appId: "1:619010028404:web:b9e5e1e16153b518b53221",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// db
export const db = getFirestore(app);
