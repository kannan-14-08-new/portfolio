import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile_img from "../../assets/my-photo.jpg";
const Hero = () => {
  return (
    <div 
    id="home" 
    data-aos="fade-up"
    data-aos-duration="8000"
    className=" hero flex items-center flex-col gap-[30px] min-w-[300px]">
      
      <img src={profile_img} alt=""  className="mt-[100px] w-[250px] rounded-full"/>

      <h1 className="text-4xl font-bold text-center w-[70%]
       my-name">
        <span className="bg-[linear-gradient(270deg,_#DF8908_10%,_#B415FF_100%)]
      bg-clip-text text-transparent">I'am Kannan</span>, 

      Front-End Developer </h1>

      <p className="w-[50%] text-center text-[20px] leading-[40px] hero-p">
        I'm a Frontend Developer specializing in React and Tailwind CSS. I love
        turning beautiful UI designs into fast, responsive websites and
        applications.
      </p>

      <div className="flex items-center gap-[25px] text-[20px] font-bold 
      mb-[50px] hero-buttons">
        
        <div className="bg-[linear-gradient(254deg,_#DF8908_-5.09%,_#B415FF_106.28%)] p-3 rounded-[50px] cursor-pointer
        hover:scale-[1.05] transition-all duration-500 ease-in-out">
        <AnchorLink offset={100} href="#contact">Connect With Me </AnchorLink>
        </div>
          
        <div className="p-3 border-2 cursor-pointer rounded-[50px] font-extralight px-5 hover:border-2 hover:border-[#B415FF]
        transition-all duration-300">
          My Resume</div>

      </div>

    </div>
  );
};

export default Hero;
