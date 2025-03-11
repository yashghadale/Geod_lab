"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Publications() {
  const [search, setSearch] = useState("");
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await fetch(
          "https://api.semanticscholar.org/graph/v1/paper/search?query=geospatial&limit=10&fields=title,authors,year,venue,url"
        );
        if (!response.ok) throw new Error("Failed to fetch publications");
        const data = await response.json();
        setPublications(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPublications();
  }, []);

  const filteredPublications = publications.filter(
    (pub) =>
      pub.title.toLowerCase().includes(search.toLowerCase()) ||
      (pub.authors && pub.authors.some((author) => author.name.toLowerCase().includes(search.toLowerCase())))
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -10 }} 
      transition={{ duration: 0.5 }} 
      className="p-6 md:p-10 dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">📚 Publications</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Explore our latest research contributions in geospatial and earth sciences.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mb-8">
        <input
          type="text"
          placeholder="🔍 Search by title or author..."
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <p className="text-center text-gray-600 dark:text-gray-400">Loading publications...</p>
      ) : error ? (
        <p className="text-center text-red-500">Error: {error}</p>
      ) : filteredPublications.length > 0 ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredPublications.map((pub, index) => (
            <motion.a
              key={index}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-transform transform hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h2 className="text-xl font-semibold text-green-800 dark:text-green-400">{pub.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2">📖 {pub.authors?.map((author) => author.name).join(", ")}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                Published in <span className="font-semibold">{pub.venue || "Unknown Journal"}</span>, {pub.year || "N/A"}
              </p>
              <button className="mt-4 bg-green-700 dark:bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition">
                Read Paper
              </button>
            </motion.a>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-400">No publications found.</p>
      )}
    </motion.div>
  );
}