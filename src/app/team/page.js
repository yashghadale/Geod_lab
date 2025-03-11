"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Sample team members (Replace this with API data later)
const fetchTeamMembers = async () => {
  return [
    {
      name: "Dr. John Doe",
      role: "Principal Investigator",
      image: "/team/john.jpg",
      category: "Faculty",
      bio: "Leading research on geospatial data analysis with AI and machine learning.",
    },
    {
      name: "Alice Smith",
      role: "Research Associate",
      image: "/team/alice.jpg",
      category: "Researcher",
      bio: "Specializes in GIS data visualization and remote sensing technologies.",
    },
    {
      name: "Bob Johnson",
      role: "Graduate Student",
      image: "/team/bob.jpg",
      category: "Student",
      bio: "Working on real-time geospatial analytics and big data processing techniques.",
    },
  ];
};

export default function Team() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [filter, setFilter] = useState("All");

  // Fetch team members (Replace with API)
  useEffect(() => {
    const loadTeam = async () => {
      const data = await fetchTeamMembers();
      setTeamMembers(data);
    };
    loadTeam();
  }, []);

  // Filter team members based on category
  const filteredMembers =
    filter === "All" ? teamMembers : teamMembers.filter((member) => member.category === filter);

  return (
    <div className="container mx-auto p-6">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
        Our Team
      </h1>

      {/* Filter Buttons (Faculty, Researchers, Students) */}
      <div className="flex justify-center space-x-4 mb-8">
        {["All", "Faculty", "Researcher", "Student"].map((category) => (
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

      {/* Team Members Grid (Matches Publications Page) */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMembers.map((member, index) => (
          <motion.div
            key={index}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all bg-white dark:bg-gray-800"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 text-center">
              {member.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center">{member.role}</p>
            <p className="text-gray-700 dark:text-gray-300 mt-2 text-center">{member.bio}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
