// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMF0SmBtenlEQV1B5IaXTdLY00MmbKIGE",
  authDomain: "event-management-35f81.firebaseapp.com",
  projectId: "event-management-35f81",
  storageBucket: "event-management-35f81.appspot.com",
  messagingSenderId: "197802293201",
  appId: "1:197802293201:web:039ea6c00707134faa52f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
