// pages/signup.tsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { signIn } from "next-auth/react";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [level, setLevel] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here (e.g., API call or database insertion)
    console.log({ fullName, email, password, department, level });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0f0f15] to-[#0a0a1f] text-white">
      <Navbar />

      <main className="flex-grow px-4 py-12 max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#00ffea] text-center">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="p-3 rounded-md text-black"
            required
          />
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

          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="p-3 rounded-md text-black"
            required
          >
            <option value="">Select Department</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Data Science & Analytics">Data Science & Analytics</option>
            <option value="Cyber Security">Cyber Security</option>
          </select>

          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="p-3 rounded-md text-black"
            required
          >
            <option value="">Select Level</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
          </select>

          <button
            type="submit"
            className="bg-[#00ffea] text-[#0f0f15] px-6 py-3 rounded-md font-semibold hover:bg-[#00d8c4] transition"
          >
            Sign Up
          </button>
        </form>

        <div className="my-6 text-center text-gray-300">OR</div>

        <button
          onClick={() => signIn("google")}
          className="bg-[#4285F4] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#357ae8] transition w-full"
        >
          Sign Up with Google
        </button>
      </main>

      <Footer />
    </div>
  );
            }
