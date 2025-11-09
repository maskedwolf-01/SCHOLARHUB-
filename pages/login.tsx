// pages/login.tsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { signIn } from "next-auth/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call or next-auth credentials)
    console.log({ email, password });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0f0f15] to-[#0a0a1f] text-white">
      <Navbar />

      <main className="flex-grow px-4 py-12 max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#00ffea] text-center">
          Log In
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-md text-black"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-md text-black"
            required
          />

          <button
            type="submit"
            className="bg-[#00ffea] text-[#0f0f15] px-6 py-3 rounded-md font-semibold hover:bg-[#00d8c4] transition"
          >
            Log In
          </button>
        </form>

        <div className="my-6 text-center text-gray-300">OR</div>

        <button
          onClick={() => signIn("google")}
          className="bg-[#4285F4] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#357ae8] transition w-full"
        >
          Log In with Google
        </button>
      </main>

      <Footer />
    </div>
  );
      }
