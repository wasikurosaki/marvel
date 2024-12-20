import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/Marvel Studies Final PNG-01.png"; // Adjust path if needed

const About = () => {
  return (
    <>
      <div className="text-center mb-16" id="about">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#30315f] font-marvel mt-4">
          About Us
        </h1>
      </div>
      <div className="flex flex-col md:flex-row h-auto md:h-[70vh] justify-around items-center px-6 md:px-12 mt-8">
        {/* Left Section (Text) */}
        <motion.div
          className="flex flex-col gap-6 w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        >
          <p className="text-lg text-gray-600 max-w-xl mx-auto text-justify">
            At Marvel Studies, we specialize in providing innovative,
            research-driven solutions that help businesses excel. Our team is
            dedicated to leveraging cutting-edge technologies to deliver
            services that improve operations, streamline processes, and boost
            profitability. Whether you're looking for expert guidance,
            comprehensive solutions, or simply want to learn more about the
            latest trends in the industry, we are here to assist you every step
            of the way.
          </p>
        </motion.div>

        {/* Right Section (Image) */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          <img
            src={Logo}
            alt="Marvel Logo"
            className="h-auto md:w-[20rem] w-[15rem] object-contain md:mb-0 mb-12"
          />
        </motion.div>
      </div>
    </>
  );
};

export default About;
