import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "This is an amazing product! It has completely transformed the way I work. Highly recommended. ",
      name: "Jessica Smith",
      role: "Product Marketer @Google",
      image: "https://via.placeholder.com/80",
    },
    {
      quote:
        "I can't imagine my daily workflow without it. It's intuitive, fast, and reliable!",
      name: "Craig Norton",
      role: "Software Engineer @Amazon",
      image: "https://via.placeholder.com/80",
    },
    {
      quote:
        "Great experience so far! The team has done a fantastic job creating such a helpful tool.",
      name: "Sophia Lee",
      role: "UX Designer @Facebook",
      image: "https://via.placeholder.com/80",
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
      <div className="absolute md:top-[-100px] top-20 left-0 right-0 mx-auto bg-white shadow-lg  md:max-w-[80rem] max-w-[22rem] p-8 z-10">
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
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "{testimonial.quote}"
              </blockquote>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full border-2 border-gray-300 mb-4 mx-auto"
              />
              <div>
                <strong className="text-gray-800 text-xl block">
                  {testimonial.name}
                </strong>
                <span className="text-gray-600 text-sm">
                  {testimonial.role}
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
