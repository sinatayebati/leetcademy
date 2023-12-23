// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn3S-w0GD-bI__XPgqdYqr27uMGuabNiE",
  authDomain: "leetcademy.firebaseapp.com",
  projectId: "leetcademy",
  storageBucket: "leetcademy.appspot.com",
  messagingSenderId: "606428049036",
  appId: "1:606428049036:web:9a4af40142e24abf6215a9",
  measurementId: "G-7DVP6CM5ZM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);