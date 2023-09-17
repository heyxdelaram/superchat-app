import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = ({ scroll, isDark }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input) {
      const { uid, displayName } = auth.currentUser;
      await addDoc(collection(db, "messages"), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp(),
      });
    }

    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form
      onSubmit={sendMessage}
      className="h-14 w-full max-w-[720px] flex text-xl absolute "
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={`${
          isDark ? `bg-[#121212] text-white` : `bg-slate-300`
        } w-full text-xl p-5 outline-none border-none rounded-full mr-3`}
        type="text"
        placeholder="send message"
      />
      <button
        className="w-[20%] font-medium rounded-full text-white bg-indigo-500"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default SendMessage;
