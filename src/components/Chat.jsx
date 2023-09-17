import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import SendMessage from "./SendMessage";

const Chat = ({ isDark }) => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className="flex flex-col relative overflow-auto hover:overflow-auto scroll-smooth mt-10 mb-5">
        {/* Chat Message Component */}
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      {/* Send Message Component */}
      <div className="mb-10">
        <SendMessage isDark={isDark} scroll={scroll} />
      </div>
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
