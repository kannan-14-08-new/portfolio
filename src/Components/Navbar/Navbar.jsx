import { useState } from "react";
import logo from "../../assets/theme_pattern.svg"
import underline from "../../assets/nav_underline.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="navbar flex items-center justify-between mx-9 mt-4">
      <p className="text-2xl font-bold relative">Kannan</p>
      <img src={logo} className="absolute w-[100px] z-[-1]" />

      {/* Mobile Menu Button */}
      <img
        src={openMenu ? menu_close : menu_open}
        className="block md:hidden w-7 cursor-pointer z-50"
        onClick={() => setOpenMenu(!openMenu)}
      />

      {/* Desktop Navbar */}
      <ul className="hidden md:flex items-center gap-[60px] text-[20px]">
        <li className="cursor-pointer flex flex-col gap-[5px]">
          <AnchorLink href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === 'home' && <img src={underline} className="m-auto nav-image" />}
        </li>
        <li className="cursor-pointer flex flex-col gap-[5px]">
          <AnchorLink offset={80} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === 'about' && <img src={underline} className="m-auto nav-image" />}
        </li>
        <li className="cursor-pointer flex flex-col gap-[5px]">
          <AnchorLink offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === 'services' && <img src={underline} className="m-auto nav-image" />}
        </li>
        <li className="cursor-pointer flex flex-col gap-[5px]">
          <AnchorLink offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === 'work' && <img src={underline} className="m-auto nav-image" />}
        </li>
        <li className="cursor-pointer flex flex-col gap-[5px]">
          <AnchorLink offset={100} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === 'contact' && <img src={underline} className="m-auto nav-image" />}
        </li>
      </ul>

      {/* Connect Button */}
      <div
        className="nav-connect contact-with px-2 py-2 font-bold rounded-[50px]
       bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-600
       cursor-pointer hover:scale-105 transition- flex flex-col gap-[5px] transform duration-300"
      >
        <AnchorLink offset={100} href="#contact">Connect With Me</AnchorLink>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-20% w-[50%] text-center bg-[linear-gradient(270deg,_#DF8908_10%,_#B415FF_100%)] z-40 p-8 transition-transform duration-300 rounded-[10px] font-bold  md:hidden ${
          openMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >

        {/* Mobile Menu List */}
        <ul className="flex flex-col gap-[40px] text-[20px] mt-10">
          <li className="cursor-pointer flex flex-col gap-[5px]">
            <AnchorLink href="#home">
              <p onClick={() => { setMenu("home"); setOpenMenu(false); }}>Home</p>
            </AnchorLink>
            {menu === 'home' && <img src={underline} className="m-auto nav-image" />}
          </li>
          <li className="cursor-pointer flex flex-col gap-[5px]">
            <AnchorLink offset={80} href="#about">
              <p onClick={() => { setMenu("about"); setOpenMenu(false); }}>About Me</p>
            </AnchorLink>
            {menu === 'about' && <img src={underline} className="m-auto nav-image" />}
          </li>
          <li className="cursor-pointer flex flex-col gap-[5px]">
            <AnchorLink offset={50} href="#services">
              <p onClick={() => { setMenu("services"); setOpenMenu(false); }}>Services</p>
            </AnchorLink>
            {menu === 'services' && <img src={underline} className="m-auto nav-image" />}
          </li>
          <li className="cursor-pointer flex flex-col gap-[5px]">
            <AnchorLink offset={50} href="#work">
              <p onClick={() => { setMenu("work"); setOpenMenu(false); }}>Portfolio</p>
            </AnchorLink>
            {menu === 'work' && <img src={underline} className="m-auto nav-image" />}
          </li>
          <li className="cursor-pointer flex flex-col gap-[5px]">
            <AnchorLink offset={100} href="#contact">
              <p onClick={() => { setMenu("contact"); setOpenMenu(false); }}>Contact</p>
            </AnchorLink>
            {menu === 'contact' && <img src={underline} className="m-auto nav-image" />}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
