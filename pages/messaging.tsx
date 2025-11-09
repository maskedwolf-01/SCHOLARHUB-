// pages/messaging.tsx
import React, { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Messaging() {
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");

  // Load messages in real-time
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, []);

  // Send a new message
  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    await addDoc(collection(db, "messages"), {
      text: newMessage,
      timestamp: serverTimestamp(),
      sender: "Anonymous", // later you’ll replace this with Google user name
    });
    setNewMessage("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0f0f15] to-[#0a0a1f] text-white">
      <Navbar />

      <main className="flex-grow px-4 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Messaging Room</h1>

        <div className="bg-[#11111a] rounded-lg p-4 h-[60vh] overflow-y-auto mb-4 border border-gray-700">
          {messages.map((msg) => (
            <div key={msg.id} className="mb-2">
              <span className="text-[#00ffea] font-semibold">{msg.sender}: </span>
              <span>{msg.text}</span>
            </div>
          ))}
        </div>

        <form onSubmit={sendMessage} className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow p-2 rounded bg-[#1a1a22] border border-gray-700 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#00ffea] text-black px-4 py-2 rounded hover:bg-[#00e6d1] transition"
          >
            Send
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
                             }
