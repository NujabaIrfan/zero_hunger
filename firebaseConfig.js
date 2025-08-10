// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBUOXWRGsdA0XEYgNQK35W-C-JPyIynJ0c",
  authDomain: "foodrescue-d889c.firebaseapp.com",
  projectId: "foodrescue-d889c",
  storageBucket: "foodrescue-d889c.firebasestorage.app",
  messagingSenderId: "539694017488",
  appId: "1:539694017488:web:083217c6c45e82ec43a7d5",
  measurementId: "G-LBP7QDK60W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);