import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/Marvel Studies Final PNG-01.png"; // Adjust path if needed

const cardData = [
  {
    title: "Superpowered Expertise",
    content:
      "Our team brings together deep industry knowledge and an unyielding passion for student success. We ensure your ambitions align with the best-fit universities and programs.",
    delay: 0.2,
  },
  {
    title: "Youth-Centric Approach",
    content:
      "As champions of Gen Z, we understand your aspirations and struggles. Marvel Studies is your bridge to global opportunities, empowering you to write your own success story.",
    delay: 0.4,
  },
  {
    title: "Unwavering Support",
    content:
      "From counseling and document preparation to interview training and visa processing, we’re with you every step of the way to ensure your success.",
    delay: 0.6,
  },
  {
    title: "Celebrating Success",
    content:
      "Every acceptance letter is a victory for us, too. We go beyond limits to redefine what's possible for students like you, marking each success story as our own.",
    delay: 0.8,
  },
];

const About = () => {
  return (
    <>
      {/* Existing About Us Section */}
      <div className="md:mt-[-4rem] mt-0 h-auto md:mb-0">
        <div className="text-center" id="about">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#30315f] font-mono md:mb-0 mb-6">
            About Us
          </h1>
        </div>
        <div className="flex flex-col md:flex-row h-auto md:h-[70vh] justify-around items-center px-6 md:px-12">
          {/* Left Section (Text) */}
          <motion.div
            className="flex flex-col gap-6 w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          >
            <p className="text-lg text-gray-600 max-w-xl mx-auto text-justify">
              Dreaming of studying in{" "}
              <span className="font-bold text-[#30315f]">
                the UK, USA, Australia, Malaysia, New Zealand, or Denmark
              </span>
              ? We’ve got you covered. Whether you’re starting fresh with a{" "}
              <span className="font-bold text-[#30315f]">
                Foundation Course
              </span>
              , diving into a{" "}
              <span className="font-bold text-[#30315f]">
                Bachelor’s Degree
              </span>
              , or leveling up with a{" "}
              <span className="font-bold text-[#30315f]">
                Master’s or Pre-Master’s Program
              </span>
              , our expert guidance ensures a seamless journey from application
              to acceptance. With a proven track record of success stories,
              particularly in destinations like{" "}
              <span className="font-bold text-[#30315f]">Australia</span> and
              the <span className="font-bold text-[#30315f]">UK</span>, we pride
              ourselves on making the impossible possible. From crafting
              compelling applications to navigating{" "}
              <span className="font-bold text-[#30315f]">
                visa complexities
              </span>
              , we’ll stand by your side like a true{" "}
              <span className="font-bold text-[#30315f]">Avenger squad</span>,
              equipped with unmatched dedication and expertise.
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
              className="h-auto md:w-[20rem] w-[15rem] object-contain md:mb-0 mb-10"
            />
          </motion.div>
        </div>
      </div>

      {/* New Section with Cards */}
      <div className="py-12 bg-white">
        <div className="text-center mb-12">
          <h2 className="md:text-4xl text-2xl font-extrabold text-[#30315f]">
            Why Choose Marvel Studies?
          </h2>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-1 justify-center gap-8 px-6 md:px-12">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg w-full md:w-[20rem]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: card.delay, duration: 0.6 }}
            >
              <h3 className="md:text-2xl text-xl font-extrabold text-[#30315f] mb-4 md:text-start text-center">
                {card.title}
              </h3>
              <p className="text-gray-600 text-justify">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
