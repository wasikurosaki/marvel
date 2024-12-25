import React from "react";
import { motion } from "framer-motion";
import email from "../assets/undraw_opened_47gd.svg";

const Contact = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  };

  return (
    <div
      id="contact"
      className="bg-white min-h-screen flex items-center justify-center px-4 my-[-10rem] "
    >
      <motion.div
        className="bg-white rounded-lg  p-8 w-full mb-10 md:mt-0 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the section is visible
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <h1 className="md:text-5xl text-3xl font-bold text-[#30315f]">
            CONTACT US
          </h1>
          <p className="text-gray-600 mt-2 ">
            Or reach out manually to
            <a
              href="mailto:uifresh.net@gmail.com"
              className="text-[#30315f] font-medium ml-1 underline"
            >
              info@marvelstudies.com
            </a>
          </p>
        </motion.div>

        {/* Form Section */}
        <div className="flex md:flex-row flex-col-reverse md:justify-around items-center md:px-20 gap-4 ">
          <motion.form
            className="flex flex-col md:w-1/2 w-full gap-6 md:items-start items-center"
            variants={containerVariants}
          >
            {/* Email Address */}
            <motion.div className="md:w-3/4 w-full " variants={itemVariants}>
              <label
                htmlFor="email"
                className="block  font-extrabold text-gray-700 text-md "
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#30315f] focus:border-[#30315f] sm:text-sm"
              />
              <p className="mt-1 text-xs text-gray-500">
                We’ll never share your email with anyone else.
              </p>
            </motion.div>

            {/* Name */}
            <motion.div className="md:w-3/4 w-full" variants={itemVariants}>
              <label
                htmlFor="name"
                className="block  font-extrabold text-gray-700 text-md "
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#30315f] focus:border-[#30315f] sm:text-sm"
              />
            </motion.div>

            {/* Message */}
            <motion.div className="md:w-3/4 w-full" variants={itemVariants}>
              <label
                htmlFor="message"
                className="block  font-extrabold text-gray-700 text-md "
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message here..."
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#30315f] focus:border-[#30315f] sm:text-sm"
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.div className="text-center" variants={itemVariants}>
              <button
                type="submit"
                className="bg-[#30315f] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#30315f] transition-all"
              >
                Send Message
              </button>
            </motion.div>
          </motion.form>

          {/* Image Section */}
          <motion.div variants={imageVariants}>
            <img className="h-auto md:w-[22rem] w-[10rem]" src={email} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
