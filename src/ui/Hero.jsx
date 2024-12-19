import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/undraw_speech-to-text_4kov.svg";

const Hero = () => {
  return (
    <div className="min-h-[100vh] flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
      {/* Text Section */}
      <div className="mt-40 md:mt-0 flex flex-col justify-center max-w-lg px-8 space-y-6 z-10 text-center md:text-left">
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
        <motion.button
          className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-all"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
        >
          Discover Marvel
        </motion.button>
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
      <div className="absolute bottom-0 w-full h-[10vh] bg-white clip-triangle"></div>

      <style jsx>{`
        .clip-triangle {
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
        }
      `}</style>
    </div>
  );
};

export default Hero;
