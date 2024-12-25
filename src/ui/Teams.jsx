import React from "react";
import { motion } from "framer-motion";
import imtial from "../assets/Khondaker Imtial (COO).jpeg";

const teamMembers = [
  {
    name: "Koushequzzaman",
    designation1: "( Tony Stark )",
    designation2: "CEO",
    description:
      "I’m the Tony Stark of Marvel Studies—always innovating, strategizing, and building the ultimate suit of solutions for our students. With a sharp focus on technology and precision, I ensure every aspect of our consultancy is streamlined to help you achieve your dreams. At Marvel Studies, we don’t just guide you; we empower you to become the hero of your own academic journey. Suit up and let’s conquer your future—whatever it takes!",
    imgUrl:
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735111598/Koushequzzaman_CEO_Background_Removed.png",
  },
  {
    name: "Khondaker Imtial",
    designation1: "( Captain America ) ",
    designation2: "COO",
    description:
      "As the Captain America of Marvel Studies, I lead with heart, integrity, and a mission to serve. I ensure that our operations run smoothly and that every student feels supported and valued. Like Steve Rogers, I believe in teamwork and resilience. Together, we’ll face any challenge and ensure your success abroad. At Marvel Studies, we’re here to fight for your dreams, one step at a time—always standing by your side.",
    imgUrl:
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735111597/Khondaker_Imtial_COO_Background_Removed.png",
  },

  {
    name: "Hasan Faruk",
    designation1: "( DR Banner )",
    designation2: "Managing Partner",
    description:
      "You can call me the Hulk of Marvel Studies—calm and strategic when tackling legalities, but ready to smash through any obstacles that come your way. From visa processes to regulatory challenges, I ensure that no paperwork or legal issue stands between you and your education. With me on your side, your academic journey will be unstoppable. Let’s smash your fears and build your future!",
    imgUrl:
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735111598/Hasan_Faruk_Background_Removed.png",
  },
  {
    name: "Mahadi Hasan",
    designation1: "( Thor Odinson ) ",
    designation2: "Managing Partner",
    description:
      "I’m the Thor of Marvel Studies, wielding the financial hammer to ensure our students’ journeys are secure and supported. From scholarships to financial planning, I bring the power and balance needed to make your dream of studying abroad a reality. Just like Thor protects Asgard, I’m here to protect your aspirations and clear the path for your success. Let’s bring the thunder to your academic goals!",
    imgUrl:
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735111599/Mahadi_Hasan_Background_Removed.png",
  },
];

const Teams = () => {
  return (
    <div className="bg-white h-auto md:h-[100vh] px-8 mt-20 ">
      <h2 className="text-center md:text-5xl text-3xl font-extrabold text-[#30315f]">
        Our Collective Superheroes
      </h2>
      <div className="flex md:flex-row flex-col gap-6 items-center justify-center my-[25vh]">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#30315f",
              color: "#ffffff",
            }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl flex flex-col items-center p-6  transition mb-10"
          >
            <motion.div
              className="w-36 h-36 mb-6 flex justify-center items-center bg-gray-50 rounded-full border-[4px] border-[#30315f]  overflow-hidden"
              whileHover={{ borderColor: "#ffffff" }}
            >
              <img
                src={member.imgUrl}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2 ">{member.name}</h3>
            <p className="text-sm font-medium">{member.designation1}</p>
            <u>
              <p className="text-sm font-medium mb-4">{member.designation2}</p>
            </u>
            <p className="text-sm text-justify px-4">{member.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
