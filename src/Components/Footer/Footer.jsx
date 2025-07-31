import theme_pattern from "../../assets/theme_pattern.svg"
import user_icon from "../../assets/user_icon.svg"
const Footer = () => {
  return (

    <div data-aos="fade-down" 
     data-aos-duration = "1000"
    className='flex flex-col gap-[20px] mx-[30px] mt-[80px]'>
      
     <div className="flex justify-between footer">

      <div className="relative flex flex-col gap-[10px]">
         <p className="text-2xl font-bold">Kannan</p>
        <img src={theme_pattern} className="absolute w-[100px] z-[-1] top-0"/>
         <p className="text-[15px] w-[400px] footer-p">I am a Front-End Developer from India, Tamil-Nadu and I am a Fresher</p>
      </div>
    
    <div className="flex items-center gap-[30px] footer-input">
      <div className="flex gap-[20px] px-[20px] py-[10px] rounded-[50px] bg-[#32323B] pr-[50px] border-2 border-gray-600 hover:border-pink-600 transition-all duration-300">
        <img src={user_icon} />
        <input type="email" placeholder="Enter Your Email"  className="outline-none bg-transparent text-[#a0a0a0] email-input"/>
      </div>
       <div className="text-[20px] rounded-[50px] bg-[linear-gradient(264deg,_#DF8908_-5.09%,_#B415FF_106.28%)]
       px-5 py-[10px] font-bold cursor-pointer hover:scale-[1.08] transition-all duration-300 sub ">Subscribe</div>
    </div>
 
     </div>

     <hr />

     <div className="flex justify-between text-[15px] footer-bottom">
      <p>@ 2025 Kannan. All rights reserved.</p>
      <div className="flex gap-[40px] mb-[50px]">
        <p>Term of Services</p>
        <p>Privacy Policy</p>
        <p>Connect with me</p>
      </div>
     </div>

    </div>
  )
}

export default Footer
