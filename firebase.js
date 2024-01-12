// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsX1257Vy3rOda1NMSk-350WTLp_6soVM",
  authDomain: "h0mify.firebaseapp.com",
  projectId: "h0mify",
  storageBucket: "h0mify.appspot.com",
  messagingSenderId: "380561811874",
  appId: "1:380561811874:web:a720a9e10b03e8508f2afb",
  measurementId: "G-QPW230JFS2",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
const analytics = getAnalytics(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
