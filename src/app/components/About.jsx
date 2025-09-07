'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-16">
      <div className="max-w-[1300px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          About Me
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          {/* Image Section */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-48 h-48 md:w-60 md:h-60 relative rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
              <Image
                src="/profile.jpg"
                alt="Md. Shofiqul Islam"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">
              Md. Shofiqul Islam – MERN Stack Developer
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I’m a full-stack web developer based in Dhaka, Bangladesh with over a year of
              experience in designing and building scalable applications using the MERN stack.
              My focus lies in crafting responsive user interfaces and efficient backend systems.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Currently working at <strong>Ionic Corporation</strong> as a full-stack developer focused on React and JavaScript, I help build frontend systems that integrate with <strong>Frappe ERP</strong>.
              My goal is to grow as a software engineer by continuously learning and solving
              real-world challenges with clean, efficient code.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My core tech includes React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS.
              I'm also enthusiastic about developer tools, UI design systems, and open-source collaboration.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
