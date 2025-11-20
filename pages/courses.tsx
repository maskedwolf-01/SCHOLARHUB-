// pages/courses.tsx
"use client";
export const dynamic = "force-dynamic";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSession } from "next-auth/react";

export default function Courses() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0f0f15] to-[#0a0a1f] text-white">
        <p className="text-gray-400 text-center text-lg">
          Please log in to view courses.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0f0f15] to-[#0a0a1f] text-white">
      <Navbar />

      <main className="flex-grow px-4 py-12 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#00ffea] text-center">Courses</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Course Cards */}
          <div className="p-4 bg-[#11111a] rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">Introduction to Programming</h3>
            <a href="/pdfs/introduction_to_programming.pdf" className="text-[#00ffea] hover:underline">
              View PDF
            </a>
          </div>

          <div className="p-4 bg-[#11111a] rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">Data Structures</h3>
            <a href="/pdfs/data_structures.pdf" className="text-[#00ffea] hover:underline">
              View PDF
            </a>
          </div>

          <div className="p-4 bg-[#11111a] rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">Database Systems</h3>
            <a href="/pdfs/database_systems.pdf" className="text-[#00ffea] hover:underline">
              View PDF
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
