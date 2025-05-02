import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo or Name */}
        <div className="text-lg font-semibold text-white">
          Md. Shofiqul Islam
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
          <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="mailto:your.email@example.com"
            className="hover:text-purple-400 transition"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Md. Shofiqul Islam. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
