'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const TouristGuideProject = () => {
  return (
    <main className="bg-gray-900 text-white min-h-screen py-16 px-4 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-purple-400 mb-2">Tourist Guide App</h1>
        <p className="text-gray-400 text-lg mb-6">
          (Nov. 5, 2023 – Dec. 13, 2023) | Frontend & Backend | Full-Stack Application for Tourism Support
        </p>

        {/* Project Image */}
        <div className="relative w-full h-64 md:h-[500px] mb-8">
          <Image
            src="/tourist-guide.png"
            alt="Tourist Guide App"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Features */}
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-1">
          <li>Firebase authentication system with login and registration.</li>
          <li>Users can add and share their own tourism products and guides.</li>
          <li>MongoDB Atlas for storing product and user data securely.</li>
        </ul>

        {/* Tech Stack */}
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <ul className="list-disc list-inside text-gray-300 mb-8">
          <li>React.js</li>
          <li>Express.js</li>
          <li>MongoDB Atlas</li>
          <li>Tailwind CSS</li>
          <li>Firebase Authentication</li>
          <li>Axios</li>
        </ul>

        {/* Links */}
        <div className="flex gap-6 mb-12">
          <Link
            href="https://tourist-guide-client-43eb6.web.app"
            target="_blank"
            className="bg-purple-600 hover:bg-purple-700 transition px-6 py-2 rounded text-white"
          >
            Live Demo
          </Link>
          <Link
            href="https://github.com/shofiqebr/tourist-guide-client"
            target="_blank"
            className="bg-gray-800 hover:bg-gray-700 transition px-6 py-2 rounded text-white"
          >
            View Code
          </Link>
        </div>

        {/* Back Navigation */}
        <Link href="/#projects" className="text-purple-400 hover:underline">
          ← Back to Projects
        </Link>
      </motion.div>
    </main>
  );
};

export default TouristGuideProject;
