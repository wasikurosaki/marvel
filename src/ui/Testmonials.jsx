import React, { useState } from "react";

// Data for testimonials
const testimonials = [
  {
    name: "Roger Scott",
    position: "Marketing Manager",
    message:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "images/person_1.jpg",
  },
  {
    name: "Sarah White",
    position: "Product Manager",
    message:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "images/person_2.jpg",
  },
  {
    name: "John Doe",
    position: "Designer",
    message:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "images/person_3.jpg",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="flex flex-col items-center space-y-8">
        <div className="flex justify-between items-center w-full">
          <button
            className="p-2 bg-gray-200 rounded-full text-gray-600"
            onClick={prevSlide}
          >
            &#60;
          </button>
          <div className="flex flex-col items-center">
            <div
              className="w-24 h-24 rounded-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${testimonials[currentIndex].image})`,
              }}
            ></div>
            <p className="mt-4 font-semibold text-xl">
              {testimonials[currentIndex].name}
            </p>
            <p className="text-gray-500">
              {testimonials[currentIndex].position}
            </p>
          </div>
          <button
            className="p-2 bg-gray-200 rounded-full text-gray-600"
            onClick={nextSlide}
          >
            &#62;
          </button>
        </div>
        <p className="text-center text-gray-700">
          {testimonials[currentIndex].message}
        </p>
      </div>
    </div>
  );
};

export default TestimonialSlider;
