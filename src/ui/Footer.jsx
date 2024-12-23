import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/Marvel Studies Final PNG-01.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 font-marvel">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <img
            src={Logo}
            alt="Marvel Studies Logo"
            className="w-36 mb-4 filter invert brightness-0"
          />
        </div>

        {/* Location Section */}
        <div className="flex flex-col items-center text-center">
          <p className="text-white text-xl">
            Flat 4A, House 44, Block D<br /> Road 8, Niketon, Gulshan 1, Dhaka
            -1212
          </p>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2 text-center">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition duration-300"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition duration-300"
            >
              <FaTwitter size={28} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition duration-300"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700 transition duration-300"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-lg">
        &copy; {new Date().getFullYear()} Marvel Studies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
