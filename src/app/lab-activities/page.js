"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import { db } from "@/firebase"; // Uncomment if using Firebase Firestore
// import { collection, getDocs } from "firebase/firestore"; // Uncomment if using Firebase

export default function LabActivities() {
  const [activities, setActivities] = useState([]);
  const [filter, setFilter] = useState("All");

  // Dummy data (Remove this if using Firebase or API)
  const staticActivities = [
    {
      title: "Workshop on Geospatial Data Analysis",
      date: "2025-03-15",
      description: "A hands-on workshop on geospatial data processing techniques.",
      category: "Event",
    },
    {
      title: "Collaboration with XYZ University",
      date: "2024-12-20",
      description: "Research collaboration focusing on geodynamics simulations.",
      category: "Project",
    },
    {
      title: "GeoD Labs Annual Meetup",
      date: "2024-10-10",
      description: "Networking event for researchers and students in geoscience.",
      category: "Event",
    },
  ];

  // 🔥 Fetch from Firebase Firestore (Optional)
  useEffect(() => {
    const fetchActivities = async () => {
      // Uncomment this if using Firebase
      // const querySnapshot = await getDocs(collection(db, "activities"));
      // const data = querySnapshot.docs.map((doc) => doc.data());
      // setActivities(data);

      setActivities(staticActivities); // Remove this when using real data
    };
    fetchActivities();
  }, []);

  // 🔍 Filter Activities
  const filteredActivities =
    filter === "All" ? activities : activities.filter((act) => act.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="p-6 md:p-10"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">🔬 Lab Activities</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Discover our latest workshops, research collaborations, and academic events.
        </p>
      </div>

      {/* 🔍 Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        {["All", "Events", "Projects"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 ${
              filter === category
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 📝 Activities Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredActivities.map((activity, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="block bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-transform transform hover:-translate-y-2"
          >
            <h2 className="text-xl font-semibold text-green-800 dark:text-green-400">{activity.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mt-2">📅 {activity.date}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{activity.description}</p>
            <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition">
              Learn More
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
