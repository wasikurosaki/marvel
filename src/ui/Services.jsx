import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const servicesData = [
  {
    title: "Web Development",
    description: "Building responsive and modern websites.",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    description: "Creating mobile apps for iOS and Android.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description: "Designing user-friendly interfaces and experiences.",
    icon: "🎨",
  },
  {
    title: "SEO Optimization",
    description: "Optimizing websites for better search engine rankings.",
    icon: "🔍",
  },
  {
    title: "Cloud Solutions",
    description: "Providing scalable cloud-based solutions.",
    icon: "☁️",
  },
  {
    title: "Digital Marketing",
    description: "Helping businesses grow through online marketing.",
    icon: "📈",
  },
];

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.3, // Trigger when 30% of the section is in view
  });

  return (
    <div>
      <div className="text-center mb-20 mt-8">
        <h1 className="md:text-[4rem] text-3xl font-marvel font-extrabold text-[#30315f]">
          Our Services
        </h1>
        <div className="w-16 h-1 bg-[#ce4a81] mx-auto mt-2"></div>
      </div>
      <div ref={ref} className="h-auto my-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white/30 backdrop-blur-lg rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:shadow-2xl hover:shadow-[#30315f]"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: inView ? 1 : 0,
                  y: inView ? 0 : 50,
                }}
                whileHover={{
                  scale: 1.1,
                }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#30315f] mb-2">
                  {service.title}
                </h3>
                <p className="text-center text-sm text-[#30315f]">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
