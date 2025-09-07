'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiTypescript, SiRedux } from "react-icons/si";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true }
};

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Skills & Expertise
          </span>
        </h2>

        <div className="flex flex-col gap-12 lg:gap-8">
          {/* Frontend Section */}
          <motion.div {...fadeInUp} className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
            <h3 className="text-2xl font-semibold text-purple-400 mb-6 text-center">
              Frontend Development
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {/* Skill Cards */}
              {[
                {
                  Icon: FaReact,
                  title: "React",
                  color: "text-blue-500",
                  border: "hover:border-blue-500",
                  desc: "Building dynamic UIs with reusable components and hooks"
                },
                {
                  Icon: FaHtml5,
                  title: "HTML5",
                  color: "text-orange-500",
                  border: "hover:border-orange-500",
                  desc: "Semantic markup and modern web structure"
                },
                {
                  Icon: FaCss3Alt,
                  title: "CSS3",
                  color: "text-blue-500",
                  border: "hover:border-blue-500",
                  desc: "Responsive designs with Flexbox and Grid"
                },
                {
                  Icon: SiTypescript,
                  title: "TypeScript",
                  color: "text-blue-600",
                  border: "hover:border-blue-600",
                  desc: "Type-safe JavaScript for scalable applications"
                },
                {
                  Icon: SiRedux,
                  title: "Redux",
                  color: "text-purple-400",
                  border: "hover:border-purple-400",
                  desc: "State management for complex applications"
                }
              ].map(({ Icon, title, color, border, desc }, i) => (
                <div key={i} className={`bg-gray-700 p-5 rounded-lg shadow-md transition-shadow duration-300 border border-gray-600 ${border}`}>
                  <div className="flex flex-col items-center h-full">
                    <Icon size={50} className={`${color} mb-3`} />
                    <h4 className="text-xl font-medium text-gray-200 mb-2">{title}</h4>
                    <p className="text-gray-400 text-sm text-center">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Backend Section */}
          <motion.div {...fadeInUp} className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
            <h3 className="text-2xl font-semibold text-purple-400 mb-6 text-center">
              Backend Development
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                {
                  Icon: FaNodeJs,
                  title: "Node.js",
                  color: "text-green-500",
                  border: "hover:border-green-500",
                  desc: "Building scalable server-side applications"
                },
                {
                  Icon: SiMongodb,
                  title: "MongoDB",
                  color: "text-green-700",
                  border: "hover:border-green-700",
                  desc: "NoSQL database for flexible data storage"
                },
                {
                  Icon: FaGitAlt,
                  title: "Git",
                  color: "text-orange-500",
                  border: "hover:border-orange-500",
                  desc: "Version control and collaborative workflows"
                }
              ].map(({ Icon, title, color, border, desc }, i) => (
                <div key={i} className={`bg-gray-700 p-5 rounded-lg shadow-md transition-shadow duration-300 border border-gray-600 ${border}`}>
                  <div className="flex flex-col items-center h-full">
                    <Icon size={50} className={`${color} mb-3`} />
                    <h4 className="text-xl font-medium text-gray-200 mb-2">{title}</h4>
                    <p className="text-gray-400 text-sm text-center">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Professional Skills */}
          <motion.div {...fadeInUp} className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
            <h3 className="text-2xl font-semibold text-purple-400 mb-6 text-center">
              Professional Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { title: "Communication", desc: "Clear articulation of ideas and active listening" },
                { title: "Problem Solving", desc: "Analytical thinking and creative solutions" },
                { title: "Teamwork", desc: "Collaboration and conflict resolution" },
                { title: "Adaptability", desc: "Quick learning and flexibility" },
                { title: "Time Management", desc: "Prioritization and meeting deadlines" }
              ].map((skill, i) => (
                <div key={i} className="bg-gray-700 p-4 rounded-lg border border-gray-600 hover:border-purple-400 transition-colors">
                  <h4 className="text-lg font-medium text-gray-200 mb-2 text-center">{skill.title}</h4>
                  <p className="text-gray-400 text-sm text-center">{skill.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
