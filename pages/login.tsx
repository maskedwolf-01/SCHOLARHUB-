// pages/login.tsx
import { signIn, signOut, useSession } from "next-auth/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0f0f15] to-[#0a0a1f] text-white">
      <Navbar />

      <main className="flex-grow px-4 py-12 max-w-xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 text-[#00ffea]">Login</h1>

        {!session ? (
          <div>
            <p className="mb-6 text-gray-300">
              Sign in with Google to access ScholarHub features.
            </p>
            <button
              onClick={() => signIn("google")}
              className="bg-[#00ffea] text-[#0f0f15] px-6 py-3 rounded font-semibold hover:bg-[#00d8c4] transition"
            >
              Sign in with Google
            </button>
          </div>
        ) : (
          <div>
            <p className="mb-6 text-gray-300">
              Signed in as <strong>{session.user?.email}</strong>
            </p>
            <button
              onClick={() => signOut()}
              className="bg-[#ff5555] text-white px-6 py-3 rounded font-semibold hover:bg-[#ff2222] transition"
            >
              Sign Out
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
