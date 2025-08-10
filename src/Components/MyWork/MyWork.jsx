import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div
      id="work"
      data-aos="fade-right"
      className="flex flex-col items-center justify-center gap-12 mt-16 px-4 sm:px-8"
    >
      {/* Heading */}
      <div className="text-center relative">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">My Latest Work</h1>
        <img
          src={theme_pattern}
          className="absolute top-[-15px] left-1/2 -translate-x-1/2 w-[150px] sm:w-[200px] -z-10 opacity-70"
          alt=""
        />
      </div>

      {/* Works Grid */}
      <div className="md:px-[100px] flex flex-wrap gap-[50px] justify-center">
        {mywork_data.map((work, index) => (
          <a
            key={index}
            href={work.href}
            target="_blank"
            rel="noopener noreferrer"

          >
            <h1></h1>

            <img
              src={work.w_img}
              alt={`Work ${index + 1}`}
              className="w-[1100px] h-auto object-cover rounded-2xl border-4 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:border-pink-500"
            />
          </a>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex gap-4 sm:gap-6 rounded-full border-2 px-6 py-3 text-base sm:text-lg font-bold 
        transition-all duration-300 cursor-pointer hover:gap-8">
        <p>Show More</p>
        <img src={arrow_icon} alt="arrow" className="w-5 sm:w-6" />
      </div>
    </div>
  );
};

export default MyWork;
