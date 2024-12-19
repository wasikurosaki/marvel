import React from "react";
import { motion } from "framer-motion";

const Destination = () => {
  // Words with their relative sizes and positions along the wave
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
    // Additional words for filling space
    { name: "Cairns", size: "small", x: 10, y: 25 },
    { name: "Hamilton Island", size: "medium", x: 35, y: 10 },
    { name: "Fraser Island", size: "medium", x: 50, y: 60 },
    { name: "Rottnest Island", size: "small", x: 70, y: 10 },
    { name: "Whitsundays", size: "medium", x: 30, y: 40 },
    { name: "Canberra", size: "small", x: 50, y: 70 },
    { name: "Rotorua", size: "medium", x: 65, y: 15 },
    { name: "Christchurch", size: "medium", x: 80, y: 65 },
    { name: "Wellington", size: "small", x: 25, y: 55 },
    { name: "Rarotonga", size: "medium", x: 45, y: 35 },
  ];

  const getSizeClasses = (size) => {
    switch (size) {
      case "huge":
        return "text-5xl md:text-6xl font-bold";
      case "large":
        return "text-3xl md:text-4xl font-semibold";
      case "medium":
        return "text-xl md:text-2xl font-medium";
      default:
        return "text-lg md:text-xl font-normal";
    }
  };

  return (
    <div
      className="h-[100vh] bg-cover bg-center text-white relative flex items-start justify-center"
      style={{
        backgroundImage:
          "url('https://wallpapercat.com/w/full/2/9/c/167018-3840x2160-desktop-4k-australia-background-photo.jpg')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>

      <div className="relative text-center w-full max-w-7xl px-4">
        <h1 className="md:text-[4rem] text-3xl mt-6 font-marvel font-extrabold text-white">
          Popular Destination
        </h1>

        {/* Word Cloud Container */}
        <motion.div
          className="mt-20 h-[60vh] relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name + index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${destination.x + Math.random() * 2 - 1}%`, // Add slight randomness to position
                top: `${destination.y + Math.random() * 2 - 1}%`,
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.05, // Faster delay to fill more quickly
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <motion.span
                className={`inline-block cursor-pointer ${getSizeClasses(
                  destination.size
                )} transition-all duration-300`}
                whileHover={{
                  scale: 1.05,

                  textShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
                }}
              >
                {destination.name}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Destination;
