// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAJ-NiDpP7tX2w_vgTSyt0Hton7sZSv7o",
  authDomain: "netflixgpt-303de.firebaseapp.com",
  projectId: "netflixgpt-303de",
  storageBucket: "netflixgpt-303de.firebasestorage.app",
  messagingSenderId: "839873161135",
  appId: "1:839873161135:web:f3749a9b4b7f931b62715a",
  measurementId: "G-374C9GSEFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();