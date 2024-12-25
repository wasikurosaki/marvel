import React, { useState, useEffect } from "react";
import { GraduationCap, Users, Calendar, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const Counter = () => {
  const stats = [
    {
      icon: <GraduationCap size={32} className="text-white" />,
      count: 77,
      label: "SUCCESS STORIES",
    },
    {
      icon: <Users size={32} className="text-white" />,
      count: 123,
      label: "TRUSTED STUDNETS",
    },
    {
      icon: <Calendar size={32} className="text-white" />,
      count: 227,
      label: "SCHEDULES",
    },
    {
      icon: <BookOpen size={32} className="text-white" />,
      count: 7,
      label: "COUNTRIES",
    },
  ];

  const [currentCounts, setCurrentCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let count = 0;
      const targetCount = stat.count;
      const increment = targetCount > 100 ? Math.floor(targetCount / 100) : 1; // Small increment for small numbers

      const interval = setInterval(() => {
        count += increment;
        if (count >= targetCount) {
          clearInterval(interval);
          count = targetCount;
        }
        setCurrentCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = count;
          return newCounts;
        });
      }, 50); // Interval duration

      return () => clearInterval(interval); // Clean up interval on component unmount
    });
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-r from-gray-800 to-gray-900 py-16">
      {/* Background overlay with reduced opacity */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center">
                {stat.icon}
              </div>

              <motion.span
                className="text-4xl font-bold text-white"
                initial={{ scale: 0.5 }}
              >
                {currentCounts[index].toLocaleString()}
              </motion.span>

              <span className="text-gray-300 text-sm font-medium tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;
