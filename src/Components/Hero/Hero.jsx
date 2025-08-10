import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_img from "../../assets/my-photo.jpg";
import pdf from "../../assets/KANNAN-FRONTEND-WEB-DEVELOPER.pdf";

const Hero = () => {
  return (
    <div
      id="home"
      data-aos="fade-up"
      data-aos-duration="8000"
      // Responsive container: stack vertically, center, and smart gaps
      className="
        hero flex flex-col items-center 
        gap-6 md:gap-10 
        min-w-[260px] px-4
      "
    >
      {/* Profile Image */}
      <img
        src={profile_img}
        alt="Kannan's profile"
        // Responsive image size and margin
        className="
          mt-24
          w-40 sm:w-52 md:w-60 lg:w-72
          rounded-full
          shadow-lg
        "
      />

      {/* Name Header */}
      <h1
        className="
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          font-bold text-center w-full max-w-xl
        "
      >
        <span
          className="
            bg-gradient-to-l from-[#ff9900] from-[10%] to-[#ae00ff]
            bg-clip-text text-transparent
          "
        >
          I&apos;m Kannan
        </span>
        , Front-End Developer
      </h1>

      {/* Description */}
      <p
        className="
          w-full max-w-lg
          text-center text-base sm:text-lg md:text-xl
          leading-relaxed md:leading-loose
          text-gray-600
          px-2 sm:px-6
        "
      >
        I&apos;m a Frontend Developer specializing in React and Tailwind CSS. I
        love turning beautiful UI designs into fast, responsive websites and
        applications.
      </p>

      {/* Action Buttons */}
      <div
        className="
          flex
          flex-col sm:flex-row
          items-center
          gap-5
          text-base md:text-lg
          font-bold mb-10
          w-full
          justify-center
        "
      >
        <div
          className="
            bg-gradient-to-r from-orange-400 to-purple-600
            p-2 sm:p-3 rounded-full
            cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out
            w-full sm:w-auto text-center
          "
        >
          <AnchorLink offset={100} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>

        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <div
            className="
              p-2 sm:p-3 border-2 cursor-pointer rounded-full px-4
              font-extralight hover:border-purple-600
              transition-all duration-300 text-center
              w-full sm:w-auto
            "
          >
            My Resume
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
