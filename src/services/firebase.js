import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { Route } from "react-router-dom";
const firebaseConfig = {
  apiKey: "AIzaSyBqS_gKkZJIlW4KUdW0x3XFvNBgZuhuQsw",
  authDomain: "react-template-c8bf7.firebaseapp.com",
  projectId: "react-template-c8bf7",
  storageBucket: "react-template-c8bf7.appspot.com",
  messagingSenderId: "327870582787",
  appId: "1:327870582787:web:550f9d61cb735e371efe36",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export default async function signInWithGoogle() {
  await signInWithPopup(auth, provider)
    .then(async (result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      const register = await fetch("http://localhost:8080/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },  
      body: JSON.stringify({
        username: user.uid
      })
    });
      sessionStorage.setItem("uid", user.uid);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}
