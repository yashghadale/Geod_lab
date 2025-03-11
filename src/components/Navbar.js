"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">GeoD Labs</h1>
        <ul className="hidden md:flex space-x-6 text-lg font-semibold text-gray-900 dark:text-white">
          
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/publications" className="hover:underline">Publications</Link></li>
          <li><Link href="/datasets" className="hover:underline">Datasets</Link></li>
          <li><Link href="/lab-activities" className="hover:underline">Lab Activities</Link></li>
          <li><Link href="/team" className="hover:underline">Team</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
