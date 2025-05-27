// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCqRy5cAoQfLIWvE_PVM0MMHh4B1R6nvh8",
  authDomain: "myreactapp02.firebaseapp.com",
  projectId: "myreactapp02",
  storageBucket: "myreactapp02.firebasestorage.app",
  messagingSenderId: "378690235964",
  appId: "1:378690235964:web:ced9011acf716e166e1d39",
  measurementId: "G-C14V8BCT6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getAnalytics(app);
export {firestore};