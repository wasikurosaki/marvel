import React, { useState } from "react";
import Slider from "react-slick";
import country from "../assets/adelaide.png";
import california from "../assets/california.png"; // This will be used dynamically per country

const universities = [
  {
    id: 1,
    country: "USA",
    logos: [
      country,
      country,
      california,
      country,
      california,
      country,
      california,
      country,
    ],
  },
  {
    id: 2,
    country: "UK",
    logos: [
      california,
      country,
      california,
      country,
      california,
      country,
      california,
      country,
    ],
  },
  {
    id: 3,
    country: "Australia",
    logos: [
      country,
      california,
      country,
      country,
      california,
      country,
      country,
      california,
    ],
  },
  // Add other countries here in similar structure
];

const Partners = () => {
  const [selectedCountry, setSelectedCountry] = useState(universities[0].id);
  const [isTransitioning, setIsTransitioning] = useState(false); // Track the transition state
  const selectedUniversity = universities.find(
    (university) => university.id === selectedCountry
  );

  const handleCountryChange = (id) => {
    setIsTransitioning(true); // Start the transition
    setTimeout(() => {
      setSelectedCountry(id); // Change country after delay
      setIsTransitioning(false); // End transition
    }, 500); // Set the transition delay (500ms)
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Default for larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true, // Optional: Centers the active logo
    focusOnSelect: true, // Optional: Makes the selected logo focusable
    responsive: [
      {
        breakpoint: 1024, // Tablets and up
        settings: {
          slidesToShow: 3, // Show 3 logos on medium screens
        },
      },
      {
        breakpoint: 768, // Mobile screens
        settings: {
          slidesToShow: 1, // Show 1 logo on small screens
        },
      },
    ],
  };

  return (
    <div id="universities" className="w-full py-16 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-20">
          <h1 className="md:text-[4rem] text-3xl font-marvel font-extrabold text-[#30315f]">
            Select Your Country
          </h1>
        </div>

        {/* Country Buttons */}
        <div className="flex justify-center gap-8 mb-16">
          {universities.map((university) => (
            <button
              key={university.id}
              onClick={() => handleCountryChange(university.id)}
              className="px-6 py-2 bg-[#30315f] text-white rounded-full text-lg font-semibold hover:bg-[#505f88] transition duration-300"
            >
              {university.country}
            </button>
          ))}
        </div>

        {/* University Logos Carousel */}
        <div
          className={`transition-opacity duration-500 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <Slider {...settings}>
            {selectedUniversity.logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={logo}
                  alt={`University ${index + 1}`}
                  className="w-[350px] h-[350px] object-contain" // Larger logos
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Partners;
