// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA_8XYShzHn5OW3owBrZvmk_NMmxWZEAk",
  authDomain: "repractise-5c67b.firebaseapp.com",
  projectId: "repractise-5c67b",
  storageBucket: "repractise-5c67b.appspot.com",
  messagingSenderId: "689469582133",
  appId: "1:689469582133:web:b746b94ad43720a889ba7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;