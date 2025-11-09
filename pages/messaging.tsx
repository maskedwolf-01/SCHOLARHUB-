// pages/messaging.tsx
"use client";

import React, { useState, useEffect } from "react";
import { db } from "../lib/firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

export default function Messaging() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    await addDoc(collection(db, "messages"), {
      text: message,
      timestamp: serverTimestamp(),
    });

    setMessage("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0f0f15] to-[#0a0a1f] text-white p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#00ffea]">Messaging</h1>

      <div className="flex-1 overflow-y-auto mb-4 p-4 bg-[#111118] rounded-md shadow-md">
        {messages.length === 0 && (
          <p className="text-center text-gray-400">No messages yet...</p>
        )}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="mb-3 p-3 bg-[#1a1a2e] rounded-lg shadow"
          >
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      <form
        onSubmit={sendMessage}
        className="flex space-x-2 border-t border-gray-700 pt-3"
      >
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 p-3 rounded-md text-black"
        />
        <button
          type="submit"
          className="bg-[#00ffea] text-[#0f0f15] px-5 py-3 rounded-md font-semibold hover:bg-[#00d8c4] transition"
        >
          Send
        </button>
      </form>
    </div>
  );
        }
