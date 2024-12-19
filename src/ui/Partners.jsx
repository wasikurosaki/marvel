import React from "react";
import { motion } from "framer-motion";

const Partners = () => {
  const partners = [
    {
      id: 1,
      alt: "Microsoft Silver Partner",
      src: "/api/placeholder/280/100",
      className: "w-[280px] h-[100px]",
    },
    {
      id: 2,
      alt: "Salesforce Consulting Partner",
      src: "/api/placeholder/280/100",
      className: "w-[280px] h-[100px]",
    },
    {
      id: 3,
      alt: "Webmerge",
      src: "/api/placeholder/280/100",
      className: "w-[280px] h-[100px]",
    },
    {
      id: 4,
      alt: "Kentico Bronze Partner",
      src: "/api/placeholder/280/100",
      className: "w-[280px] h-[100px]",
    },
    {
      id: 5,
      alt: "Amazon Web Services Partner",
      src: "/api/placeholder/280/100",
      className: "w-[280px] h-[100px]",
    },
    {
      id: 6,
      alt: "IBM SI Partner",
      src: "/api/placeholder/280/100",
      className: "w-[280px] h-[100px]",
    },
    {
      id: 7,
      alt: "Dell Boomi",
      src: "/api/placeholder/280/100",
      className: "w-[280px] h-[100px]",
    },
    {
      id: 8,
      alt: "Cloudera Connect",
      src: "/api/placeholder/280/100",
      className: "w-[280px] h-[100px]",
    },
    {
      id: 9,
      alt: "Salesforce ISV Partner",
      src: "/api/placeholder/280/100",
      className: "w-[280px] h-[100px]",
    },
  ];

  return (
    <div className="w-full py-16 bg-[#30315f]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title with orange underline */}
        <div className="text-center mb-20">
          <h1 className="md:text-[4rem] text-3xl font-marvel font-extrabold text-white">
            Education Partners
          </h1>
          <div className="w-16 h-1 bg-[#ce4a81] mx-auto mt-2"></div>
        </div>

        {/* Partners Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-20 justify-items-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              className="flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className={`${partner.className} object-contain filter hover:brightness-110 transition-all duration-300`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;
