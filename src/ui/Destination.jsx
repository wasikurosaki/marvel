import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// TagCloud component
const Destination = () => {
  const destinations = [
    { name: "Australia", size: "huge", x: 30, y: 20 },
    { name: "Sydney", size: "large", x: 15, y: 35 },
    { name: "Gold Coast", size: "medium", x: 45, y: 15 },
    { name: "Melbourne", size: "large", x: 60, y: 30 },
    { name: "Perth", size: "small", x: 75, y: 40 },
    { name: "Great Barrier Reef", size: "medium", x: 25, y: 50 },
    { name: "Brisbane", size: "medium", x: 40, y: 45 },
    { name: "Adelaide", size: "small", x: 55, y: 25 },
    { name: "Darwin", size: "small", x: 70, y: 55 },
    { name: "Tasmania", size: "medium", x: 85, y: 35 },
    { name: "Uluru", size: "large", x: 20, y: 60 },
    { name: "Blue Mountains", size: "medium", x: 35, y: 65 },
    { name: "New Zealand", size: "large", x: 50, y: 40 },
    { name: "Queenstown", size: "medium", x: 65, y: 45 },
    { name: "Auckland", size: "medium", x: 80, y: 50 },
    { name: "Fiji", size: "medium", x: 25, y: 30 },
    { name: "Singapore", size: "large", x: 55, y: 55 },
    { name: "Thailand", size: "medium", x: 70, y: 20 },
    { name: "Japan", size: "large", x: 85, y: 60 },

    // Additional destinations
  ];

  const getSizeClasses = (size) => {
    switch (size) {
      case "huge":
        return "text-3xl md:text-4xl font-extrabold";
      case "large":
        return "text-2xl md:text-3xl font-semibold";
      case "medium":
        return "text-xl md:text-2xl font-medium";
      default:
        return "text-lg md:text-xl font-light";
    }
  };

  // Random movement generator
  const generateRandomMovement = () => {
    return {
      x: Math.floor(Math.random() * 20) - 10, // Random value between -10 and 10
      y: Math.floor(Math.random() * 20) - 10, // Random value between -10 and 10
    };
  };

  return (
    <div
      id="destination"
      className="relative w-full md:h-[70vh] h-[100vh] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="flex justify-center md:text-5xl text-3xl font-extrabold font-marvel text-white ">
        <br></br>
        Popular Destinations
      </div>
      {destinations.map((destination, index) => {
        const { x, y } = generateRandomMovement(); // Generate random movement for each destination
        return (
          <motion.div
            key={index}
            className={`absolute ${getSizeClasses(
              destination.size
            )} mt-16 group`}
            style={{
              left: `${destination.x}%`,
              top: `${destination.y}%`,
              transformOrigin: "center",
            }}
            animate={{
              opacity: 1,
              x: [0, x, 0], // Random movement on x-axis
              y: [0, y, 0], // Random movement on y-axis
              scale: [1, 1.1, 1], // Scale effect for hover
              rotate: [0, 10, 0], // Add rotation for dynamic feel
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <span className="group relative">
              <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-opacity-80">
                {destination.name}
              </span>
              {destination.name[0]}{" "}
              {/* Display only the first letter initially */}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Destination;
