import theme_pattern from "../../assets/theme_pattern.svg"
import mail_icon from "../../assets/mail_icon.svg"
import location_icon from "../../assets/location_icon.svg"
import call_icon from "../../assets/call_icon.svg"

const Contact = () => {

   const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6e494d02-db02-47f0-83c5-da6c4fbf7624");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
       alert(res.message)
    }
  };

  return (
    <div 
    id="contact"
    data-aos="fade-up" 
    className="flex justify-center flex-col items-center gap-[50px]  mt-[80px] mx-[50px]">

       <div className="contact-div text-center relative">
        <h1 className="text-4xl font-bold">Get In Touch</h1>
        <img src={theme_pattern} className="absolute top-[-15px] z-[-1]" />
       </div>

        <div className="flex gap-[130px] contact">
          
          <div className="flex flex-col gap-[30px] contact-top ">
            <h1 className="text-[50px] font-bold bg-[linear-gradient(270deg,_#DF8908_80%,_#B415FF_100%)] bg-clip-text text-transparent">Let's Talk</h1>
            <p className="w-[550px] text-[#D9D9D9] text-[15px] leading-[25px]">I'm currently avaliable to take on new projects you want me to work on. You can contact anytime.</p>

            <div className="flex flex-col gap-[30px] text-[#D8D8D8] text-[15px]">

              <div className="flex items-center gap-[20px]">
                 <img src={mail_icon}  /><p>Thalapathikrishna64@gmail.com</p>
              </div>

                <div  className="flex items-center gap-[20px]">
                  <img src={call_icon}  /><p>+91 9500787898</p>
              </div>

                <div  className="flex items-center gap-[20px]">
                 <img src={location_icon}  /><p>India, Tamil-Nadu, Ranipet</p>
              </div>

            </div>

            

          </div>

            <form onSubmit={onSubmit} className="flex flex-col items-start gap-[20px]">
              <label className="text-[#D8D8D8] font-bold text-[20px]">Your Name</label>
              <input type="text" placeholder="Enter Your Name" 
              name="name"
              className="w-[500px] h-[50px] pl-[20px] rounded-[4px] bg-[#32323c] text-[#A0A0A0] text-[15px]  border-2 border-gray-500 hover:border-yellow-600 transition-all duration-300 outline-none"/>

              <label className="text-[#D8D8D8] font-bold text-[20px]">Your Email</label>
              <input type="text" placeholder="Enter Your Email" 
              name="email"
              className="w-[500px] h-[50px] pl-[20px] rounded-[4px] bg-[#32323c] text-[#A0A0A0] text-[15px]  border-2 border-gray-500 hover:border-yellow-600 transition-all duration-300 outline-none"/>

              <label className="text-[#D8D8D8] font-bold text-[20px]">Write Your Message Here</label>
             <textarea name="message" rows="8" placeholder="Enter Your Message" 
             className="w-[550px] p-[25px] rounded-[4px] bg-[#32323c] text-[#A0A0A0] text-[15px] outline-none border-2 border-gray-500 hover:border-yellow-600 transition-all duration-300"></textarea> 
             
             <button type="submit" className="rounded-[50px] bg-[linear-gradient(264deg,_#DF8908_-5.09%,_#B415FF_106.28%)]
             text-[20px] px-[30px] py-[5px] cursor-pointer font-bold mb-7
             hover:scale-[1.08] transition-all duration-300">Submit</button>
            </form>

        </div> 

    </div>
  )
}

export default Contact
