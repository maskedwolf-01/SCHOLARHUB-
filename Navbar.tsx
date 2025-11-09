// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-[#11111a] text-white shadow-md py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold neon-text cursor-pointer">
            ScholarHub
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6 items-center">
          <li>
            <Link href="/" className="hover:text-[#00ffea] transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-[#00ffea] transition">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-[#00ffea] transition">
              Library
            </Link>
          </li>
          <li>
            <Link href="/tutorials" className="hover:text-[#00ffea] transition">
              Tutorials
            </Link>
          </li>
        </ul>

        {/* Auth Button */}
        <div>
          {session ? (
            <button
              onClick={() => signOut()}
              className="bg-[#00ffea] text-[#0f0f15] px-4 py-2 rounded-md font-semibold hover:bg-[#00d8c4] transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="bg-[#00ffea] text-[#0f0f15] px-4 py-2 rounded-md font-semibold hover:bg-[#00d8c4] transition"
            >
              Login / Signup
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}