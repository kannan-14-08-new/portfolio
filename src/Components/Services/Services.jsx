import theme_pattern from "../../assets/theme_pattern.svg"
import arrow_icon from "../../assets/arrow_icon.svg"
 
const Services = () => {

  const services = [
  { no: "01",
    title: "Responsive Website Design",
    description:
      "I create mobile-friendly, responsive websites using modern layouts with Tailwind CSS.",
  },
  { no: "02",
    title: "React.js Frontend Development",
    description:
      "I build dynamic and interactive user interfaces using React components and hooks.",
  },
  { no: "03",
    title: "Landing Page Design",
    description:
      "I build clean and engaging landing pages for startups, portfolios, and businesses using Tailwind CSS.",
  },
  { no: "04",
    title: "Reusable Component Development",
    description:
      "I develop reusable, well-structured components for consistent and scalable frontend code.",
  },
  { no: "05",
    title: "Tailwind CSS Styling",
    description:
      "I use Tailwind to build visually appealing UIs with custom themes, gradients, animations, and transitions.",
  },
  { no: "06",
    title: "Portfolio & Personal Website Development",
    description:
      "I can help create personal or professional portfolios, showcasing skills, projects, and services.",
  },
];

  return (
    <div 
    id="services"
    data-aos="fade-in"
    data-aos-duration = "8000" 
    className=" flex flex-col items-center justify-center
    gap-[80px] mt-[80px]">

      <div className="text-center relative">
        <h1 className="text-4xl font-bold">My Services</h1>
        <img src={theme_pattern}  className="w-[200px] absolute bottom-0 right-0 z-[-1] "/>
      </div>
      
      <div className=" services grid grid-cols-3 gap-[40px] mb-[80px] mx-[20px]">
        {
            services.map((service, index) => (
               <div key={index} className="flex flex-col justify-center gap-[20px] p-[30px] 
               rounded-[10px] border-2 border-white transition-all duration-300 cursor-pointer overflow-auto
               hover:border-2 hover:border-[#ff00ff] hover:bg-[linear-gradient(45deg,#3f0028,#582300)]
               hover:scale-[1.04] ">
 
                <h3 className="text-[28px] font-bold">{service.no}</h3>
                <h2 className="text-[38px] font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">{service.title}</h2>
                <p className="text-[#d4d4d4] text-[24px] leading-[40px] ">{service.description}</p>
              

                 <div className="flex gap-[20px] items-center mt-[20px]">
                   <p>Read More</p>
                   <img src={arrow_icon}  />
                 </div>

               </div>
            ))  
        }
      </div>

    </div>
  )
}

export default Services
