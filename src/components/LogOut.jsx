import React from "react";
import { auth } from "../firebase";

function LogOut() {
  const signOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <button
        className="bg-gray-200 px-4 py-2 hover:bg-gray-100"
        onClick={() => auth.signOut()}
      >
        Log Out
      </button>
    </div>
  );
}

export default LogOut;
