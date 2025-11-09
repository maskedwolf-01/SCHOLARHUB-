// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-[#11111a] p-4 flex justify-between items-center text-white shadow-md">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <span className="text-2xl font-bold neon-text cursor-pointer">ScholarHub</span>
        </Link>
        <Link href="/courses">
          <span className="hover:text-[#00ffea] cursor-pointer">Courses</span>
        </Link>
        <Link href="/library">
          <span className="hover:text-[#00ffea] cursor-pointer">Library</span>
        </Link>
        <Link href="/tutorials">
          <span className="hover:text-[#00ffea] cursor-pointer">Tutorials</span>
        </Link>
      </div>

      <div>
        {session ? (
          <div className="flex items-center space-x-4">
            <span className="text-sm">{session.user?.name}</span>
            <button
              onClick={() => signOut()}
              className="bg-[#00ffea] text-[#0f0f15] px-3 py-1 rounded hover:bg-[#00d8c4] transition"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="bg-[#00ffea] text-[#0f0f15] px-3 py-1 rounded hover:bg-[#00d8c4] transition"
          >
            Sign In with Google
          </button>
        )}
      </div>
    </nav>
  );
}
