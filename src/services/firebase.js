const { initializeApp } = require("firebase/app");
const { getFirestore  } = require("firebase/firestore");
const { useNavigate } = require("react-router-dom");

const {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
} = require ("firebase/auth");
const { Route } = require("react-router-dom");
const { modalUnstyledClasses } = require("@mui/material");


const firebaseConfig = {
  apiKey: "AIzaSyBqS_gKkZJIlW4KUdW0x3XFvNBgZuhuQsw",
  authDomain: "react-template-c8bf7.firebaseapp.com",
  projectId: "react-template-c8bf7",
  storageBucket: "react-template-c8bf7.appspot.com",
  messagingSenderId: "327870582787",
  appId: "1:327870582787:web:550f9d61cb735e371efe36",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const provider = new GoogleAuthProvider();
const auth = getAuth();

async function signInWithGoogle() {
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

module.exports = firebaseApp;
module.exports = signInWithGoogle;