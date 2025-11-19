// pages/index.tsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, User } from "firebase/auth";

// ----- Hardcoded Firebase config -----
const firebaseConfig = {
  apiKey: "AIzaSyDZH02DIDzS69wxosXqsLCX_mFD3fpOCxA",
  authDomain: "scholarhub-477707.firebaseapp.com",
  projectId: "scholarhub-477707",
  storageBucket: "scholarhub-477707.appspot.com",
  messagingSenderId: "503892607031",
  appId: "1:503892607031:web:1b42676137730b83fb2",
  measurementId: "G-SPT6Z410CF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Home() {
  const [user, setUser] = useState<User | null>(null);

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Google sign-in error:", error);
      alert("Failed to sign in with Google.");
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Sign out error:", error);
      alert("Failed to sign out.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0f0f15] to-[#0a0a1f] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow px-4 py-12 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8 neon-text">Welcome to ScholarHub</h1>
        <p className="text-gray-300 mb-12">
          Your portal to computing courses, tutorials, and library resources at FUOYE.
        </p>

        {/* Auth Section */}
        {user ? (
          <div className="mb-12">
            <p className="mb-4">Signed in as <strong>{user.email}</strong></p>
            <button
              onClick={handleSignOut}
              className="bg-[#00ffea] text-[#0f0f15] px-6 py-3 rounded-md font-semibold hover:bg-[#00d8c4] transition"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button
            onClick={handleGoogleSignIn}
            className="bg-[#00ffea] text-[#0f0f15] px-6 py-3 rounded-md font-semibold hover:bg-[#00d8c4] transition mb-12"
          >
            Sign In with Google
          </button>
        )}

        {/* Hero Image */}
        <div className="flex justify-center mb-12">
          <img
            src="/fuoye-faculty.jpg"
            alt="FUOYE Faculty"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>

        {/* Courses Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 neon-text">Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-[#11111a] rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">Introduction to Programming</h3>
              <a href="#" className="text-[#00ffea] hover:underline">View PDF</a>
            </div>
            <div className="p-4 bg-[#11111a] rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">Data Structures</h3>
              <a href="#" className="text-[#00ffea] hover:underline">View PDF</a>
            </div>
            <div className="p-4 bg-[#11111a] rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">Database Systems</h3>
              <a href="#" className="text-[#00ffea] hover:underline">View PDF</a>
            </div>
          </div>
        </section>

        {/* Library Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 neon-text">Library</h2>
          <p className="text-gray-300">Access your computing textbooks, research papers, and notes here.</p>
        </section>

        {/* Tutorials Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 neon-text">Tutorials</h2>
          <p className="text-gray-300">
            Find tutorials from various sources like YouTube, Wikipedia, and online guides.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
      }
