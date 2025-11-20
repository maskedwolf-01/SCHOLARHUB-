// pages/login.tsx
"use client";

import React from "react";
import { signIn } from "next-auth/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0f0f15] to-[#0a0a1f] text-white">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-md p-8 bg-[#111118] rounded-lg shadow-lg">
          <img
            src="/fuoye-faculty.jpg"
            alt="ScholarHub"
            className="w-32 h-32 mx-auto mb-6 rounded-full"
          />

          <h1 className="text-3xl font-bold text-center mb-4 neon-text">
            Sign In
          </h1>
          <p className="text-center text-gray-400 mb-6">
            Sign in with Google to continue
          </p>

          <button
            onClick={() => signIn("google")}
            className="w-full flex items-center justify-center gap-2 bg-[#00ffea] text-[#0f0f15] px-4 py-3 rounded-md font-semibold hover:bg-[#00d8c4] transition mb-4"
          >
            <img
              src="/google-logo.svg"
              alt="Google"
              className="w-6 h-6"
            />
            Sign in with Google
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
