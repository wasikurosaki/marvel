import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const servicesData = [
  {
    title: "Career Counseling",
    title2: "( Professor X's Mindful Guidance )",
    description:
      "Our team channels the wisdom of Professor X, understanding your aspirations and helping you map out the perfect academic path. We help you discover your strengths and match them with the right courses and destinations.",
    icon: "https://res.cloudinary.com/dedntczjt/image/upload/v1735151265/1b1599259f1940fe95f3032456ba4c5d_Background_Removed_hjtc9y.png",
  },
  {
    title: "University Selection",
    title2: "( Iron Man’s Precision Engineering )",
    description:
      "Like Tony Stark crafting his suit, we meticulously analyze your goals and preferences to find the perfect university. Whether it’s the UK, USA, Australia, Denmark, or beyond, we ensure every detail fits your future.",
    icon: "https://res.cloudinary.com/dedntczjt/image/upload/v1735151170/png-clipart-round-blue-and-teal-logo-art-iron-man-logo-decal-symbol-iron-angle-electronics_Background_Removed_hlpgtb.png",
  },
  {
    title: "Application Assistance",
    title2: "( Spider-Man’s Web of Support )",
    description:
      "Applying to universities can feel like a tangled web, but with our help, it’s a breeze. From filling out forms to crafting compelling personal statements, we ensure your application sticks out in the best way.",
    icon: "https://res.cloudinary.com/dedntczjt/image/upload/v1735151171/spider-man-logo-0C9E5DCA9D-seeklogo_Background_Removed.com_hbx2sb.png",
  },
  {
    title: "Scholarship Guidance",
    title2: "( Captain America’s Shield of Support )",
    description:
      "Need financial support? We provide guidance on scholarships and funding opportunities, protecting your dreams like Cap’s indestructible shield.",
    icon: "https://res.cloudinary.com/dedntczjt/image/upload/v1735151170/Captain-America-Logo-1-1155x770_Background_Removed_nfe5gz.png",
  },
  {
    title: "Visa Processing",
    title2: "( Doctor Strange’s Portal to Success )",
    description:
      "Navigating visa procedures can feel like entering another dimension, but we’ve got the magic touch. Like Doctor Strange, we open portals to your academic future by guiding you through every step of the process.",
    icon: "https://res.cloudinary.com/dedntczjt/image/upload/v1735151170/Doctor_Strange_MCU_logo_Background_Removed_pxaqsw.png",
  },
  {
    title: "Pre-Departure Assistance",
    title2: "( Thor’s Hammer of Preparation )",
    description:
      "Moving to a new country can be overwhelming, but we arm you with everything you need to adapt and thrive. From cultural insights to travel tips, we ensure you’re ready to wield your full potential.",
    icon: "https://res.cloudinary.com/dedntczjt/image/upload/v1735151170/Mighty_Thor_Logo_Classic_Round_Sticker_Background_Removed_vwgbpm.png",
  },
  {
    title: "Post-Arrival Support",
    title2: "( Black Panther’s Community Spirit )",
    description:
      "Even after you arrive, we stay by your side. Whether it’s helping you settle in or connecting you with local communities, we embody Wakandan values of unity and care.",
    icon: "https://res.cloudinary.com/dedntczjt/image/upload/v1735151170/black-panther-icon-logo-png_seeklogo-424821_Background_Removed_hdfcth.png",
  },
  {
    title: "Test Preparation",
    title2: "( Hulk’s Power Training )",
    description:
      "From IELTS to GMAT, we help you smash through tests with confidence. Our tailored preparation strategies ensure you’re ready to ace any academic challenge.",
    icon: "https://res.cloudinary.com/dedntczjt/image/upload/v1735151170/Hulk-Logo-700x394_Background_Removed_axubjn.png",
  },
];

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div id="services" className="bg-white py-16">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#30315f] ">
          Our Services
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-xl mx-auto">
          At Marvel Studies, we offer a range of supercharged services designed
          to unleash your academic powers and help you conquer the world of
          education.
        </p>
      </div>

      {/* Services Grid */}
      <div
        ref={ref}
        className="mx-auto px-4 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center bg-white rounded-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            // initial={{ opacity: 0, y: 30 }}
            // animate={{
            //   opacity: inView ? 1 : 0,
            //   y: inView ? 0 : 30,
            // }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Icon */}

            <div
              className={`text-5xl md:text-6xl text-[#ce4a81] mb-6 ${
                index === 0 ? "invert" : ""
              }`}
            >
              <img className="h-20 w-auto" src={service.icon} />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-[#30315f] mb-4">
              {service.title}
            </h3>
            <h3 className="text-md font-bold text-[#30315f] mb-4">
              {service.title2}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
