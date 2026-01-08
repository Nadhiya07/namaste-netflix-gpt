// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5gn36fhBCBUzDvRxycaSqux0dotsq70o",
  authDomain: "netflixgpt-6db7c.firebaseapp.com",
  projectId: "netflixgpt-6db7c",
  storageBucket: "netflixgpt-6db7c.firebasestorage.app",
  messagingSenderId: "803337596970",
  appId: "1:803337596970:web:9515007efcb41c5a821353",
  measurementId: "G-J8Y5EGJJRC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
