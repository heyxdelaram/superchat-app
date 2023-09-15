import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

const SignIn = () => {
  return (
    <div>
      <button
        className="flex justify- center text-white text-lg"
        onClick={googleSignIn}
      >
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
