import React, { useState } from "react";
import "./Carousel.css"; // Import the CSS file for custom styles

const images = [
  "https://via.placeholder.com/600x400?text=Image+1",
  "https://via.placeholder.com/600x400?text=Image+2",
  "https://via.placeholder.com/600x400?text=Image+3",
];

function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative h-screen bg-purple-600 flex items-center justify-center">
      <div className="h-screen w-screen mx-auto">
        <div className="relative h-64">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute h-9 w-9 bottom-6 -translate-x-8 bg-gray-800 text-white rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute h-9 w-9 bottom-6 translate-x-8 bg-gray-800 font-extralight text-white rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
}

export default Review;
