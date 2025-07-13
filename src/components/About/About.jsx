
import { Typewriter } from 'react-simple-typewriter'
import Tilt from 'react-parallax-tilt'
import profileImage from '../../assets/ganga.jpg' // Adjust the path as necessary
const About = () => {
  return (
    <section 
    id='about'
    className='md:px-[7vw] lg:px-[10vw] font-sans mt-16 md:mt-24 lg:mt-32'
    >
     <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="navbar text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight ubuntu-regular">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="navbar text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight ubuntu-bold">
            Gangadhar Shaw
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="textlight text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#FFD966] leading-tight ubuntu-medium">
            <span className="navbar text-white">I am a </span>
            <Typewriter
            words={['FullStack Developer', 'Coder', 'Devops Engineer', 'Tech Enthusiast']}
            loop= {true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          </h3>
           {/* About Me Paragraph */}
          <p className="paralight text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxe ubuntu-regular">
            I am a passionate tech enthusiast and a dedicated full-stack web developer with hands-on experience in building scalable web applications using the MERN stack. Alongside my web development expertise, I have a solid foundation in problem-solving, having successfully solved over 300 LeetCode questions in C++, which has sharpened my algorithmic thinking and coding efficiency.In addition to development, I have a strong interest in DevOps.
            Always eager to learn and explore new technologies.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/11_Y_l5AzkJrKTmOIAOY6OpUXYqmtQ4SC/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="buttonlight inline-block text-white bg-amber-300 py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 hover:bg-amber-400 hover:shadow-lg ubuntu-regular"
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="textlight w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-[#FFD966] rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Gangadhar Shaw"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  )
}

export default About
