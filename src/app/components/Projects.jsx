import Link from "next/link";

const Projects = () => {
  const projectData = [
    {
      title: "Project 1",
      description:
        "A web app built using React and Node.js to handle user authentication and CRUD operations.",
      link: "/projects/project-1",
    },
    {
      title: "Project 2",
      description:
        "A MERN stack e-commerce platform with user profiles, product listing, and payment integration.",
      link: "/projects/project-2",
    },
    {
      title: "Project 3",
      description:
        "A responsive landing page built with Next.js and Tailwind CSS to showcase portfolio work.",
      link: "/projects/project-3",
    },
  ];

  return (
    <section id="projects" className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="flex flex-col md:flex-row gap-10 justify-center">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex-1"
            >
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <Link href={project?.link}>
                <button className="text-purple-400 hover:underline">View Details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
