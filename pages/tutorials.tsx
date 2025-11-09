// pages/tutorials.tsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Tutorials() {
  const [query, setQuery] = useState("");
  const [wikiResult, setWikiResult] = useState<string | null>(null);
  const [youtubeResults, setYoutubeResults] = useState<any[]>([]);
  const [githubResults, setGithubResults] = useState<any[]>([]);
  const [mdnResults, setMdnResults] = useState<any[]>([]);
  const [soResults, setSoResults] = useState<any[]>([]);

  const YOUTUBE_API_KEY = "AIzaSyA5jVJbDg4h9qOBHjGk1ANLkiEJF_vPvg4";

  const handleSearch = async () => {
    if (!query) return;

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

    // GitHub
    const githubRes = await fetch(
      `https://api.github.com/search/repositories?q=${encodeURIComponent(
        query
      )}&sort=stars&order=desc&per_page=5`
    );
    const githubData = await githubRes.json();
    setGithubResults(githubData.items || []);

    // MDN Docs
    const mdnRes = await fetch(
      `https://developer.mozilla.org/api/v1/search?q=${encodeURIComponent(query)}&locale=en-US`
    );
    const mdnData = await mdnRes.json();
    setMdnResults(mdnData.documents || []);

    // Stack Overflow
    const soRes = await fetch(
      `https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=relevance&q=${encodeURIComponent(
        query
      )}&site=stackoverflow&pagesize=5`
    );
    const soData = await soRes.json();
    setSoResults(soData.items || []);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0f0f15] to-[#0a0a1f] text-white">
      <Navbar />

      <main className="flex-grow px-6 py-12 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 neon-text text-center">
          Tutorials Hub
        </h1>

        {/* Search */}
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

        {/* Wikipedia */}
        {wikiResult && (
          <div className="mb-6 p-4 bg-[#111118] rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-2 text-[#00ffea]">Wikipedia</h2>
            <p>{wikiResult}</p>
          </div>
        )}

        {/* YouTube */}
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

        {/* GitHub */}
        {githubResults.length > 0 && (
          <div className="mb-6 p-4 bg-[#111118] rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-[#f0ad4e]">GitHub Repositories</h2>
            <ul>
              {githubResults.map((repo) => (
                <li key={repo.id} className="mb-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    className="underline hover:text-[#f0ad4e]"
                  >
                    {repo.full_name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* MDN Docs */}
        {mdnResults.length > 0 && (
          <div className="mb-6 p-4 bg-[#111118] rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-[#00aaff]">MDN Docs</h2>
            <ul>
              {mdnResults.map((doc) => (
                <li key={doc.slug} className="mb-2">
                  <a
                    href={`https://developer.mozilla.org/en-US/docs/${doc.slug}`}
                    target="_blank"
                    className="underline hover:text-[#00aaff]"
                  >
                    {doc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Stack Overflow */}
        {soResults.length > 0 && (
          <div className="mb-6 p-4 bg-[#111118] rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-[#ff9900]">Stack Overflow</h2>
            <ul>
              {soResults.map((item) => (
                <li key={item.question_id} className="mb-2">
                  <a
                    href={item.link}
                    target="_blank"
                    className="underline hover:text-[#ff9900]"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
  }
