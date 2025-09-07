"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
  const projectData = [
    {
      title: "House Rental Platform",
      description:
        "A full-stack MERN application where tenants can request rentals, and landlords can approve with payment and contact visibility.",
      link: "/projects/project-1",
    },
    {
      title: "E-Commerce Dashboard",
      description:
        "An admin dashboard built with React, Redux, and Node.js to manage products, users, and orders with real-time analytics.",
      link: "/projects/project-2",
    },
    {
      title: "Next.js Portfolio Site",
      description:
        "A responsive and animated developer portfolio using Next.js, Tailwind CSS, and Framer Motion for smooth transitions.",
      link: "/projects/project-3",
    },
  ];

  return (
    <section id="projects" className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            My Projects
          </span>
        </h2>
        <div className="flex flex-col md:flex-row gap-10 justify-center">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex-1"
            >
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <Link href={project.link}>
                <button className="text-purple-400 hover:underline">
                  View Details
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
