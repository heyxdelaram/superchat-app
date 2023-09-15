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
        className="flex justify- center text-white text-lg bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-lg text-white font-bold px-4 py-2 rounded-full hover:from-indigo-500 hover:to-indigo-500"
        onClick={googleSignIn}
      >
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
