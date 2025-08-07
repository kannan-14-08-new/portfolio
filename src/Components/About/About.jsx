import theme_pattern from "../../assets/theme_pattern.svg";
const About = () => {

  const skillStyle = 'flex gap-[20px] items-center transition-all duration-500 hover:scale-[1.02]'
  const skillStyleP = 'w-[200px] text-[20px] font-bold'
  const skillStylePer = ' outline-none border-none h-[8px] rounded-[50px] bg-[linear-gradient(264deg,_#DF8908_-5.09%,_#B415FF_106.28%)]'

  return (
    <div 
    id="about" 
    data-aos="fade-up"
    className="flex flex-col items-center justify-center gap-[80px] p-7 mt-[50px]">

      <div className="relative">
        <h1 className="text-4xl font-bold ">About Me</h1>
        <img src={theme_pattern}  className="w-[200px] absolute bottom-0 right-0 z-[-1]"/>
      </div>

      <div className="flex gap-[80px] items-center about">
   
        <div className="flex flex-col gap-[80px]">
          <div className="flex flex-col gap-[20px] text-[24px] font-bold">
            <p className="par">
              I'm a passionate frontend developer with a strong focus on
              building clean and responsive user interfaces using React.js and
              Tailwind CSS. As a beginner, I'm continuously learning and
              improving my skills by working on real-world projects
            </p>
          </div>

          <div className="flex flex-col gap-[20px] about-skill"> 
            <div className={`${skillStyle} skill`}><p className={`${skillStyleP}`}>HTML & CSS</p> <hr className= {`${skillStylePer} w-[70%]`} /></div>
            <div className={`${skillStyle} skill`}><p className={`${skillStyleP}`}>Javascript Basic & Advance</p> <hr className= {`${skillStylePer} w-[50%]`} /></div>
            <div className={`${skillStyle} skill`}><p className={`${skillStyleP}`}>React JS and Tailwind</p> <hr className= {`${skillStylePer} w-[45%]`} /></div>
            <div className={`${skillStyle} skill`}><p className={`${skillStyleP}`}>Next Js and TypeScript</p> <hr className= {`${skillStylePer} w-[80%]`} /></div>

          </div>
        </div>
      </div>

     <div className="flex w-full justify-around mb-[80px] exp">

      <div className="text-center hover:scale-[1.09] transition-transform duration-500 ease-in-out cursor-pointer">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700
        bg-clip-text text-transparent">I am a Fresher</h1>
        <p>4-Month of Experience</p>
      </div>

       <hr className="border-2 h-[60px]"/>
     
      <div className="text-center hover:scale-[1.09] transition-transform duration-500 ease-in-out cursor-pointer">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700
        bg-clip-text text-transparent">05+</h1>
        <p>Project Completed</p>
      </div>
     
       
     </div>

    </div>
  );
};

export default About;
