import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import classNames from "classnames";
import heroImage from "../assets/Text on plane on.png";
import serviceIcon1 from "../assets/accomadation.svg"; // Example service icons
import serviceIcon2 from "../assets/health.svg";
import serviceIcon3 from "../assets/test.svg";
import serviceIcon4 from "../assets/passport.svg";
import serviceIcon5 from "../assets/edu.png";

const services = [
  {
    id: 1,
    icon: serviceIcon1,
    label: "Accomadation",
    target: "#service1",
    bgColor: "bg-red-100", // Tailwind class for pastel red
    txt: "Professor X helps map your academic path and match you with the right courses.",
  },
  {
    id: 2,
    icon: serviceIcon2,
    label: "Health Care",
    target: "#service2",
    bgColor: "bg-green-100", // Tailwind class for pastel green
    txt: "Iron Man's precision helps you find the perfect university for your goals.",
  },
  {
    id: 3,
    icon: serviceIcon3,
    label: "Test Assistance",
    target: "#service3",
    bgColor: "bg-blue-100", // Tailwind class for pastel blue
    txt: "Spider-Man helps you with forms and personal statements to stand out.",
  },
  {
    id: 4,
    icon: serviceIcon4,
    label: "Visa Processing",
    target: "#service4",
    bgColor: "bg-yellow-100", // Tailwind class for pastel yellow
    txt: "Captain America guides you through scholarship and funding opportunities.",
  },
  {
    id: 5,
    icon: serviceIcon5,
    label: "Educatoin Counselling",
    target: "#service5",
    bgColor: "bg-purple-100", // Tailwind class for pastel purple
    txt: "Doctor Strange helps you navigate visa procedures for your future.",
  },
  // {
  //   id: 8,
  //   icon: serviceIcon2,
  //   label: "Test Preparation",
  //   target: "#service8",
  //   bgColor: "bg-orange-100", // Tailwind class for pastel orange
  //   txt: "Hulk helps you smash through tests like IELTS and GMAT with tailored strategies.",
  // },
];

const Hero = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div
      id="hero"
      className="flex flex-col justify-center items-center md:h-[120vh] h-[118vh] bg-white md:mt-0"
    >
      {/* Hero Image */}
      <img
        className="w-full h-auto mt-8 md:w-[1100px] md:mt-[-170px] z-10"
        src="https://res.cloudinary.com/dedntczjt/image/upload/t_2xred/v1735128990/No_box_vqso8y.png"
        alt="Hero"
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="absolute rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-3xl w-60 h-72 md:w-[300px] md:h-[300px] left-1/3 md:top-96 "></div>
        <div className="absolute rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 opacity-30 blur-3xl w-72 h-72 md:w-[300px] md:h-[300px] right-1/4 md:top-38 "></div>
      </div>

      {/* Slider and Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-10  bg-[#e9eaf7] z-10 py-10">
        {/* Left Section */}
        <div className="flex flex-col gap-4 md:w-1/3 text-left md:ml-32 ml-0">
          <h1 className="text-2xl md:text-3xl font-bold text-[#30315f] md:text-left text-center">
            We serve…Whatever it takes
          </h1>
          <p className="text-lg md:text-md text-gray-600 md:text-left text-center">
            Welcome to Marvel Studies, where the power of dreams meets the
            determination to make them a reality!
          </p>
          <a href="#contact">
            <button className="px-6 py-4 w-full md:w-[250px] bg-[#30315f] text-white rounded-full text-sm font-semibold hover:bg-[#505f88] transition duration-300 mt-6 flex items-center justify-center gap-2">
              Book a consultation now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </button>
          </a>
        </div>

        {/* Right Section (Slider) */}
        {/* <div className="block md:w-[300px] w-[200px] mt-8 md:mt-0 md:mr-32 mr-0">
          <Slider {...sliderSettings}>
            {services.map((service) => (
              <a href="#services">
                <motion.div
                  whileHover={{ y: -8 }} // Rise up on hover
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className=" flex justify-center mb-4 mt-2">
                    <img
                      className="w-24 md:w-[10rem] h-auto object-contain my-[-30px]"
                      src={service.icon}
                      alt={service.label}
                    />
                  </div>
                </motion.div>
              </a>
            ))}
          </Slider>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
