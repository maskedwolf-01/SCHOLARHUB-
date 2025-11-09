// pages/login.tsx
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your backend authentication API
    console.log("Logging in with:", { email, password });
    alert("Login attempt submitted!");
    // On successful login, redirect:
    router.push("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0f0f15] to-[#0a0a1f] text-white px-4">
      <h1 className="text-4xl font-bold mb-6 neon-text">Faculty of Computing Portal</h1>
      <p className="mb-6 text-gray-300">Welcome back! Please login to continue.</p>

      {/* Email/Password Login */}
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 mb-6">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 rounded-md text-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-3 rounded-md text-black"
        />
        <button
          type="submit"
          className="w-full py-3 bg-[#00ffea] text-[#0f0f15] font-semibold rounded-lg hover:bg-[#00d8c4] transition duration-300"
        >
          Login
        </button>
      </form>

      <p className="mb-4 text-gray-400 text-center">OR</p>

      {/* Google Login */}
      <button
        onClick={() => signIn("google")}
        className="w-full max-w-md py-3 bg-red-500 font-semibold rounded-lg shadow-lg hover:bg-red-600 transition duration-300 mb-4"
      >
        Login with Google
      </button>

      {/* GitHub Login */}
      <button
        onClick={() => signIn("github")}
        className="w-full max-w-md py-3 bg-[#24292f] font-semibold rounded-lg shadow-lg hover:bg-[#1b1f23] transition duration-300"
      >
        Login with GitHub
      </button>

      <p className="mt-6 text-gray-400 text-center">
        Don't have an account?{" "}
        <a href="/signup" className="underline hover:text-[#00ffea]">
          Sign Up
        </a>
      </p>
    </div>
  );
}