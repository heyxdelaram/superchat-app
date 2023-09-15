import React from "react";
import Navbar from "./components/Navbar";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";

const style = {
  app: `max-w-[720px] mx-auto text-center `,
  section: `flex flex-col h-[90vh] mt-10 rounded-t-xl`,
};

function App() {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className={style.app}>
      <section className={style.section}>
        {/*Navbar*/}
        <Navbar />
        {/* Chat Component */}
        {user ? <Chat /> : null}
      </section>
    </div>
  );
}

export default App;
