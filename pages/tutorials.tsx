// pages/tutorials.tsx
"use client";

import React, { useState } from "react";

export default function Tutorials() {
  const [query, setQuery] = useState("");
  const [wikiResult, setWikiResult] = useState<string | null>(null);
  const [youtubeResults, setYoutubeResults] = useState<any[]>([]);

  const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || "AIzaSyA5jVJbDg4h9qOBHjGk1ANLkiEJF_vPvg4";

  const handleSearch = async () => {
    if (!query) return;

    // 1. Wikipedia API
    const wikiRes = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`
    );
    const wikiData = await wikiRes.json();
    setWikiResult(wikiData.extract || "No Wikipedia summary found.");

    // 2. YouTube API
    const youtubeRes = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${encodeURIComponent(
        query
      )}&key=${YOUTUBE_API_KEY}&type=video`
    );
    const youtubeData = await youtubeRes.json();
    setYoutubeResults(youtubeData.items || []);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f15] to-[#0a0a1f] text-white p-4 md:p-10">
      <h1 className="text-4xl font-bold mb-6 text-[#00ffea] text-center">Tutorials Hub</h1>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row mb-6">
        <input
          type="text"
          placeholder="Search for a topic..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-3 rounded-md text-black flex-1 mb-2 md:mb-0 md:mr-2"
        />
        <button
          onClick={handleSearch}
          className="bg-[#00ffea] text-[#0f0f15] px-6 py-3 rounded-md font-semibold hover:bg-[#00d8c4] transition"
        >
          Search
        </button>
      </div>

      {/* Wikipedia Section */}
      {wikiResult && (
        <div className="mb-6 p-4 bg-[#111118] rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-2 text-[#00ffea]">Wikipedia</h2>
          <p>{wikiResult}</p>
        </div>
      )}

      {/* YouTube Section */}
      {youtubeResults.length > 0 && (
        <div className="mb-6 p-4 bg-[#111118] rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-[#ff5555]">YouTube Videos</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {youtubeResults.map((video) => (
              <a
                key={video.id.videoId}
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target="_blank"
                className="p-2 border border-gray-700 rounded hover:border-[#ff5555] transition"
              >
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  className="mb-2 rounded"
                />
                <p className="font-semibold">{video.snippet.title}</p>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
          }
