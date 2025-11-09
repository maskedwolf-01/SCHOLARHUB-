// pages/signup.tsx
import { useState } from "react";
import { signIn } from "next-auth/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [level, setLevel] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log values. Later you can integrate database saving.
    console.log({ fullName, email, password, level, department });
    alert("Signup submitted! Integrate backend to store user data.");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0f0f15] to-[#0a0a1f] text-white">
      <Navbar />

      <main className="flex-grow max-w-md mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 neon-text text-center">
          Create an Account
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
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md text-black"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md text-black"
            required
          />

          {/* Level */}
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full p-3 rounded-md text-black"
            required
          >
            <option value="">Select Level</option>
            <option value="100">100 Level</option>
            <option value="200">200 Level</option>
            <option value="300">300 Level</option>
            <option value="400">400 Level</option>
            <option value="500">500 Level</option>
          </select>

          {/* Department */}
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full p-3 rounded-md text-black"
            required
          >
            <option value="">Select Department</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Data Science and Analytics">Data Science and Analytics</option>
            <option value="Cyber Security">Cyber Security</option>
          </select>

          <button
            type="submit"
            className="w-full bg-[#00ffea] text-[#0f0f15] py-3 rounded-md font-semibold hover:bg-[#00d8c4] transition"
          >
            Sign Up
          </button>

          <div className="text-center mt-4">or</div>

          {/* Google OAuth */}
          <button
            type="button"
            onClick={() => signIn("google")}
            className="w-full mt-4 bg-[#4285F4] text-white py-3 rounded-md font-semibold hover:bg-[#357ae8] transition flex justify-center items-center gap-2"
          >
            <img src="/google-icon.png" alt="Google" className="w-5 h-5" />
            Sign up with Google
          </button>
        </form>

        {/* Optional: quick links to FUOYE course PDFs */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 neon-text text-center">
            Sample Course PDFs
          </h2>
          <ul className="space-y-2 text-center">
            <li>
              <a
                href="https://www.cs.fuoye.edu.ng/files/intro_to_programming.pdf"
                target="_blank"
                className="underline hover:text-[#00ffea]"
              >
                Introduction to Programming
              </a>
            </li>
            <li>
              <a
                href="https://www.cs.fuoye.edu.ng/files/data_structures.pdf"
                target="_blank"
                className="underline hover:text-[#00ffea]"
              >
                Data Structures
              </a>
            </li>
            <li>
              <a
                href="https://www.cs.fuoye.edu.ng/files/database_systems.pdf"
                target="_blank"
                className="underline hover:text-[#00ffea]"
              >
                Database Systems
              </a>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}