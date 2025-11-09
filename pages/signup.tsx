// pages/signup.tsx
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useEffect } from "react";

export default function Signup() {
  const { data: session } = useSession();
  const router = useRouter();

  // Redirect if already signed in
  useEffect(() => {
    if (session) {
      router.push("/"); // redirect to home
    }
  }, [session, router]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0f0f15] to-[#0a0a1f] text-white">
      <Navbar />

      <main className="flex flex-col flex-grow items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-6 neon-text">Join ScholarHub</h1>
        <p className="text-center text-gray-300 mb-6">
          Sign up with your Google account to access courses, tutorials, and library resources.
        </p>

        <button
          onClick={() => signIn("google")}
          className="bg-[#00ffea] text-[#0f0f15] px-6 py-3 rounded-md font-semibold hover:bg-[#00d8c4] transition"
        >
          Sign up with Google
        </button>
      </main>

      <Footer />
    </div>
  );
}
