import React, { useState } from "react";
import logo from "../assets/Marvel Studies Final PNG-01.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Adjust the path based on your project structure

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/40 backdrop-blur-lg py-4 px-6 md:px-20 shadow-md font-extrabold z-50 font-marvel border border-white/10">
      {/* Main Header */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-auto w-[3rem]" />
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
        <div className="hidden md:flex space-x-6 font-semibold text-black text-xl">
          <button className="hover:text-[#ce4a81]">
            <a href="#home">Home</a>
          </button>
          <button className="hover:text-[#ce4a81]">
            {" "}
            <a href="#about">About</a>
          </button>
          <button className="hover:text-[#ce4a81]">
            <a href="#partners">Partners</a>
          </button>
          <button className="hover:text-[#ce4a81]">
            <a href="#services">Services</a>
          </button>

          <button className="hover:text-[#ce4a81]">
            <a href="#faq">FAQ</a>
          </button>
          <button className="hover:text-[#ce4a81]">
            <a href="#contact">Contact</a>
          </button>
        </div>

        {/* Socials for Larger Screens */}
        <div className="hidden md:flex space-x-4">
          <button>
            <FaFacebook size={28} color="#30315f" />
          </button>
          <button>
            <FaTwitter size={28} color="#30315f" />
          </button>
          <button>
            <FaInstagram size={28} color="#30315f" />
          </button>
          <button>
            <FaLinkedin size={28} color="#30315f" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } transition-all duration-300 ease-in-out overflow-hidden shadow-lg rounded-lg mt-4 md:hidden`}
      >
        {/* Navigation Links */}
        <div className="flex flex-col items-center space-y-4 p-6">
          <a className="w-full" href="#home">
            <button
              onClick={toggleMenu}
              className="w-full text-center px-4 py-2 text-gray-700 font-semibold text-lg rounded-md hover:bg-gradient-to-r from-[#90427f] to-[#ce4a81] hover:text-white transition-all duration-200"
            >
              Home
            </button>
          </a>
          <a className="w-full" href="#about">
            <button
              onClick={toggleMenu}
              className="w-full text-center px-4 py-2 text-gray-700 font-semibold text-lg rounded-md hover:bg-gradient-to-r from-[#90427f] to-[#ce4a81] hover:text-white transition-all duration-200"
            >
              About
            </button>
          </a>
          <a className="w-full" href="#partners">
            <button
              onClick={toggleMenu}
              className="w-full text-center px-4 py-2 text-gray-700 font-semibold text-lg rounded-md hover:bg-gradient-to-r from-[#90427f] to-[#ce4a81] hover:text-white transition-all duration-200"
            >
              Partners
            </button>
          </a>
          <a className="w-full" href="#services">
            <button
              onClick={toggleMenu}
              className="w-full text-center px-4 py-2 text-gray-700 font-semibold text-lg rounded-md hover:bg-gradient-to-r from-[#90427f] to-[#ce4a81] hover:text-white transition-all duration-200"
            >
              Services
            </button>
          </a>
          <a className="w-full" href="#faq">
            <button
              onClick={toggleMenu}
              className="w-full text-center px-4 py-2 text-gray-700 font-semibold text-lg rounded-md hover:bg-gradient-to-r from-[#90427f] to-[#ce4a81] hover:text-white transition-all duration-200"
            >
              FAQ
            </button>
          </a>
          <a className="w-full" href="#contact">
            <button
              onClick={toggleMenu}
              className="w-full text-center px-4 py-2 text-gray-700 font-semibold text-lg rounded-md hover:bg-gradient-to-r from-[#90427f] to-[#ce4a81] hover:text-white transition-all duration-200"
            >
              Contact
            </button>
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-6 border-t border-gray-200 pt-4 flex justify-center space-x-6 mb-2">
          <button>
            <FaFacebook size={28} color="#30315f" />
          </button>
          <button>
            <FaTwitter size={28} color="#30315f" />
          </button>
          <button>
            <FaInstagram size={28} color="#30315f" />
          </button>
          <button>
            <FaLinkedin size={28} color="#30315f" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
