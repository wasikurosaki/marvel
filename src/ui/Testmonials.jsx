import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Junayed Bin Sagir",
      role: "Masters in Business Analytics, University of Wollongong",
      scholarship: "30% Scholarship",
      intake: "July 2024",
      image:
        "https://res.cloudinary.com/dedntczjt/image/upload/v1735115086/Junayed_Bin_Sagir.jpg",
      description:
        "Working with Marvel Studies felt like having the best team on my side. From the start, they gave me precise guidance for my studies in Australia. The process was smooth, and their strategic approach helped me secure a scholarship and an amazing opportunity. I'm ready to begin this exciting journey thanks to their support!",

      country: "Australia",
    },

    {
      name: "Hasan Mohammad Arafat",
      role: "MSc Research International Business, University of Gloucestershire ",
      scholarship: "£2000 Scholarship",
      intake: "January 2024",
      image:
        "https://res.cloudinary.com/dedntczjt/image/upload/v1735115087/Hasan_Mohammad_Arafat.png",
      description:
        "Marvel Studies provided the guidance I needed to choose the right university and navigate the scholarship application process smoothly. Their expertise was crucial in securing my admission and scholarship. I couldn't be more excited to start my MBA journey in the UK thanks to their tireless support and direction.",

      country: "United Kingdom",
    },
    {
      name: "Vabana Akther",
      role: "MSc in Global Business Management, University of Roehampton",
      scholarship: "£4500 Scholarship",
      intake: "May 2024",
      image:
        "https://res.cloudinary.com/dedntczjt/image/upload/v1735115086/Vabana_Akther.jpg",
      description:
        "Finally going with my entire family to the UK being a student. A dream came true. Thank you so much Marvel Studies. You guys are truly avengers.",

      country: "United Kingdom",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative bg-white">
      {/* Upper section placeholder */}
      <div className="md:h-0 h-22 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>

      {/* Testimonials Section */}
      <div className="absolute md:top-[-100px] top-[-80px] left-0 right-0 mx-auto bg-white shadow-lg  md:max-w-[80rem] max-w-[22rem] p-8 z-10">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-600 mb-2">
            Testimonials
          </h3>
          <h2 className="md:text-5xl text-3xl font-bold text-gray-800 mb-8">
            What People Are Saying
          </h2>
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 flex flex-col items-center text-center justify-center"
            >
              <strong className="text-gray-800 text-xl block mb-2">
                {testimonial.scholarship}
              </strong>
              <blockquote className="text-lg text-gray-700 italic mb-4">
                {testimonial.description}
              </blockquote>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full border-2 border-gray-300 mb-4 mx-auto"
              />
              <div className="flex flex-col gap-2">
                <strong className="text-gray-800 text-xl block">
                  {testimonial.name}
                </strong>
                <span className="text-gray-600 text-sm">
                  {testimonial.role}
                </span>
                <span className="text-gray-600 text-sm">
                  <strong>{testimonial.country}</strong>
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
