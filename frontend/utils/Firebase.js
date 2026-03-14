import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "loginonecart-1da20.firebaseapp.com",
  projectId: "loginonecart-1da20",
  storageBucket: "loginonecart-1da20.firebasestorage.app",
  messagingSenderId: "336049705342",
  appId: "1:336049705342:web:e3e6eab99253d91328e32f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new  GoogleAuthProvider();

export { auth, provider };