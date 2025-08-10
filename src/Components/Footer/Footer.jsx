import theme_pattern from "../../assets/theme_pattern.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1000"
      className="flex flex-col gap-6 mx-4 sm:mx-8 mt-20"
    >
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 footer">
        {/* Logo & Info */}
        <div className="relative flex flex-col gap-3 flex-1 max-w-lg">
          <p className="text-2xl font-bold">Kannan</p>
          <img
            src={theme_pattern}
            className="absolute w-[80px] sm:w-[100px] -z-10 top-0 left-0 opacity-70"
            alt=""
          />
          <p className="text-sm sm:text-base text-gray-400 footer-p">
            I am a Front-End Developer from India, Tamil-Nadu and I am a Fresher
          </p>
        </div>

        {/* Subscription */}
        <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 footer-input flex-1">
          {/* Input box */}
          <div className="flex gap-3 sm:gap-5 px-4 py-2 rounded-full bg-[#32323B] border-2 border-gray-600 hover:border-pink-600 transition-all duration-300 w-full sm:w-auto">
            <img src={user_icon} alt="user icon" className="w-5 sm:w-6" />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="outline-none bg-transparent text-gray-400 text-sm sm:text-base flex-1 email-input"
            />
          </div>
          {/* Subscribe button */}
          <div
            className="text-sm sm:text-base md:text-lg rounded-full bg-gradient-to-r from-orange-400 to-purple-600 px-5 py-2 font-bold cursor-pointer hover:scale-105 transition-all duration-300 sub text-center"
          >
            Subscribe
          </div>
        </div>
      </div>

      <hr className="border-gray-600" />

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 gap-4 footer-bottom">
        <p className="text-center sm:text-left">
          © 2025 Kannan. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center sm:justify-end gap-5 mb-6 sm:mb-0">
          <p className="cursor-pointer hover:text-white">Terms of Service</p>
          <p className="cursor-pointer hover:text-white">Privacy Policy</p>
          <p className="cursor-pointer hover:text-white">Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
