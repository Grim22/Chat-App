

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD9efSjd0XAUo9TvVQm_DUBvBVEl_KawpU",
  authDomain: "convo-7e2d3.firebaseapp.com",
  projectId: "convo-7e2d3",
  storageBucket: "convo-7e2d3.appspot.com",
  messagingSenderId: "634884714517",
  appId: "1:634884714517:web:7b10a1777228b912e75e1c",
  measurementId: "G-DFP0V0NKFD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();