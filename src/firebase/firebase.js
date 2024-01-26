// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZUccifAObnnixFQj3OqVzNuCGeCKhryY",
  authDomain: "school-management-a1e2e.firebaseapp.com",
  projectId: "school-management-a1e2e",
  storageBucket: "school-management-a1e2e.appspot.com",
  messagingSenderId: "947178106621",
  appId: "1:947178106621:web:c2818ddbd4feed0a419894",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
