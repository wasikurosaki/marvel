import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/Marvel Studies Final PNG-01.png"; // Adjust path if needed

const About = () => {
  return (
    <div className="h-auto flex flex-col md:flex-row justify-around items-center mt-20 px-6 md:px-12">
      {/* Left Section (Text) */}
      <motion.div
        className="flex flex-col gap-4 w-full md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
      >
        <div className="font-extrabold md:text-5xl text-2xl text-[#30315f] font-marvel">
          Why Choose Us?
        </div>
        <div className="text-lg md:text-xl text-[#30315f] text-justify">
          We provide a one-stop solution for everything from program selection
          to visa processing, and post-visa services. Plus, we offer free
          PTE/IELTS training, which is rare among consultancies. That means you
          don’t have to run around to several institutions in the midst of all
          your current responsibilities. We take care of all of it!
        </div>
      </motion.div>

      {/* Right Section (Image) */}
      <motion.div
        className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.8 }}
        transition={{ delay: 0.5, duration: 3, ease: "easeOut" }}
      >
        <img
          src={Logo}
          alt="Marvel Logo"
          className="h-[250px] md:h-[350px] object-contain"
        />
      </motion.div>
    </div>
  );
};

export default About;
