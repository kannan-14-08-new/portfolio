import theme_pattern from "../../assets/theme_pattern.svg"
import mywork_data from "../../assets/mywork_data"
import arrow_icon from "../../assets/arrow_icon.svg"
const MyWork = () => {
   
  return (
    <div 
    id="work"
    data-aos="fade-right" 
    className='flex flex-col items-center justify-center gap-[50px] mt-[60px]'>

      <div className="text-center relative">
        <h1 className="text-3xl font-bold">My Latest Work</h1>
        <img src={theme_pattern} className="absolute top-[-20px] left-[10px] z-[-1]"/>
      </div>

     <div className="flex flex-wrap justify-center gap-[50px] mt-[30px] my-work">
       {
        mywork_data.map((work, index) => (
          <a href={work.href} target="_blank">
          <img key={index} src={work.w_img} className=" transition-all duration-300 cursor-pointer
          hover:scale-[1.08] hover:border-[#ff00ff] border-4 rounded-[20px] w-[600px] h-[300px]"/></a>
        ))
        
       }
     </div>

       <div className="flex gap-[15px] rounded-[50px] border-2 p-[20px] text-[20px] font-bold 
       transition-all duration-300 cursor-pointer hover:gap-[30px]">
         <p>Show More</p>
         <img src={arrow_icon} />
        </div>   

    </div>
  )
}

export default MyWork
