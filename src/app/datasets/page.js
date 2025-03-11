"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Datasets() {
  const [datasets, setDatasets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDatasets = async () => {
      try {
        const response = await fetch(
          "https://cmr.earthdata.nasa.gov/search/collections.json?keyword=geospatial"
        );

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();

        // Ensure we have entries before mapping
        if (!data.feed || !data.feed.entry || data.feed.entry.length === 0) {
          throw new Error("No datasets found.");
        }

        const formattedDatasets = data.feed.entry.map((item) => ({
          title: item.title || "Untitled Dataset",
          description: item.summary || "No description available.",
          size: item.data_center || "Unknown",
          link:
            item.links?.find(
              (link) => link.rel === "http://esipfed.org/ns/fedsearch/1.1/data#"
            )?.href || "#",
        }));

        setDatasets(formattedDatasets);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDatasets();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="p-10"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">📊 Datasets</h1>
        <p className="text-lg text-gray-600 mb-8">
          Download and explore datasets used in geospatial and earth science research.
        </p>
      </div>

      {loading && <p className="text-center text-gray-600">Loading datasets...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {datasets.map((dataset, index) => (
          <motion.a
            key={index}
            href={dataset.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-transform transform hover:-translate-y-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-xl font-semibold text-green-800">{dataset.title}</h2>
            <p className="text-gray-700 mt-2">
              {dataset.description.length > 100
                ? `${dataset.description.substring(0, 100)}...`
                : dataset.description}
            </p>
            <p className="text-gray-500 text-sm mt-1">📦 Data Center: {dataset.size}</p>
            <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition">
              📥 Access Dataset
            </button>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
