"use client";

import React, { useState } from "react";
import { FaWhatsapp, FaTwitter, FaFacebook, FaLink } from "react-icons/fa";

export default function Tutorials() {
  const [query, setQuery] = useState("");
  const [wikiResult, setWikiResult] = useState<string | null>(null);
  const [youtubeResults, setYoutubeResults] = useState<any[]>([]);
  const [stackOverflowResults, setStackOverflowResults] = useState<any[]>([]);
  const [devToResults, setDevToResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const YOUTUBE_API_KEY = "AIzaSyA5jVJbDg4h9qOBHjGk1ANLkiEJF_vPvg4";

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    setError(null);

    try {
      // Wikipedia
      const wikiRes = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`
      );
      const wikiData = await wikiRes.json();
      setWikiResult(wikiData.extract || "No Wikipedia summary found.");

      // YouTube
      const youtubeRes = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${encodeURIComponent(
          query
        )}&key=${YOUTUBE_API_KEY}&type=video`
      );
      const youtubeData = await youtubeRes.json();
      setYoutubeResults(youtubeData.items || []);

      // Stack Overflow
      const stackRes = await fetch(
        `https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=relevance&q=${encodeURIComponent(
          query
        )}&site=stackoverflow&accepted=True&filter=!9_bDDxJY5`
      );
      const stackData = await stackRes.json();
      setStackOverflowResults(stackData.items || []);

      // Dev.to
      const devRes = await fetch(
        `https://dev.to/api/articles?per_page=5&tag=${encodeURIComponent(query)}`
      );
      const devData = await devRes.json();
      setDevToResults(devData || []);
    } catch (err) {
      console.error(err);
      setError("An error occurred while fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyLink = (link: string) => {
    navigator.clipboard.writeText(link);
    setCopiedLink(link);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const shareLink = (platform: string, link: string) => {
    let shareUrl = "";
    const encodedLink = encodeURIComponent(link);
    switch (platform) {
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodedLink}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedLink}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedLink}`;
        break;
      default:
        break;
    }
    window.open(shareUrl, "_blank");
  };

  const renderLinkActions = (link: string) => (
    <div className="flex flex-wrap gap-2 mt-2">
      <button
        onClick={() => copyLink(link)}
        className="p-2 bg-[#00ffea] text-[#0f0f15] rounded hover:bg-[#00d8c4] transition"
        title="Copy Link"
      >
        <FaLink />
      </button>
      <button
        onClick={() => shareLink("whatsapp", link)}
        className="p-2 bg-[#25D366] text-[#0f0f15] rounded hover:bg-[#1ebe5d] transition"
        title="Share on WhatsApp"
      >
        <FaWhatsapp />
      </button>
      <button
        onClick={() => shareLink("twitter", link)}
        className="p-2 bg-[#1DA1F2] text-[#0f0f15] rounded hover:bg-[#0d8ddb] transition"
        title="Share on Twitter"
      >
        <FaTwitter />
      </button>
      <button
        onClick={() => shareLink("facebook", link)}
        className="p-2 bg-[#4267B2] text-[#0f0f15] rounded hover:bg-[#314d8c] transition"
        title="Share on Facebook"
      >
        <FaFacebook />
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f15] to-[#0a0a1f] text-white p-4 sm:p-6 md:p-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#00ffea] text-center">
        Tutorials Hub
      </h1>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row items-center mb-6 gap-2 sm:gap-3">
        <input
          type="text"
          placeholder="Search for a topic..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full sm:flex-1 p-3 rounded-md text-black"
        />
        <button
          onClick={handleSearch}
          className="w-full sm:w-auto bg-[#00ffea] text-[#0f0f15] px-6 py-3 rounded-md font-semibold hover:bg-[#00d8c4] transition"
        >
          Search
        </button>
      </div>

      {loading && (
        <div className="text-center text-[#00ffea] mb-6">
          <p>Loading...</p>
          <div className="w-10 h-10 border-4 border-t-[#00ffea] border-gray-600 rounded-full animate-spin mx-auto mt-2"></div>
        </div>
      )}

      {error && <p className="text-red-500 text-center mb-6">{error}</p>}

      {/* Wikipedia Section */}
      {wikiResult && !loading && (
        <div className="mb-6 p-4 bg-[#111118] rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-2 text-[#00ffea]">Wikipedia</h2>
          <p className="text-sm sm:text-base">{wikiResult}</p>
        </div>
      )}

      {/* YouTube Section */}
      {youtubeResults.length > 0 && !loading && (
        <div className="mb-6 p-4 bg-[#111118] rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-[#ff5555]">YouTube Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {youtubeResults.map((video: any) => {
              const link = `https://www.youtube.com/watch?v=${video.id.videoId}`;
              return (
                <div
                  key={video.id.videoId}
                  className="p-2 border border-gray-700 rounded hover:border-[#ff5555] transition"
                >
                  <a href={link} target="_blank">
                    <img
                      src={video.snippet.thumbnails.medium.url}
                      alt={video.snippet.title}
                      className="mb-2 rounded w-full h-auto"
                    />
                    <p className="font-semibold text-sm sm:text-base">{video.snippet.title}</p>
                  </a>
                  {renderLinkActions(link)}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Stack Overflow Section */}
      {stackOverflowResults.length > 0 && !loading && (
        <div className="mb-6 p-4 bg-[#111118] rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-[#ffaa00]">Stack Overflow</h2>
          <ul className="list-disc list-inside text-sm sm:text-base">
            {stackOverflowResults.map((q) => (
              <li key={q.question_id} className="mb-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <a
                    href={q.link}
                    target="_blank"
                    className="text-[#00ffea] hover:underline break-words"
                  >
                    {q.title}
                  </a>
                  {renderLinkActions(q.link)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Dev.to Section */}
      {devToResults.length > 0 && !loading && (
        <div className="mb-6 p-4 bg-[#111118] rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-[#ff55ff]">Dev.to Articles</h2>
          <ul className="list-disc list-inside text-sm sm:text-base">
            {devToResults.map((article) => (
              <li key={article.id} className="mb-2 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <a
                  href={article.url}
                  target="_blank"
                  className="text-[#00ffea] hover:underline break-words"
                >
                  {article.title}
                </a>
                {renderLinkActions(article.url)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
        }
