import React from "react";
import Navbar from "./components/Navbar";

const style = {
  app: `max-w-[720px] mx-auto text-center`,
  section: `flex flex-col h-[90vh] bg-gray-100 mt-10`,
};

function App() {
  return (
    <div className={style.app}>
      <section className={style.section}>
        {/*Navbar*/}
        <Navbar />
        {/*Chat Component */}
      </section>
    </div>
  );
}

export default App;
