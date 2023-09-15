import React from "react";
import { auth } from "../firebase";

function LogOut() {
  const signOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <button
        className="bg-gradient-to-r from-cyan-500 to-blue-500 text-lg text-white font-bold px-4 py-2 rounded-full hover:from-indigo-500 hover:to-indigo-500"
        onClick={() => auth.signOut()}
      >
        Log Out
      </button>
    </div>
  );
}

export default LogOut;
