import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import LogOut from "./LogOut";

function Navbar({ children, isDark }) {
  const style = {
    nav: `${
      isDark ? `bg-[#121212] text-white` : `bg-slate-300`
    } h-15 flex justify-between items-center pr-4 pl-6 rounded-full p-5`,
    heading: `font-medium text-3xl`,
  };

  const [user] = useAuthState(auth);
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Chat 💬</h1>
      {children}
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
}

export default Navbar;
