import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import signInWithGoogle from "../services/firebase";

export default function Login() {
  const navigate = useNavigate();
  async function login() {
    await signInWithGoogle();
    await navigate("/Home");
  }
  return (
    <>
      <div className="d-flex-column">
        <div className="h1 m-10 d-flex justify-center">Welcome to Hop</div>
        <div></div>
        <button className="d-block mt-10 btn btn-dark m-auto" onClick={login}>
          Continue with Google
        </button>
      </div>
    </>
  );
}
