
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[0.5vw] 2xl:px-[18vw] font-sans ubuntu-regular"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="navbar text-4xl font-bold text-white ubuntu-bold">EDUCATION</h2>
        <div className="barbacklight w-52 h-1 bg-[#FFD966] mx-auto mt-4"></div>
        <p className="paralight text-gray-400 mt-4 text-lg font-semibold ubuntu-regular lg:px-50">
          My education journey has been a path of continuous growth, from foundational schooling to pursuing a degree in engineering. With each step, I’ve gained knowledge, skills, and a deeper passion for technology.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="barbacklight absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="textlight absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#FFD966] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`backlight shadowlight w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* School Logo/Image */}
                <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className=" flex flex-col justify-between">
                  <div>
                    <h3 className="paralight text-xl sm:text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="paralight text-md sm:text-sm text-gray-300">
                      {edu.school}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="paralight text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>

              <p className="paralight mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
              <p className="paralight mt-4 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;