"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiExpress, SiMongodb, SiRedis } from "react-icons/si";

const Banner = () => {
  // const icons = [
  //   { id: 1, icon: <FaReact size={28} className="text-blue-400" /> },
  //   { id: 2, icon: <FaNodeJs size={28} className="text-green-500" /> },
  //   { id: 3, icon: <FaJs size={28} className="text-yellow-400" /> },
  //   { id: 4, icon: <FaHtml5 size={28} className="text-orange-500" /> },
  //   { id: 5, icon: <FaCss3Alt size={28} className="text-blue-500" /> },
  // ];
  const icons = [
  { id: 1, icon: <FaReact size={40} className="text-cyan-400" /> },
  { id: 2, icon: <FaNodeJs size={40} className="text-green-500" /> },
  { id: 3, icon: <SiExpress size={40} className="text-gray-300" /> },
  { id: 4, icon: <SiMongodb size={40} className="text-green-400" /> },
  { id: 5, icon: <SiRedis size={40} className="text-[#FF0000]" /> },
];

  return (
    <section className="relative bg-gray-900 text-white pt-20 pb-12 md:pt-28 md:pb-20 z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-16"
      >
        {/* === Text Section === */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Hi, I'm{" "}
            <span className="text-purple-400 relative">
              Md. Shofiqul Islam
              {/* Active glowing dot */}
              <motion.span
                className="absolute -right-6 top-1 w-3 h-3 bg-purple-500 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-purple-300"
          >
            <Typewriter
              words={[
                "MERN Stack Developer",
                "Frontend Specialist",
                "Full Stack Engineer",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-gray-300 mb-8 leading-relaxed"
          >
            I build full-stack web applications using MongoDB, Express, React,
            and Node.js. I’m passionate about clean UI, scalable code, and
            solving real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link
              href="/Resume of Md. Shofiqul Islam .pdf"
              target="_blank"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition font-medium shadow-lg"
            >
              Preview Resume
            </Link>

            <Link
              href="/Resume of Md. Shofiqul Islam .pdf"
              download
              className="bg-transparent border border-purple-600 hover:bg-purple-700 hover:border-purple-700 text-white px-6 py-3 rounded-lg transition font-medium"
            >
              Download Resume
            </Link>
          </motion.div>
        </div>

        {/* === Image Section with Orbiting Tech Icons === */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center items-center"
          >
            {/* Profile Image */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 relative rounded-full overflow-hidden border-4 border-purple-500 shadow-xl flex items-center justify-center z-10">
              <Image
                src="/profile.png"
                alt="Profile"
                // fill
                width={200}
                height={200}
                className=""
                priority
              />
            </div>

            {/* Orbiting Icons */}
            <motion.div
              className="absolute w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] rounded-full flex justify-center items-center z-20"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {icons.map((item, index) => {
                const angle = (index / icons.length) * (2 * Math.PI);
                const radius = 150; // Adjust orbit radius for responsiveness
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={item.id}
                    className="absolute"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    {item.icon}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
