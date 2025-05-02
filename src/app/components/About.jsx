const About = () => {
    return (
      <section id="about" className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            About Me
          </h2>
  
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Optional Image */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-48 h-48 md:w-60 md:h-60 relative rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
                {/* Replace with your profile image */}
                <img
                  src="/profile.jpg"
                  alt="Md. Shofiqul Islam"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
  
            {/* Text Content */}
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">
                Md. Shofiqul Islam – MERN Stack Developer
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I am a passionate full-stack web developer from Dhaka, Bangladesh.
                I specialize in building dynamic, responsive, and scalable web applications
                using the MERN stack. I enjoy solving real-world problems through code and
                continuously improving my skills.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Currently, I am working with React, Node.js, and MongoDB, while also exploring
                technologies like Next.js, Redux, and ERP. I love working in collaborative
                environments and continuously learning new things.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  