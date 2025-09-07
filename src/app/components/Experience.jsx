'use client';

import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-950 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Experience
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800"
        >
          <h3 className="text-2xl font-semibold text-purple-400 mb-1">
            Full Stack Developer
          </h3>
          <p className="text-gray-300 mb-2">
            <span className="font-medium">Ionic Corporation</span> &mdash; <span>May 2024 – Present</span>
          </p>
          <p className="text-gray-400 mb-4">
            Working as a full stack developer focusing on front-end development using React and JavaScript. 
            The company primarily builds solutions around the <span className="text-purple-300 font-medium">Frappe ERP</span> system, and I collaborate with the backend team to integrate user-facing interfaces with ERP features.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>Built and maintained responsive front-end applications using React and Tailwind CSS</li>
            <li>Integrated front-end with backend APIs powered by Frappe framework</li>
            <li>Collaborated closely with remote Python developers and project managers</li>
            <li>Contributed to Electron-based desktop apps for ERP modules</li>
            <li>Focused on clean UI/UX and reusable components</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
