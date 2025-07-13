import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import darkModeIcon from '../../assets/day.png'; 
import lightModeIcon from '../../assets/night.png'; 

const Navbar = ({theme , setTheme}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const toggele_mode = () => {
    theme == 'dark' ? setTheme('light') : setTheme('dark');
  }
  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`navbar fixed top-0  w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[10vw] ubuntu-regular ${
        isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="textlight text-[#FFD966]">&lt;</span>
          <span className="navbar text-white">Gangadhar</span>
          <span className="textlight text-[#FFD966]">/</span>
          <span className="navbar text-white">Shaw</span>
          <span className="textlight text-[#FFD966]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="navbar hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`navbar-item hover:text-[#FFD966] ${
                (activeSection === item.id && theme === 'dark') ? "text-[#FFD966]" : ""
                
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)} className="navbar-item cursor-pointer font-bold hover:underline">
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/Gangadhar-5"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-icon text-gray-300 hover:text-[#FFD966]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="http://www.linkedin.com/in/gangadhar-shaw"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-icon text-gray-300 hover:text-[#FFD966]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="textlight text-3xl text-[#FFD966] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="textlight text-3xl text-[#FFD966] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>

        {        /* Dark Mode light mode Toggle Button */}
        <div className="hidden md:block">
          <img onClick={()=>{toggele_mode()}} src={theme == 'dark' ? darkModeIcon : lightModeIcon} alt="" className='toggle-icon'/>
        </div>

      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className=" navbar absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden  ubuntu-medium">
          <ul className="navbar flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={` navbar-item cursor-pointer hover:text-white ${
                  (activeSection === item.id && theme == 'dark') ? "text-[#FFD966]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/Gangadhar-5"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-icon text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="http://www.linkedin.com/in/gangadhar-shaw"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-icon text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
              <img onClick={()=>{toggele_mode()}} src={theme == 'dark' ? darkModeIcon : lightModeIcon} alt="" className='toggle-icon'/>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
