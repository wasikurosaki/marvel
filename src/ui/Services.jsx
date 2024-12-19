import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const servicesData = [
  {
    title: "Web Development",
    description:
      "We build responsive and scalable web solutions tailored to your business needs, ensuring top performance and user experience.",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    description:
      "Our mobile applications are designed to offer seamless functionality, captivating interfaces, and smooth performance.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description:
      "We create user-centric designs that deliver exceptional digital experiences and drive customer engagement.",
    icon: "🎨",
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your online visibility and drive organic traffic to your website with our advanced SEO strategies.",
    icon: "🔍",
  },
  {
    title: "Cloud Solutions",
    description:
      "Leverage the power of cloud computing to scale your business efficiently with our secure and innovative solutions.",
    icon: "☁️",
  },
  {
    title: "Digital Marketing",
    description:
      "Expand your brand's reach and engage your audience with our data-driven digital marketing services.",
    icon: "📈",
  },
];

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="bg-gray-50 py-16">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#30315f] font-marvel">
          Our Services
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-xl mx-auto">
          Discover the wide range of innovative and cutting-edge services we
          offer to help your business succeed.
        </p>
        <div className="w-20 h-1 bg-[#ce4a81] mx-auto mt-4"></div>
      </div>

      {/* Services Grid */}
      <div
        ref={ref}
        className="container mx-auto px-4 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center bg-white rounded-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 30,
            }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Icon */}
            <div className="text-5xl md:text-6xl text-[#ce4a81] mb-6">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-[#30315f] mb-4">
              {service.title}
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
