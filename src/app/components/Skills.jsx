import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiTypescript, SiRedux } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Skills & Expertise
          </span>
        </h2>

        {/* Main container with three sections */}
        <div className="flex flex-col gap-12 lg:gap-8">
          {/* Frontend Section */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
            <h3 className="text-2xl font-semibold text-purple-400 mb-6 text-center">
              Frontend Development
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {/* React Card */}
              <div className="bg-gray-700 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-600 hover:border-purple-400">
                <div className="flex flex-col items-center h-full">
                  <FaReact size={50} className="text-blue-500 mb-3" />
                  <h4 className="text-xl font-medium text-gray-200 mb-2">React</h4>
                  <p className="text-gray-400 text-sm text-center">
                    Building dynamic UIs with reusable components and hooks
                  </p>
                </div>
              </div>

              {/* HTML5 Card */}
              <div className="bg-gray-700 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-600 hover:border-orange-500">
                <div className="flex flex-col items-center h-full">
                  <FaHtml5 size={50} className="text-orange-500 mb-3" />
                  <h4 className="text-xl font-medium text-gray-200 mb-2">HTML5</h4>
                  <p className="text-gray-400 text-sm text-center">
                    Semantic markup and modern web structure
                  </p>
                </div>
              </div>

              {/* CSS3 Card */}
              <div className="bg-gray-700 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-600 hover:border-blue-500">
                <div className="flex flex-col items-center h-full">
                  <FaCss3Alt size={50} className="text-blue-500 mb-3" />
                  <h4 className="text-xl font-medium text-gray-200 mb-2">CSS3</h4>
                  <p className="text-gray-400 text-sm text-center">
                    Responsive designs with Flexbox and Grid
                  </p>
                </div>
              </div>

              {/* TypeScript Card */}
              <div className="bg-gray-700 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-600 hover:border-blue-600">
                <div className="flex flex-col items-center h-full">
                  <SiTypescript size={50} className="text-blue-600 mb-3" />
                  <h4 className="text-xl font-medium text-gray-200 mb-2">TypeScript</h4>
                  <p className="text-gray-400 text-sm text-center">
                    Type-safe JavaScript for scalable applications
                  </p>
                </div>
              </div>

              {/* Redux Card */}
              <div className="bg-gray-700 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-600 hover:border-purple-400">
                <div className="flex flex-col items-center h-full">
                  <SiRedux size={50} className="text-purple-400 mb-3" />
                  <h4 className="text-xl font-medium text-gray-200 mb-2">Redux</h4>
                  <p className="text-gray-400 text-sm text-center">
                    State management for complex applications
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Backend Section */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
            <h3 className="text-2xl font-semibold text-purple-400 mb-6 text-center">
              Backend Development
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {/* Node.js Card */}
              <div className="bg-gray-700 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-600 hover:border-green-500">
                <div className="flex flex-col items-center h-full">
                  <FaNodeJs size={50} className="text-green-500 mb-3" />
                  <h4 className="text-xl font-medium text-gray-200 mb-2">Node.js</h4>
                  <p className="text-gray-400 text-sm text-center">
                    Building scalable server-side applications
                  </p>
                </div>
              </div>

              {/* MongoDB Card */}
              <div className="bg-gray-700 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-600 hover:border-green-700">
                <div className="flex flex-col items-center h-full">
                  <SiMongodb size={50} className="text-green-700 mb-3" />
                  <h4 className="text-xl font-medium text-gray-200 mb-2">MongoDB</h4>
                  <p className="text-gray-400 text-sm text-center">
                    NoSQL database for flexible data storage
                  </p>
                </div>
              </div>

              {/* Git Card */}
              <div className="bg-gray-700 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-600 hover:border-orange-500">
                <div className="flex flex-col items-center h-full">
                  <FaGitAlt size={50} className="text-orange-500 mb-3" />
                  <h4 className="text-xl font-medium text-gray-200 mb-2">Git</h4>
                  <p className="text-gray-400 text-sm text-center">
                    Version control and collaborative workflows
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Soft Skills Section */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
            <h3 className="text-2xl font-semibold text-purple-400 mb-6 text-center">
              Professional Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="bg-gray-700 p-4 rounded-lg border border-gray-600 hover:border-purple-400 transition-colors">
                <h4 className="text-lg font-medium text-gray-200 mb-2 text-center">Communication</h4>
                <p className="text-gray-400 text-sm text-center">
                  Clear articulation of ideas and active listening
                </p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg border border-gray-600 hover:border-purple-400 transition-colors">
                <h4 className="text-lg font-medium text-gray-200 mb-2 text-center">Problem Solving</h4>
                <p className="text-gray-400 text-sm text-center">
                  Analytical thinking and creative solutions
                </p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg border border-gray-600 hover:border-purple-400 transition-colors">
                <h4 className="text-lg font-medium text-gray-200 mb-2 text-center">Teamwork</h4>
                <p className="text-gray-400 text-sm text-center">
                  Collaboration and conflict resolution
                </p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg border border-gray-600 hover:border-purple-400 transition-colors">
                <h4 className="text-lg font-medium text-gray-200 mb-2 text-center">Adaptability</h4>
                <p className="text-gray-400 text-sm text-center">
                  Quick learning and flexibility
                </p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg border border-gray-600 hover:border-purple-400 transition-colors">
                <h4 className="text-lg font-medium text-gray-200 mb-2 text-center">Time Management</h4>
                <p className="text-gray-400 text-sm text-center">
                  Prioritization and meeting deadlines
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;