"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    setTimeout(() => {
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="p-6 min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center"

    >
      <div className="max-w-xl w-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-300 dark:border-gray-600 transform transition-all hover:scale-105">

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
          📩 Contact Us
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Have questions? We'd love to hear from you. Drop us a message!
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col">
            <label className="text-gray-700 dark:text-gray-300 font-semibold">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 dark:text-gray-300 font-semibold">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="johndoe@example.com"
              required
              className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 dark:text-gray-300 font-semibold">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
              className="w-full p-3 border rounded-lg h-32 bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-md transition-all hover:bg-gradient-to-l hover:scale-105"
          >
            🚀 Send Message
          </button>
        </form>

        {/* Status Message */}
        {status && <p className="text-center mt-4 text-blue-600 dark:text-blue-300 font-semibold">{status}</p>}

        {/* Contact Info Section */}
        <div className="mt-8 text-center">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">📍 Contact Details</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">📧 Email: geodlabs@iitgn.ac.in</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">📞 Phone: +91 12345 67890</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
