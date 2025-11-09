// pages/signup.tsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [department, setDepartment] = useState("");
  const [level, setLevel] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add signup logic here (e.g., send to database)
    console.log({ fullName, department, level });
  };

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
            Sign Up
          </h1>

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
              className="w-full bg-[#00ffea] text-[#0f0f15] px-4 py-3 rounded-md font-semibold hover:bg-[#00d8c4] transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
              }
