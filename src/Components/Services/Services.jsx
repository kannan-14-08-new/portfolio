import theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow_icon.svg";

const Services = () => {
  const services = [
    {
      no: "01",
      title: "Responsive Website Design",
      description:
        "I create mobile-friendly, responsive websites using modern layouts with Tailwind CSS.",
    },
    {
      no: "02",
      title: "React.js Frontend Development",
      description:
        "I build dynamic and interactive user interfaces using React components and hooks.",
    },
    {
      no: "03",
      title: "Landing Page Design",
      description:
        "I build clean and engaging landing pages for startups, portfolios, and businesses using Tailwind CSS.",
    },
    {
      no: "04",
      title: "Reusable Component Development",
      description:
        "I develop reusable, well-structured components for consistent and scalable frontend code.",
    },
    {
      no: "05",
      title: "Tailwind CSS Styling",
      description:
        "I use Tailwind to build visually appealing UIs with custom themes, gradients, animations, and transitions.",
    },
    {
      no: "06",
      title: "Portfolio & Personal Website Development",
      description:
        "I can help create personal or professional portfolios, showcasing skills, projects, and services.",
    },
  ];

  return (
    <div
      id="services"
      data-aos="fade-in"
      data-aos-duration="8000"
      className="flex flex-col items-center justify-center gap-16 mt-20 px-4 sm:px-8"
    >
      {/* Heading */}
      <div className="text-center relative">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">My Services</h1>
        <img
          src={theme_pattern}
          className="w-[140px] sm:w-[180px] md:w-[200px] absolute bottom-0 right-0 opacity-70 -z-10"
          alt=""
        />
      </div>

      {/* Responsive Grid */}
      <div className="services grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20 w-full max-w-7xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col justify-center gap-4 p-5 sm:p-6 md:p-8 
              rounded-lg border-2 border-white transition-all duration-300 cursor-pointer 
              hover:border-pink-500 hover:bg-gradient-to-tr hover:from-[#3f0028] hover:to-[#582300] hover:scale-[1.03]"
          >
            <h3 className="text-xl sm:text-2xl font-bold">{service.no}</h3>
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
              {service.title}
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {service.description}
            </p>

            <div className="flex gap-3 items-center mt-3 text-sm sm:text-base">
              <p>Read More</p>
              <img src={arrow_icon} alt="arrow" className="w-5 sm:w-6" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
