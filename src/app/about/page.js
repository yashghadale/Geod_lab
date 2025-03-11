"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const timeline = [
    { year: "2015", event: "GeoD Labs founded at IIT Gandhinagar." },
    { year: "2018", event: "Breakthrough research on AI in Geospatial studies." },
    { year: "2021", event: "Collaborated internationally for climate modeling." },
  ];

  const partners = ["nasa.png", "mit.png", "isro.png", "unesco.png"];

  const testimonials = [
    { name: "Dr. A. Sharma", text: "GeoD Labs' research has transformed the field!" },
    { name: "Prof. C. Verma", text: "Innovative, impactful, and forward-thinking!" },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="p-10"
    >
      {/* Heading Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-blue-600">About GeoD Labs</h1>
        <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
          GeoD Labs at IIT Gandhinagar leads research in geospatial technology, earth sciences, and data analysis.
        </p>
        <div className="mt-8">
          <a href="/research" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Explore Our Research</a>
        </div>
      </section>
      
      {/* Intro Video */}
      <div className="flex justify-center mt-8">
        <iframe className="rounded-lg shadow-lg" width="560" height="315" src="https://www.youtube.com/embed/example" title="GeoD Labs Introduction" allowFullScreen></iframe>
      </div>
      
      {/* Interactive Timeline */}
      <motion.div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800">Our Journey</h2>
        <div className="relative border-l-4 border-blue-600 mt-6">
          {timeline.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.3 }} className="mb-6 ml-6 p-4 bg-white rounded-lg shadow-lg"
            >
              <span className="text-xl font-bold text-blue-600">{item.year}</span>
              <p className="text-gray-600">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Research Partners */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Our Research Partners</h2>
        <div className="flex justify-center gap-6 mt-6">
          {partners.map((logo, index) => (
            <Image key={index} src={`/${logo}`} alt="Partner Logo" width={100} height={50} className="grayscale hover:grayscale-0 transition duration-300" />
          ))}
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">What Experts Say</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.3 }} className="p-6 bg-gray-100 rounded-lg shadow-md"
            >
              <p className="italic text-gray-700">"{testimonial.text}"</p>
              <p className="font-bold mt-2 text-gray-800">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Fun Facts Section */}
      <div className="mt-16 text-center bg-blue-100 p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-blue-800">GeoD Labs in Numbers</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-8">
          {["100+ Papers Published", "50+ Collaborations", "10+ International Projects"].map((fact, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1 }} className="p-6 bg-white rounded-lg shadow-md"
            >
              <p className="text-xl font-bold text-blue-700">{fact}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}