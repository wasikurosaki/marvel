import React, { useState } from "react";
import Slider from "react-slick";
import country from "../assets/adelaide.png";
import california from "../assets/california.png";

const universities = [
  {
    id: 2,
    country: "UK",
    logos: [
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735124307/UoG-removebg-preview_1.png",
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735124306/University_of_Hertfordshire-removebg-preview.png",
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735124305/LSBU-removebg-preview.png",
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735124305/Ulster-University-Logo-Pngsource-RDE8GY99-removebg-preview.png",
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735124305/StudyGroup-logo-removebg-preview.png",
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735124304/De_Mont_Fort-removebg-preview.png",
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735124304/Middlesex_University-removebg-preview.png",
    ],
  },
  {
    id: 3,
    country: "Australia",
    logos: [
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735124422/Western_Sybney_Uni-removebg-preview.png",
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735124420/Swinburn_Uni-removebg-preview.png",
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735124416/La_Trobe-removebg-preview.png",
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735124417/Murdoch_University_extended_logo-removebg-preview.png",
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735124415/Deakin_University-removebg-preview.png",
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735124414/CQ_Uni-removebg-preview.png",
    ],
  },
  {
    id: 4,
    country: "Denmark",
    logos: [
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735124396/university-of-copenhagen--ku--29-logo-removebg-preview.png",
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735124395/ruc_logo_download_dk-removebg-preview.png",
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735124394/Aarhus_University_logo.svg-removebg-preview.png",
    ],
  },
  {
    id: 5,
    country: "Malaysia",
    logos: [
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735124367/png-clipart-university-of-malaya-doel-logo-brand-university-of-malaya-doel-thumbnail-removebg-preview.png",
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735124367/USM-removebg-preview.png",
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735124367/AsiaPacificUniversityOfTechnologyInnovation.svg-removebg-preview.png",
    ],
  },
  {
    id: 6,
    country: "NEW ZEALAND",
    logos: [
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735124349/university_of_Waikato-removebg-preview.png",
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735124348/University_of_Otago-removebg-preview.png",
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735124348/png-transparent-the-university-of-auckland-hd-logo-thumbnail-removebg-preview.png",
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735124347/Lincoln_University-01-removebg-preview.png",
    ],
  },
  {
    id: 1,
    country: "USA",
    logos: [
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735124324/Monroe_Uni-removebg-preview.png",
      "https://res.cloudinary.com/dedntczjt/image/upload/v1735124323/BA_Uni-removebg-preview.png",
    ],
  },
];

const Partners = () => {
  const [selectedCountry, setSelectedCountry] = useState(universities[0].id);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const selectedUniversity = universities.find(
    (university) => university.id === selectedCountry
  );

  const handleCountryChange = (id) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedCountry(id);
      setIsTransitioning(false);
    }, 500);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      id="universities"
      className="w-full py-16 bg-[#FAF9F6] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="md:text-5xl text-3xl font-extrabold text-[#30315f]">
            Our Partnered Universities
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {universities.map((university) => (
            <button
              key={university.id}
              onClick={() => handleCountryChange(university.id)}
              className="flex items-center px-4 justify-center md:w-44 md:h-12 bg-[#30315f] text-white rounded-full text-lg font-semibold hover:bg-[#505f88] transition duration-300"
            >
              {university.country}
            </button>
          ))}
        </div>

        <div
          className={`transition-opacity duration-500 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <Slider {...settings}>
            {selectedUniversity.logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-48 overflow-hidden"
              >
                <div className="w-40 h-40 flex items-center justify-center mx-auto">
                  <img
                    src={logo}
                    alt={`University ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Partners;
