
import {FaLinkedin, FaInstagram} from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="navbar max-w-full text-white py-8 px-[12vw] md:px-[7vw] lg:px-[10vw]">
      <div className="navbar container mx-auto text-center">
        {/* Name / Logo */}
        <div className="barbacklight w-full h-1 bg-white mt-4 "></div>
        <h2 className="textlight text-xl mt-2 font-semibold text-[#FFD966]">Gangadhar Shaw</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="navbar-item hover:text-[#FFD966] font-sans  sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="navbar-icon flex flex-wrap justify-center space-x-4 mt-6">
          {[
            
            { icon: <FaLinkedin />, link: "http://www.linkedin.com/in/gangadhar-shaw" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/gangadhar_shaw/?hl=en" },
            
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-[#FFD966] transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="paralight text-sm text-gray-400 mt-6">
          © 2025 Gangadhar Shaw. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;