import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5dNHeRzYVrtcxGwwZcbgA3sM7nm6xMpU",
  authDomain: "airbnb-clone-daa92.firebaseapp.com",
  projectId: "airbnb-clone-daa92",
  storageBucket: "airbnb-clone-daa92.appspot.com",
  messagingSenderId: "969642258940",
  appId: "1:969642258940:web:90b2f087ab1179b03b8279"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  // Auth instance
export const googleProvider = new GoogleAuthProvider();  // Google Auth Provider instance
