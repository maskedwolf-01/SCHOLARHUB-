// pages/signup.tsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getAuth, signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// ----- Hardcoded Firebase config -----
const firebaseConfig = {
  apiKey: "AIzaSyDZH02DIDzS69wxosXqsLCX_mFD3fpOCxA",
  authDomain: "scholarhub-477707.firebaseapp.com",
  projectId: "scholarhub-477707",
  storageBucket: "scholarhub-477707.appspot.com",
  messagingSenderId: "503892607031",
  appId: "1:503892607031:web:1b42676137730d70b83fb2",
  measurementId: "G-SPT6Z410CF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default function Signup() {
  const [user, setUser] = useState<User | null>(null);
  const [fullName, setFullName] = useState("");
  const [department, setDepartment] = useState("");
  const [level, setLevel] = useState("");
  const [loading, setLoading] = useState(false);

  // Sign in with Google
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      setFullName(result.user.displayName || "");
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  // Save additional info to Firestore
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return alert("You must sign in with Google first.");

    setLoading(true);
    try {
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        fullName,
        department,
        level,
        createdAt: new Date(),
      });
      alert("Signup complete!");
    } catch (err) {
      console.error("Firestore save error:", err);
      alert("Failed to save data.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0f0f15] to-[#0a0a1f] text-white">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12">
        {!user ? (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 neon-text">Sign Up with Google</h1>
            <button
              onClick={handleGoogleSignIn}
              className="bg-[#00ffea] text-[#0f0f15] px-6 py-3 rounded-md font-semibold hover:bg-[#00d8c4] transition"
            >
              Sign In with Google
            </button>
          </div>
        ) : (
          <div className="w-full max-w-md p-8 bg-[#111118] rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-4 neon-text">Complete Signup</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 rounded-md text-black"
                required
              />
              <input
                type="text"
                placeholder="Department (e.g., Computer Science)"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full p-3 rounded-md text-black"
                required
              />
              <input
                type="text"
                placeholder="Level (e.g., 200, 300)"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full p-3 rounded-md text-black"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#00ffea] text-[#0f0f15] px-4 py-3 rounded-md font-semibold hover:bg-[#00d8c4] transition"
              >
                {loading ? "Saving..." : "Complete Signup"}
              </button>
            </form>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
  }
