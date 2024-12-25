import React, { useState } from "react";
import { motion } from "framer-motion";

const WhyChooseMarvel = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const cardsData = [
    {
      title: "Superpowered Expertise",
      description:
        "Our team brings together deep industry knowledge and an unyielding passion for student success. We ensure your ambitions align with the best-fit universities and programs.",
    },
    {
      title: "Youth-Centric Approach",
      description:
        "As champions of Gen Z, we understand your aspirations and struggles. Marvel Studies is your bridge to global opportunities, empowering you to write your own success story.",
    },
    {
      title: "Unwavering Support",
      description:
        "From counseling and document preparation to interview training and visa processing, we’re with you every step of the way to ensure your success.",
    },
    {
      title: "Celebrating Success",
      description:
        "Every acceptance letter is a victory for us, too. We go beyond limits to redefine what's possible for students like you, marking each success story as our own.",
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-[#30315f]">
          Why Choose Marvel Studies?
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-6 md:px-12">
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg w-full md:w-1/3 lg:w-1/4 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            onClick={() => toggleCard(index)}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-extrabold text-[#30315f] mb-4">
              {card.title}
            </h3>
            <motion.div
              className={`${
                activeCard === index
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden transition-all duration-300 ease-in-out`}
            >
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
            {activeCard === index && (
              <motion.div
                className="mt-4 text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {card.description}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseMarvel;
