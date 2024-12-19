import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/Marvel Studies Final PNG-01.png";

const Hero = () => {
  return (
    <div
      className="h-[100vh] bg-cover bg-center flex flex-col justify-center items-center text-white relative"
      style={{
        backgroundImage:
          "url('https://wallpapercat.com/w/full/2/9/c/167018-3840x2160-desktop-4k-australia-background-photo.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Logo Animation */}
      <motion.div
        className="relative h-[20rem] w-[20rem] overflow-hidden z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",

          repeatType: "reverse",
        }}
      >
        <img
          src={Logo}
          alt="Logo"
          className="h-full w-full object-cover object-top brightness-0 invert"
        />
      </motion.div>

      {/* Title */}
      <motion.div
        className="text-white md:font-extrabold z-10 md:text-7xl text-5xl font-extrabold mt-[-5rem] font-marvel"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
      >
        MARVEL STUDIES
      </motion.div>

      {/* Subtitle */}
      <motion.div
        className="text-white md:font-bold z-10 md:text-xl text-lg font-bold mt-2 font-marvel"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
      >
        Where Excellence Starts
      </motion.div>

      <motion.button
        className="mt-6 px-8 py-3 text-lg md:text-xl font-extrabold text-[#30315f] bg-white z-10 rounded-xl font-marvel"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.2 }}
      >
        Discover Marvel
      </motion.button>
    </div>
  );
};

export default Hero;
