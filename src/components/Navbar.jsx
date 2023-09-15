import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import LogOut from "./LogOut";

const style = {
  nav: `bg-slate-300 h-20 flex justify-between items-center p-4 rounded-t-lg`,
  heading: `font-medium text-3xl`,
};

function Navbar() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Super🔥Chat</h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
}

export default Navbar;
