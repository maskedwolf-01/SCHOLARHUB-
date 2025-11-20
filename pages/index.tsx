// pages/index.tsx
"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0f0f15] to-[#0a0a1f] text-white">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow px-4 py-12 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 neon-text text-center">
          Welcome to ScholarHub
        </h1>

        <p className="text-center text-gray-300 mb-8">
          Your portal to computing courses, tutorials, and library resources at FUOYE.
        </p>

        {/* Google Sign In/Out */}
        <div className="text-center mb-12">
          {session ? (
            <div>
              <p className="mb-2">Signed in as {session.user?.email}</p>
              <button
                onClick={() => signOut()}
                className="bg-[#00ffea] text-[#0f0f15] px-4 py-2 rounded-md font-semibold hover:bg-[#00d8c4] transition"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="bg-[#00ffea] text-[#0f0f15] px-4 py-2 rounded-md font-semibold hover:bg-[#00d8c4] transition"
            >
              Sign In with Google
            </button>
          )}
        </div>

        {/* Hero Image */}
        <div className="flex justify-center mb-12">
          <img
            src="/fuoye-faculty.jpg"
            alt="FUOYE Faculty"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>

        {/* Courses Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 neon-text">Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-[#11111a] rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">Introduction to Programming</h3>
              <a href="#" className="text-[#00ffea] hover:underline">View PDF</a>
            </div>

            <div className="p-4 bg-[#11111a] rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">Data Structures</h3>
              <a href="#" className="text-[#00ffea] hover:underline">View PDF</a>
            </div>

            <div className="p-4 bg-[#11111a] rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">Database Systems</h3>
              <a href="#" className="text-[#00ffea] hover:underline">View PDF</a>
            </div>
          </div>
        </section>

        {/* Library Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 neon-text">Library</h2>
          <p className="text-gray-300">
            Access your computing textbooks, research papers, and notes here.
          </p>
        </section>

        {/* Tutorials Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 neon-text">Tutorials</h2>
          <p className="text-gray-300">
            Find tutorials from various sources like YouTube, Wikipedia, and online guides.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
              }
