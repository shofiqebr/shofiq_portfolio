'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const BikeStoreProject = () => {
  return (
    <main className="bg-gray-900 text-white min-h-screen py-16 px-4 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-purple-400 mb-2">Bike Store Platform</h1>
        <p className="text-gray-400 text-lg mb-6">
          An eCommerce platform for bikes where users can browse, add to cart, and checkout with secure payment integration.
        </p>

        {/* Banner Image */}
        <div className="relative w-full h-64 md:h-[500px] mb-8">
          <Image
            src="/bike-store.png" // Add image in /public/images/projects
            alt="Bike Store Project"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Tech Stack */}
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <ul className="list-disc list-inside text-gray-300 mb-8">
          <li>Frontend: React, Tailwind CSS, TypeScript</li>
          <li>Backend: Node.js, Express.js, MongoDB</li>
          <li>State: Redux Toolkit</li>
          <li>Payment Integration: SurjoPay</li>
        </ul>

        {/* Features */}
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-1">
          <li>Users can browse different bikes with filters.</li>
          <li>Authentication and protected routes for user/admin.</li>
          <li>Shopping cart and secure checkout system.</li>
          <li>Admin dashboard for product and order management.</li>
        </ul>

        {/* Links */}
        <div className="flex gap-6 mb-12">
          <Link
            href="https://bike-store-front.vercel.app"
            target="_blank"
            className="bg-purple-600 hover:bg-purple-700 transition px-6 py-2 rounded text-white"
          >
            Live Demo
          </Link>
          <Link
            href="https://github.com/shofiqebr/bike_store_front.git"
            target="_blank"
            className="bg-gray-800 hover:bg-gray-700 transition px-6 py-2 rounded text-white"
          >
            View Code
          </Link>
        </div>

        {/* Back Button */}
        <Link href="/#projects" className="text-purple-400 hover:underline">
          ← Back to Projects
        </Link>
      </motion.div>
    </main>
  );
};

export default BikeStoreProject;
