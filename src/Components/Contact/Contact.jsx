import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

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
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div
      id="contact"
      data-aos="fade-up"
      className="flex flex-col items-center gap-12 mt-20 px-4 sm:px-8"
    >
      {/* Title */}
      <div className="contact-div text-center relative">
        <h1 className="text-3xl sm:text-4xl font-bold">Get In Touch</h1>
        <img
          src={theme_pattern}
          className="absolute top-[-15px] left-1/2 -translate-x-1/2 w-[150px] sm:w-[200px] opacity-70 -z-10"
          alt=""
        />
      </div>

      {/* Contact content wrapper */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 w-full max-w-6xl">
        {/* Contact Info */}
        <div className="flex flex-col gap-6 flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">
            Let&apos;s Talk
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-6 sm:leading-7 max-w-lg">
            I'm currently available to take on new projects you want me to work
            on. You can contact me anytime.
          </p>

          <div className="flex flex-col gap-5 text-gray-300 text-sm sm:text-base">
            <div className="flex items-center gap-3">
              <img src={mail_icon} alt="email icon" className="w-6 sm:w-7" />
              <p>Thalapathikrishna64@gmail.com</p>
            </div>

            <div className="flex items-center gap-3">
              <img src={call_icon} alt="phone icon" className="w-6 sm:w-7" />
              <p>+91 9500787898</p>
            </div>

            <div className="flex items-center gap-3">
              <img
                src={location_icon}
                alt="location icon"
                className="w-6 sm:w-7"
              />
              <p>India, Tamil-Nadu, Ranipet</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-4 flex-1 bg-opacity-10"
        >
          <label className="text-gray-300 font-bold text-base sm:text-lg">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="w-full h-12 pl-4 rounded bg-[#32323c] text-gray-400 text-sm sm:text-base border border-gray-500 hover:border-yellow-600 transition-all duration-300 outline-none"
          />

          <label className="text-gray-300 font-bold text-base sm:text-lg">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="w-full h-12 pl-4 rounded bg-[#32323c] text-gray-400 text-sm sm:text-base border border-gray-500 hover:border-yellow-600 transition-all duration-300 outline-none"
          />

          <label className="text-gray-300 font-bold text-base sm:text-lg">
            Write Your Message Here
          </label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter Your Message"
            className="w-full p-4 rounded bg-[#32323c] text-gray-400 text-sm sm:text-base border border-gray-500 hover:border-yellow-600 transition-all duration-300 outline-none"
          ></textarea>

          <button
            type="submit"
            className="rounded-full bg-gradient-to-r from-orange-400 to-purple-600 text-white text-base sm:text-lg px-6 py-2 font-bold hover:scale-105 transition-all duration-300 mt-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
