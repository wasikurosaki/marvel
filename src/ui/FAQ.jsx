import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswer = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqData = [
    {
      question:
        "1. How does Marvel Studies help students like me become academic superheroes?",
      answer:
        "Just like Nick Fury assembling the Avengers, we bring together your unique talents and guide you to achieve your academic goals. From career counseling and university selection to visa processing and post-arrival support, we’re your team of superheroes, helping you conquer every challenge on your education journey!",
    },
    {
      question: "How can I join Marvel Studies?",
      answer:
        "You can apply through our official website, where we offer various programs and courses that you can enroll in.",
    },
    {
      question: "What programs are offered at Marvel Studies?",
      answer:
        "We offer programs in various fields, including Computer Science, Engineering, and Research Development, all designed to push boundaries and foster innovation.",
    },
    {
      question: "What is Marvel Studies?",
      answer:
        "Marvel Studies is a research and learning hub focused on various fields of excellence, particularly in areas of science and technology.",
    },
    {
      question: "How can I join Marvel Studies?",
      answer:
        "You can apply through our official website, where we offer various programs and courses that you can enroll in.",
    },
  ];

  return (
    <div
      id="faq"
      className="faq-container flex items-center justify-center py-10 px-6 space-y-6 bg-white  h-auto z-0 md:mt-[30rem] mt-[40rem]"
    >
      {/* Right Section with Questions */}
      <div className="faq-questions w-full max-w-3xl">
        <motion.h2
          className="md:text-5xl text-3xl font-bold text-center mb-2 text-[#30315f]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Here To Answer All Your Questoins!
        </motion.h2>
        <motion.h3 className="justify-center flex mb-10 text-[#30315f] text-center">
          See if you find all the questions you need and join us for an
          adventure
        </motion.h3>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className="faq-item w-full p-6 bg-[#FAF9F6] rounded-lg shadow-md border border-gray-300 cursor-pointer hover:shadow-xl transition-all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex justify-between items-center">
                <motion.div
                  className="question md:text-xl text-md font-semibold text-[#30315f]"
                  whileHover={{ scale: 1.01 }}
                >
                  {item.question}
                </motion.div>
                <motion.div
                  className={`text-xl font-semibold text-[#30315f] transition-transform duration-300 ${
                    activeQuestion === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </motion.div>
              </div>
              <motion.div
                className={`answer mt-4 md:text-lg text-sm transition-all duration-300 ease-in-out ${
                  activeQuestion === index
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
                initial={{ opacity: 0 }}
                animate={{ opacity: activeQuestion === index ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              >
                {item.answer}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
