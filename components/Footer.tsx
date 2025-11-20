"use client";

import React from "react";
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d14]/80 backdrop-blur-md text-gray-300 py-10 mt-auto border-t border-[#1a1a25]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo & Text */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-[#00ffea]">ScholarHub</h2>
            <p className="text-gray-400 text-sm mt-1">
              Empowering students with knowledge, technology & seamless access.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 text-xl">
            <a
              href="https://github.com/maskedwolf-01"
              target="_blank"
              className="hover:text-[#00ffea] transition transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/abdulwalimajeed"
              target="_blank"
              className="hover:text-[#00ffea] transition transform hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:abdulwalimajeed@gmail.com"
              className="hover:text-[#00ffea] transition transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00ffea] to-transparent my-6 opacity-60" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-3">
          <p>© {new Date().getFullYear()} ScholarHub. All rights reserved.</p>

          {/* 🔥 Your Credit */}
          <p className="text-gray-500">
            Designed & Developed by{" "}
            <span className="text-[#00ffea] font-semibold hover:underline cursor-pointer">
              Abdulwali Majeed
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
