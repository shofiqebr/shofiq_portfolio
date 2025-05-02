"use client";

import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="bg-gray-900 text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-purple-400">Md. Shofiqul Islam</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            MERN Stack Developer
          </h2>
          <p className="text-gray-300 mb-6">
            I build full-stack web applications using MongoDB, Express, React, and Node.js.
            I’m passionate about clean UI, scalable code, and solving real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* Resume Preview */}
            <Link
              href="/resume.pdf"
              target="_blank"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition font-medium"
            >
              Preview Resume
            </Link>

            {/* Resume Download */}
            <Link
              href="/resume.pdf"
              download
              className="bg-transparent border border-purple-600 hover:bg-purple-700 hover:border-purple-700 text-white px-6 py-3 rounded-lg transition font-medium"
            >
              Download Resume
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-60 h-60 md:w-80 md:h-80 relative rounded-full overflow-hidden border-4 border-purple-500 shadow-xl">
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
