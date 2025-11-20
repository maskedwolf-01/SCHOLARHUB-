"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Courses", href: "/courses" },
    { name: "Library", href: "/library" },
    { name: "Tutorials", href: "/tutorials" },
  ];

  return (
    <nav className="bg-[#11111a]/90 backdrop-blur-md p-4 flex justify-between items-center text-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <Link href="/">
        <span className="text-2xl font-bold neon-text cursor-pointer">ScholarHub</span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <span className="hover:text-[#00ffea] transition-colors cursor-pointer neon-hover">
              {link.name}
            </span>
          </Link>
        ))}

        {session ? (
          <>
            <span className="text-sm px-3 py-1 bg-[#00ffea]/20 rounded text-[#00ffea] font-medium">
              {session.user?.name}
            </span>
            <button
              onClick={() => signOut()}
              className="bg-[#00ffea] text-[#0f0f15] px-4 py-1 rounded hover:bg-[#00d8c4] transition"
            >
              Sign Out
            </button>
          </>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="bg-[#00ffea] text-[#0f0f15] px-4 py-1 rounded hover:bg-[#00d8c4] transition"
          >
            Sign In
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#11111a]/95 backdrop-blur-md flex flex-col items-center py-4 space-y-4 md:hidden z-40">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              <span className="hover:text-[#00ffea] text-lg transition-colors neon-hover">
                {link.name}
              </span>
            </Link>
          ))}

          {session ? (
            <>
              <span className="text-sm px-3 py-1 bg-[#00ffea]/20 rounded text-[#00ffea] font-medium">
                {session.user?.name}
              </span>
              <button
                onClick={() => { signOut(); setIsOpen(false); }}
                className="bg-[#00ffea] text-[#0f0f15] px-4 py-1 rounded hover:bg-[#00d8c4] transition"
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              onClick={() => { signIn("google"); setIsOpen(false); }}
              className="bg-[#00ffea] text-[#0f0f15] px-4 py-1 rounded hover:bg-[#00d8c4] transition"
            >
              Sign In
            </button>
          )}
        </div>
      )}
    </nav>
  );
              }
