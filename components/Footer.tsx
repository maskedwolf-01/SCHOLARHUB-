// components/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#11111a] text-gray-400 py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} ScholarHub. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://github.com/maskedwolf-01" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ffea]">GitHub</a>
          <a href="https://twitter.com/abdulwalimajeed" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ffea]">Twitter</a>
          <a href="mailto:abdulwalimajeed@gmail.com" className="hover:text-[#00ffea]">Contact</a>
        </div>
      </div>
    </footer>
  );
}
