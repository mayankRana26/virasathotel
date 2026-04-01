import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLink = ({ isActive }) =>
    `relative text-[12px] md:text-sm ${
      isActive ? "text-yellow-400" : "text-white"
    } hover:text-yellow-300 transition 
    after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-yellow-400 
    after:left-0 after:-bottom-1 after:transition-all hover:after:w-full`;

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all font-bold sm:text-4xl duration-500 bg-black mb-10`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 md:gap-10 px-3 md:px-6 py-3 md:py-4 flex-wrap">

        {/* LEFT LINKS */}
        <NavLink to="/" className={navLink}>Home</NavLink>
        <NavLink to="/rooms" className={navLink}>Rooms</NavLink>
        <NavLink to="/food" className={navLink}>Food</NavLink>

        {/* CENTER LOGO */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 mx-2 cursor-pointer"
        >
          <img
            src="/virasat_logo3.jpeg"
            alt="Virasat Logo"
            className="h-7 md:h-12 object-contain"
          />
        </div>

        {/* RIGHT LINKS */}
        {/* <NavLink to="/gallery" className={navLink}>Gallery</NavLink> */}
        <NavLink to="/contact" className={navLink}>Contact</NavLink>

        {/* CTA */}
        <button
          onClick={() => navigate("/booking")}
          className="bg-yellow-400 text-black px-3 md:px-5 py-1.5 md:py-2 rounded-full text-[11px] md:text-sm font-semibold hover:scale-105 transition"
        >
          Book
        </button>

      </div>
    </div>
  );
};

export default Navbar;