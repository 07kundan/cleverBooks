import React, { useState } from "react";
import "./Carousel.css"; // Import the CSS file for custom styles
import Profile1 from "../../assets/Profile1.jpg";
import Profile2 from "../../assets/Profile2.jpg";
import Profile3 from "../../assets/Profile3.jpg";
import Book from "../../assets/Book.jpg";

const content = [
  {
    text: "D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.",
    author: "Diksha Pande",
    role: "Co-founder, Samosa Party",
    image: Profile1, // Placeholder image URL
  },
  {
    text: "D2C brands face issues to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.",
    author: "Diksha ",
    role: "Co-founder, Samosa ",
    image: Profile2, // Placeholder image URL
  },
  {
    text: "D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand pef their experience distilled into the workflows.",
    author: " Pande",
    role: "Co-founder,  Party",
    image: Profile3, // Placeholder image URL
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
    <div className="font-mono tracking-tighter min-h-screen lg:h-screen flex flex-col-reverse justify-between gap-10 p-4 py-6 lg:flex-row  lg:py-12 lg:p-10 lg:gap-0">
      {/* left section */}
      <div className="flex flex-col space-y-8 lg:flex-1 lg:max-w-3xl ">
        <div className="relative h-96 lg:h-76">
          {content.map((item, index) => (
            <div
              key={index}
              className={`absolute transition-opacity duration-700 ease-in-out lg:space-y-12 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* descrioption */}
              <p className="text-lg">{item.text}</p>

              {/* person */}
              <div className="flex items-center mt-4">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src={item.image}
                  alt={item.author}
                />
                <div>
                  <p className="font-poetsen">{item.author}</p>
                  <p className="">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* arrows */}
        <div className="pl-7 hidden lg:flex justify-start lg:gap-4">
          <button onClick={prevSlide} className="p-[2px] relative h-10 w-10">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
            <div className="h-full w-full bg-black rounded-full relative flex items-center justify-center group transition duration-200 text-white hover:bg-transparent">
              &lt;
            </div>
          </button>

          <button onClick={nextSlide} className="p-[2px] relative h-10 w-10">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
            <div className="h-full w-full bg-black rounded-full relative flex items-center justify-center group transition duration-200 text-white hover:bg-transparent">
              &gt;
            </div>
          </button>
        </div>

        {/* below button */}
        <div className="flex flex-wrap justify-around gap-y-7 lg:flex-nowrap lg:gap-0 lg:justify-around lg:items-center">
          <button className="">
            <div className="px-8 py-4 rounded-xl lg:px-14 lg:py-4 bg-gradient-to-r from-indigo-500 to-purple-500 lg:rounded-3xl">
              <p className="font-bold text-xl">Upto 95%</p>
              <p className="text-sm">Demand Fulfilment</p>
            </div>
          </button>
          <button className="">
            <div className="px-8 py-4 rounded-xl lg:px-14 lg:py-4 bg-gradient-to-r from-indigo-500 to-purple-500 lg:rounded-3xl">
              <p className="font-bold text-xl">&lt; 3%</p>
              <p className="text-sm">Daily Stock-out</p>
            </div>
          </button>

          <button onClick={prevSlide} className="p-[2px] relative">
            <div className="absolute inset-0 bg-gradient-to-r rounded-full from-indigo-500 to-purple-500 lg:rounded-3xl" />
            <div className="px-8 py-3 lg:px-16 lg:py-4 rounded-full  bg-black lg:rounded-3xl relative group transition duration-200 text-white">
              <span className="text-xl font-bold">Read Story</span>{" "}
              <br className="hidden lg:block" />
              &rarr;
            </div>
          </button>

          {/*for small screen arrows */}
          <div className="flex items-center gap-4 mr-8 lg:hidden ">
            <button onClick={nextSlide} className="p-[2px] relative h-10 w-10">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
              <div className="h-full w-full bg-black rounded-full relative flex items-center justify-center group transition duration-200 text-white hover:bg-transparent">
                &lt;
              </div>
            </button>

            <button className="p-[2px] relative h-10 w-10">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
              <div className="h-full w-full bg-black rounded-full relative flex items-center justify-center group transition duration-200 text-white hover:bg-transparent">
                &gt;
              </div>
            </button>
          </div>
          {/* ------- */}
        </div>
      </div>

      {/* right image */}
      <div className=" w-full flex justify-center items-center mt-8 md:mt-0 lg:w-[30%]">
        <img
          className="w-[70%] h-auto rounded-3xl lg:w-full"
          src={`${Book}`}
          alt="Samosa Party"
        />
      </div>
    </div>
  );
}

export default Review;
