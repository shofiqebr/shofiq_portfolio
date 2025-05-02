import Link from "next/link";

const Blog = () => {
  const blogData = [
    {
      title: "Coming Soon: My First Blog Post",
      description: "Stay tuned for updates on web development, MERN stack, and more!",
      link: "#",
    },
    {
      title: "Coming Soon: Web Development Tutorials",
      description: "I’ll be sharing tips and tutorials on full-stack development soon.",
      link: "#",
    },
    {
      title: "Coming Soon: Web Dev Best Practices",
      description: "Learn about best practices in modern web development, including React, Node.js, and more.",
      link: "#",
    },
  ];

  return (
    <section id="blog" className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Blog</h2>
        <div className="flex flex-col md:flex-row gap-10 justify-center">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex-1"
            >
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">{blog.title}</h3>
              <p className="text-gray-400 mb-4">{blog.description}</p>
              <Link href={blog?.link}>
                <button className="text-purple-400 hover:underline">Coming Soon</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
