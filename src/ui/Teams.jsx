import React from "react";
import { motion } from "framer-motion";
import imtial from "../assets/Khondaker Imtial (COO).jpeg";

const teamMembers = [
  {
    name: "John Doe",
    designation1: "Captain America",
    designation2: "COO",
    description:
      "As the Captain America of Marvel Studies, I lead with heart, integrity, and a mission to serve. I ensure that our operations run smoothly and that every student feels supported and valued. Like Steve Rogers, I believe in teamwork and resilience. Together, we’ll face any challenge and ensure your success abroad. At Marvel Studies, we’re here to fight for your dreams, one step at a time—always standing by your side.",
    imgUrl: imtial,
  },
  {
    name: "Jane Smith",
    designation1: "Captain America",
    designation2: "COO",
    description:
      "As the Captain America of Marvel Studies, I lead with heart, integrity, and a mission to serve. I ensure that our operations run smoothly and that every student feels supported and valued. Like Steve Rogers, I believe in teamwork and resilience. Together, we’ll face any challenge and ensure your success abroad. At Marvel Studies, we’re here to fight for your dreams, one step at a time—always standing by your side.",
    imgUrl: imtial,
  },
  {
    name: "Michael Johnson",
    designation1: "Captain America",
    designation2: "COO",
    description:
      "As the Captain America of Marvel Studies, I lead with heart, integrity, and a mission to serve. I ensure that our operations run smoothly and that every student feels supported and valued. Like Steve Rogers, I believe in teamwork and resilience. Together, we’ll face any challenge and ensure your success abroad. At Marvel Studies, we’re here to fight for your dreams, one step at a time—always standing by your side.",
    imgUrl: imtial,
  },
  {
    name: "Emily Davis",
    designation1: "Captain America",
    designation2: "COO",
    description:
      "As the Captain America of Marvel Studies, I lead with heart, integrity, and a mission to serve. I ensure that our operations run smoothly and that every student feels supported and valued. Like Steve Rogers, I believe in teamwork and resilience. Together, we’ll face any challenge and ensure your success abroad. At Marvel Studies, we’re here to fight for your dreams, one step at a time—always standing by your side.",
    imgUrl: imtial,
  },
];

const Teams = () => {
  return (
    <div className="bg-white h-auto md:h-[100vh] px-8 mt-20 ">
      <h2 className="text-center md:text-5xl text-3xl font-extrabold text-[#30315f]">
        Our Collective Superheros
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
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-sm font-medium">{member.designation1}</p>
            <p className="text-sm font-medium mb-4">{member.designation2}</p>
            <p className="text-sm text-justify px-4">{member.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
