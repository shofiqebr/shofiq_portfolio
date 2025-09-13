"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiRedis,
  SiTailwindcss,
} from "react-icons/si";

const allIcons = [
  <FaReact size={28} className="text-cyan-400" />,
  <SiNextdotjs size={28} className="text-white" />,
  <FaHtml5 size={28} className="text-orange-500" />,
  <FaCss3Alt size={28} className="text-blue-500" />,
  <FaJs size={28} className="text-yellow-400" />,
  <FaNodeJs size={28} className="text-green-500" />,
  <SiExpress size={28} className="text-gray-300" />,
  <SiMongodb size={28} className="text-green-400" />,
  <SiTypescript size={28} className="text-blue-600" />,
  <SiRedis size={28} className="text-red-500" />,
  <SiTailwindcss size={28} className="text-sky-400" />,
  <FaDatabase size={28} className="text-purple-400" />,
];

export default function OrbitingIcons() {
  const [visibleIcons, setVisibleIcons] = useState(allIcons.slice(0, 5));
  const [startIndex, setStartIndex] = useState(0);

  // Rotate icons every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (startIndex + 1) % allIcons.length;
      setStartIndex(nextIndex);

      // pick next 5 icons in sequence
      const newIcons = [];
      for (let i = 0; i < 5; i++) {
        newIcons.push(allIcons[(nextIndex + i) % allIcons.length]);
      }
      setVisibleIcons(newIcons);
    }, 3000);

    return () => clearInterval(interval);
  }, [startIndex]);

  return (
    <div className="relative flex justify-center items-center">
      {/* Profile Image */}
      <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 relative rounded-full overflow-hidden border-4 border-purple-500 shadow-xl z-10">
        <Image
          src="/profile.jpg"
          alt="Profile"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Orbiting Icons */}
      <motion.div
        className="absolute w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full flex justify-center items-center"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {visibleIcons.map((icon, index) => {
          const angle = (index / visibleIcons.length) * (2 * Math.PI);
          const radius = 120;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.6 }}
              className="absolute"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              {icon}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
