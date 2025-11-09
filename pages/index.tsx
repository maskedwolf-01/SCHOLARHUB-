// pages/index.tsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0f0f15] to-[#0a0a1f] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow px-4 py-12 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 neon-text text-center">
          Welcome to ScholarHub
        </h1>
        <p className="text-center text-gray-300 mb-12">
          Your portal to computing courses, tutorials, library resources, and messaging at FUOYE.
        </p>

        {/* Courses Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 neon-text">Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-[#11111a] rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">Introduction to Programming</h3>
              <a href="#" className="text-[#00ffea] hover:underline">
                View PDF
              </a>
            </div>

            <div className="p-4 bg-[#11111a] rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">Data Structures</h3>
              <a href="#" className="text-[#00ffea] hover:underline">
                View PDF
              </a>
            </div>

            <div className="p-4 bg-[#11111a] rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">Database Systems</h3>
              <a href="#" className="text-[#00ffea] hover:underline">
                View PDF
              </a>
            </div>
          </div>
        </section>

        {/* Library Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 neon-text">Library</h2>
          <p className="text-gray-300">
            Access your computing textbooks, research papers, and notes here.
          </p>
          {/* Links or embedded resources will be added later */}
        </section>

        {/* Tutorials Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 neon-text">Tutorials</h2>
          <p className="text-gray-300">
            Find tutorials from various sources like YouTube, Wikipedia, GitHub, and online guides.
          </p>
          {/* YouTube, Wikipedia, GitHub API integration will be added later */}
        </section>

        {/* Messaging Section (Placeholder) */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 neon-text">Messaging</h2>
          <p className="text-gray-300">
            Communicate with other users here. Messaging feature will be implemented soon.
          </p>
          {/* Messaging UI and API integration to be added later */}
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
