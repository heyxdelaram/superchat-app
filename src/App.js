import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";
import moon from "./assests/moon.svg";
import sun from "./assests/sun.svg";

function App() {
  const [user] = useAuthState(auth);
  const [isDark, setIsDark] = useState(false);

  const style = {
    app: `max-w-[720px] mx-auto text-center`,
    section: `flex flex-col h-[90vh] pt-5`,
  };

  return (
    <div className={isDark && "bg-black"}>
      <div className={style.app}>
        <section className={style.section}>
          <Navbar isDark={isDark}>
            <button onClick={() => setIsDark((isDark) => !isDark)}>
              <img src={isDark ? moon : sun} className="w-8" />
            </button>
          </Navbar>
          {user ? <Chat isDark={isDark} /> : null}
        </section>
      </div>
    </div>
  );
}

export default App;
