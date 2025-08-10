import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  const skillStyle =
    "flex gap-5 md:flex-row flex-col  md:items-center transition-all duration-500 hover:scale-[1.02]";
  const skillStyleP =
    "w-[160px] sm:w-[200px] text-base sm:text-lg md:text-xl font-bold";
  const skillStylePer =
    "outline-none border-none h-[8px] rounded-full bg-gradient-to-r from-orange-400 to-purple-600";

  return (
    <div
      id="about"
      data-aos="fade-up"
      className="flex flex-col items-center justify-center gap-16 p-4 sm:p-7 mt-12"
    >
      {/* Heading */}
      <div className="relative text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">About Me</h1>
        <img
          src={theme_pattern}
          className="w-[120px] sm:w-[160px] md:w-[200px] absolute bottom-0 right-0 -z-10 opacity-70"
          alt=""
        />
      </div>

      {/* About Content */}
      <div
        className="
          flex flex-col md:flex-row
          gap-10 md:gap-20 
          items-center  
          w-full max-w-6xl
        "
      >
        {/* Description */}
        <div className="flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-3 text-lg sm:text-xl font-medium">
            <p className="text-center md:text-left leading-relaxed">
              I'm a passionate frontend developer with a strong focus on
              building clean and responsive user interfaces using React.js and
              Tailwind CSS. As a beginner, I'm continuously learning and
              improving my skills by working on real-world projects.
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-5">
            <div className={skillStyle}>
              <p className={skillStyleP}>HTML & CSS</p>
              <hr className={`${skillStylePer} w-[70%]`} />
            </div>
            <div className={skillStyle}>
              <p className={skillStyleP}>Javascript Basic & Advance</p>
              <hr className={`${skillStylePer} w-[60%]`} />
            </div>
            <div className={skillStyle}>
              <p className={skillStyleP}>React JS and Tailwind</p>
              <hr className={`${skillStylePer} w-[75%]`} />
            </div>
            <div className={skillStyle}>
              <p className={skillStyleP}>Next Js and TypeScript</p>
              <hr className={`${skillStylePer} w-[80%]`} />
            </div>
          </div>
        </div>
      </div>

      {/* Experience & Projects */}
      <div
        className="
          flex flex-col sm:flex-row 
          w-full max-w-3xl 
          justify-around items-center 
          gap-6 sm:gap-0 
          mb-20
        "
      >
        {/* Fresher */}
        <div className="text-center hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer">
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700 bg-clip-text text-transparent">
            I am a Fresher
          </h1>
          <p className="text-sm sm:text-base">4-Month of Experience</p>
        </div>

        {/* Divider */}
        <hr className="border-2 h-[40px] sm:h-[60px] hidden sm:block" />

        {/* Projects */}
        <div className="text-center hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer">
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700 bg-clip-text text-transparent">
            05+
          </h1>
          <p className="text-sm sm:text-base">Project Completed</p>
        </div>
      </div>
    </div>
  );
};

export default About;
