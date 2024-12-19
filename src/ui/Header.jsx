import React, { useState } from "react";
import logo from "../assets/Marvel Studies Final PNG-01.png"; // Adjust the path based on your project structure

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white py-4 px-6 shadow-md font-extrabold z-50 font-marvel">
      {/* Main Header */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-8 w-8" />
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="text-black focus:outline-none md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 6h18M3 12h18M3 18h18"
            />
          </svg>
        </button>

        {/* Pages Section for Larger Screens */}
        <div className="hidden md:flex space-x-6 font-semibold text-black">
          <button className="hover:text-[#ce4a81]">
            <a href="">Home</a>
          </button>
          <button className="hover:text-[#ce4a81]">
            {" "}
            <a href="#about">About</a>
          </button>
          <button className="hover:text-[#ce4a81]">Services</button>
          <button className="hover:text-[#ce4a81]">Portfolio</button>
          <button className="hover:text-[#ce4a81]">Contact</button>
        </div>

        {/* Socials for Larger Screens */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-black hover:text-[#ce4a81]">
            F
          </a>
          <a href="#" className="text-black hover:text-[#ce4a81]">
            T
          </a>
          <a href="#" className="text-black hover:text-[#ce4a81]">
            L
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } transition-all duration-300 ease-in-out overflow-hidden bg-white shadow-md rounded-md mt-4 md:hidden`}
      >
        {/* Pages */}
        <div className="flex flex-col space-y-2 p-4">
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
            Home
          </button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
            About
          </button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
            Services
          </button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
            Portfolio
          </button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
            Contact
          </button>
        </div>

        {/* Socials */}
        <div className="mt-4 border-t pt-4 flex justify-around">
          <a href="#" className="text-black hover:text-[#ce4a81]">
            F
          </a>
          <a href="#" className="text-black hover:text-[#ce4a81]">
            T
          </a>
          <a href="#" className="text-black hover:text-[#ce4a81]">
            L
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
