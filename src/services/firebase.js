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
import { modalUnstyledClasses } from "@mui/material";
const firebaseConfig = {
  apiKey: 'AIzaSyDW1d2Hg1isvOq-5HDe-hdXFfud5qngXO8',
  authDomain: 'hop2-0.firebaseapp.com',
  projectId: 'hop2-0',
  storageBucket: 'hop2-0.appspot.com',
  messagingSenderId: '710280260317',
  appId: '1:710280260317:web:c64d3243ac298081978934'
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export default async function signInWithGoogle() {
  await signInWithPopup(auth, provider)
    .then(async (result) => {
      console.log("Google Login Running");
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log("Google Login Result");
      console.log(credential.accessToken);
      console.log(result);
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
      console.log(error.code);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}

