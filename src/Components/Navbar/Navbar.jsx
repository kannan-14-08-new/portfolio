import { useState } from "react";
import logo from "../../assets/theme_pattern.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [openMenu, setOpenMenu] = useState(false);

  const navLinks = [
    { id: "home", label: "Home", offset: 0 },
    { id: "about", label: "About Me", offset: 80 },
    { id: "services", label: "Services", offset: 50 },
    { id: "work", label: "Portfolio", offset: 50 },
    { id: "contact", label: "Contact", offset: 100 },
  ];

  return (
    <div className="navbar flex items-center justify-between px-6 md:px-12 py-4 relative">
      {/* Logo */}
      <div className="relative z-50 flex items-center gap-2">
        <p className="text-2xl font-bold">Kannan</p>
        <img src={logo} className="absolute w-[100px] -z-10 left-0 top-0" />
      </div>

      {/* Mobile Menu Button */}
      <img
        src={openMenu ? menu_close : menu_open}
        className="block md:hidden w-7 cursor-pointer z-50"
        onClick={() => setOpenMenu(!openMenu)}
      />

      {/* Desktop / Tablet Navbar */}
      <ul className="hidden md:flex items-center gap-10 lg:gap-[60px] text-lg">
        {navLinks.map((link) => (
          <li key={link.id} className="cursor-pointer flex flex-col gap-1">
            <AnchorLink offset={link.offset} href={`#${link.id}`}>
              <p onClick={() => setMenu(link.id)}>{link.label}</p>
            </AnchorLink>
            {menu === link.id && (
              <img src={underline} className="m-auto nav-image" />
            )}
          </li>
        ))}
      </ul>

      {/* Connect Button (Desktop/Tablet) */}
      <div className="hidden md:block font-bold px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-600 cursor-pointer hover:scale-105 transition-transform duration-300">
        <AnchorLink offset={100} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[70%] sm:w-[50%] text-center shadow-lg bg-gradient-to-b from-orange-400 to-purple-600 z-40 p-8 transition-transform duration-300 ease-in-out rounded-l-xl ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu List */}
        <ul className="flex flex-col gap-8 text-lg mt-12">
          {navLinks.map((link) => (
            <li key={link.id} className="cursor-pointer flex flex-col gap-1">
              <AnchorLink
                offset={link.offset}
                href={`#${link.id}`}
                onClick={() => {
                  setMenu(link.id);
                  setOpenMenu(false);
                }}
              >
                <p>{link.label}</p>
              </AnchorLink>
              {menu === link.id && (
                <img src={underline} className="m-auto nav-image" />
              )}
            </li>
          ))}
        </ul>

        {/* Connect Button (Mobile) */}
        <div className="mt-8 font-bold px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-600 cursor-pointer hover:scale-105 transition-transform duration-300">
          <AnchorLink
            offset={100}
            href="#contact"
            onClick={() => setOpenMenu(false)}
          >
            Connect With Me
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
