import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import classNames from "classnames";
import heroImage from "../assets/Text on plane on.png";
import serviceIcon1 from "../assets/Marvel Studies Final PNG-01.png"; // Example service icons
import serviceIcon2 from "../assets/Marvel Studies Final PNG-01.png";
import serviceIcon3 from "../assets/Marvel Studies Final PNG-01.png";

const services = [
  {
    id: 1,
    icon: serviceIcon1,
    label: "Career Counseling",
    target: "#service1",
    bgColor: "bg-red-100", // Tailwind class for pastel red
    txt: "Professor X helps map your academic path and match you with the right courses.",
  },
  {
    id: 2,
    icon: serviceIcon2,
    label: "University Selection",
    target: "#service2",
    bgColor: "bg-green-100", // Tailwind class for pastel green
    txt: "Iron Man's precision helps you find the perfect university for your goals.",
  },
  {
    id: 3,
    icon: serviceIcon3,
    label: "Application Assistance",
    target: "#service3",
    bgColor: "bg-blue-100", // Tailwind class for pastel blue
    txt: "Spider-Man helps you with forms and personal statements to stand out.",
  },
  {
    id: 4,
    icon: serviceIcon1,
    label: "Scholarship Guidance",
    target: "#service4",
    bgColor: "bg-yellow-100", // Tailwind class for pastel yellow
    txt: "Captain America guides you through scholarship and funding opportunities.",
  },
  {
    id: 5,
    icon: serviceIcon2,
    label: "Visa Processing",
    target: "#service5",
    bgColor: "bg-purple-100", // Tailwind class for pastel purple
    txt: "Doctor Strange helps you navigate visa procedures for your future.",
  },
  {
    id: 6,
    icon: serviceIcon3,
    label: "Pre-Departure Assistance",
    target: "#service6",
    bgColor: "bg-pink-100", // Tailwind class for pastel pink
    txt: "Thor provides tips and insights to help you adapt and thrive.",
  },
  {
    id: 7,
    icon: serviceIcon1,
    label: "Post-Arrival Support",
    target: "#service7",
    bgColor: "bg-teal-100", // Tailwind class for pastel teal
    txt: "Black Panther supports your settlement and community connections.",
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
    <div className="flex flex-col justify-center items-center md:h-[120vh] h-[118vh] bg-white">
      {/* Hero Image */}
      <img
        className="w-full h-auto mt-8 md:w-[1100px] md:mt-[-170px] z-10"
        src="https://res.cloudinary.com/dedntczjt/image/upload/v1735128990/No_box_vqso8y.png"
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
                  key={service.id}
                  className={classNames(
                    "flex flex-col items-center justify-center rounded-xl  my-8 h-[200px]",
                    service.bgColor // Dynamic Tailwind class for background color
                  )}
                >
                  <div className=" flex justify-center mb-4 mt-2">
                    <img
                      className="w-24 md:w-32 h-auto object-contain my-[-30px]"
                      src={service.icon}
                      alt={service.label}
                    />
                  </div>

                  <h1 className="text-lg md:text-xl font-semibold pb-2 text-center text-[#30315f] mt-10  ">
                    {service.label}
                  </h1>
                  <p className="text-sm md:text-md text-[30315f] font-semibold px-4 pb-6 text-center">
                    Learn More!
                  </p>
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
