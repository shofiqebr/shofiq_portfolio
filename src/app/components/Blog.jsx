"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Blog = () => {
  const blogData = [
    {
      title: "Launching Soon: My Web Dev Blog",
      description:
        "Insights, tips, and tutorials on building robust full-stack applications using the MERN stack and modern tools.",
      link: "#",
    },
    {
      title: "Tutorial Series: From Frontend to Backend",
      description:
        "A step-by-step series covering everything from creating dynamic UIs with React to building secure APIs with Node.js.",
      link: "#",
    },
    {
      title: "Behind the Code: Real-World Dev Practices",
      description:
        "Explore clean code techniques, deployment strategies, and scalable architecture for production-ready apps.",
      link: "#",
    },
  ];

  return (
    <section id="blog" className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Blog Preview
          </span>
        </h2>
        <div className="flex flex-col md:flex-row gap-10 justify-center">
          {blogData.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex-1"
            >
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                {blog.title}
              </h3>
              <p className="text-gray-400 mb-4">{blog.description}</p>
              <Link href={blog.link}>
                <button
                  className="text-purple-400 hover:underline cursor-not-allowed"
                  disabled
                >
                  Coming Soon
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
