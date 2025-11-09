import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a1f] text-gray-400 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} FUOYE Faculty of Computing Portal. 
          Designed and maintained by Abdulwali Majeed. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ffea]">
            Facebook
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ffea]">
            Twitter
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ffea]">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}