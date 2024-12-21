import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/undraw_speech-to-text_4kov.svg";

const Hero = () => {
  return (
    <div className="flex flex-col">
      <div
        id="home"
        className="h-[100vh] flex flex-col md:flex-row md:px-20 px-0 items-center justify-between bg-gradient-to-r from-[#30315f] via-[#90427f] to-[#ce4a81] text-white"
      >
        {/* Text Section */}
        <div className="mt-60 md:mt-0 md:ml-10 ml-0 flex flex-col justify-center max-w-lg px-8 space-y-6 z-10 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-7xl font-extrabold leading-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            MARVEL STUDIES
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl font-medium"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Where Excellence Starts
          </motion.p>
          <a href="#about">
            <motion.button
              className="bg-[#30315f] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 hover:text-[#30315f] transition-all"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              whileHover={{ scale: 1.1 }}
            >
              Discover Marvel
            </motion.button>
          </a>
        </div>

        {/* Illustration Section */}
        <motion.div
          className="w-[350px] md:w-[500px] max-w-full z-20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src={heroImage} // Replace this with the URL of your Undraw PNG or SVG
            alt="Illustration"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Angled Bottom Section */}
      </div>
      {/* <div>asd</div> */}
    </div>
  );
};

export default Hero;
