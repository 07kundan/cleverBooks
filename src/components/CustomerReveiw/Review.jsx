import React, { useState } from "react";
import "./Carousel.css"; // Import the CSS file for custom styles

const content = [
  {
    text: "D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.",
    author: "Diksha Pande",
    role: "Co-founder, Samosa Party",
    image: "https://via.placeholder.com/50", // Placeholder image URL
    logo: "https://via.placeholder.com/50", // Placeholder logo URL
  },
  {
    text: "D2C brands face issues to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.",
    author: "Diksha ",
    role: "Co-founder, Samosa ",
    image: "https://via.placeholder.com/50", // Placeholder image URL
    logo: "https://via.placeholder.com/50", // Placeholder logo URL
  },
  {
    text: "D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand pef their experience distilled into the workflows.",
    author: " Pande",
    role: "Co-founder,  Party",
    image: "https://via.placeholder.com/50", // Placeholder image URL
    logo: "https://via.placeholder.com/50", // Placeholder logo URL
  },
];

function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? content.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === content.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    // <div className="relative h-screen  flex items-center justify-center">
    //   <div className="h-screen w-screen mx-auto">
    //     <div className="relative h-64">
    //       {images.map((image, index) => (
    //         <img
    //           key={index}
    //           src={image}
    //           alt={`Slide ${index}`}
    //           className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
    //             index === currentIndex ? "opacity-100" : "opacity-0"
    //           }`}
    //         />
    //       ))}
    //     </div>
    //   </div>
    //   <button
    //     onClick={prevSlide}
    //     className="absolute h-9 w-9 bottom-6 -translate-x-8 bg-gray-800 text-white rounded-full"
    //   >
    //     &#10094;
    //   </button>
    //   <button
    //     onClick={nextSlide}
    //     className="absolute h-9 w-9 bottom-6 translate-x-8 bg-gray-800 font-extralight text-white rounded-full"
    //   >
    //     &#10095;
    //   </button>
    // </div>
    <div className="h-screen flex flex-col md:flex-row justify-between py-12 p-10 text-black">
      {/* left section */}
      <div className="flex-1 max-w-3xl ">
        <div className="relative  h-72">
          {content.map((item, index) => (
            <div
              key={index}
              className={`absolute transition-opacity duration-1000 ease-in-out space-y-12 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* descrioption */}
              <p className="text-lg text-gray-700">{item.text}</p>

              {/* person */}
              <div className="flex items-center mt-4">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src={item.image}
                  alt={item.author}
                />
                <div>
                  <p className="font-bold">{item.author}</p>
                  <p className="text-gray-600">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* arrows */}
        <div className="flex justify-start mb-16">
          <button
            onClick={prevSlide}
            className="border border-gray-300 rounded-full w-10 h-10 flex justify-center items-center text-xl mx-2"
          >
            &lt;
          </button>

          <button
            onClick={nextSlide}
            className="border border-gray-300 rounded-full w-10 h-10 flex justify-center items-center text-xl mx-2"
          >
            &gt;
          </button>
        </div>

        {/* below button */}
        <div className="flex justify-around items-center">
          <div className="w-[15rem] bg-purple-100 text-purple-800 rounded-md py-2 px-4 text-center mb-4 md:mb-0">
            <p className="font-bold text-lg">upto 95%</p>
            <p className="text-sm">Demand Fulfilment</p>
          </div>
          <div className="w-[15rem] bg-purple-100 text-purple-800 rounded-md py-2 px-4 text-center mb-4 md:mb-0">
            <p className="font-bold text-lg">&lt; 3%</p>
            <p className="text-sm">Daily Stock-out</p>
          </div>
          <button className="w-[15rem] bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl py-2 px-6">
            Read story <br />
            &rarr;
          </button>
        </div>
      </div>

      {/* right image */}
      <div className="flex flex-col items-center mt-8 md:mt-0">
        <img
          className="w-48 h-auto rounded-md"
          src="https://via.placeholder.com/200"
          alt="Samosa Party"
        />
        <img
          className="w-12 h-12 mt-4"
          src={content[0].logo}
          alt="Samosa Party Logo"
        />
      </div>
    </div>
  );
}

export default Review;
