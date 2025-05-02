import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Contact Me</h2>

        {/* Contact Details */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-400 mb-4">
              Feel free to reach out to me via email or connect with me on LinkedIn or GitHub.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:shofiqer@gmail.com"
                className="flex items-center text-purple-400 hover:text-purple-600 transition-all"
              >
                <FaEnvelope className="mr-2" /> shofiqer@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/your-linkedin/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-purple-400 hover:text-purple-600 transition-all"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-purple-400 hover:text-purple-600 transition-all"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
            </div>
          </div>

          {/* Optional: Contact Form */}
          <div className="flex-1 mt-6 md:mt-0">
            <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
            <form
              action="https://formspree.io/f/your-form-id" // You can replace this with your own form handler
              method="POST"
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="p-3 rounded-md bg-gray-800 text-white border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="p-3 rounded-md bg-gray-800 text-white border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="p-3 rounded-md bg-gray-800 text-white border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
                rows="5"
                required
              ></textarea>
              <button
                type="submit"
                className="p-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
