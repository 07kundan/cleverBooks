import React from "react";
import Message from "../message/Message";
import Png1 from "../../assets/Png1.png";
import { BackgroundBeams } from "../ui/background-beams";

function HeroSection() {
  return (
    <div className="relative h-screen  flex flex-col-reverse items-center bg-zinc-800/40 rounded-ee-full lg:pt-20 lg:flex-row">
      <BackgroundBeams />
      {/* Message */}
      <div className="absolute top-[20%] right-[38%]">{/* <Message /> */}</div>

      {/* Left-section */}
      <div className="h-[55%] py-8 text-center space-y-12 lg:space-y-20 lg:p-3 lg:h-fit lg:w-1/2 lg:pl-12">
        <div className="space-y-8 text-left pl-6 lg:pl-0">
          <h1 className="text-xl font-semibold lg:text-3xl lg:font-bold lg:tracking-tight">
            Meet the Clever Book -:
            <p className="lg:pl-24 tracking-tight lg:text-2xl">
              Your Ultimate Learning Companion
            </p>
          </h1>
          <p className="text-base lg:w-3/4">
            Unlock a world of knowledge with the Clever Book. Designed to
            revolutionize your learning experience, this innovative tool
            combines traditional reading with cutting-edge technology.Dive into
            a smarter way of learning today.
          </p>
        </div>

        <button className="outline outline-2 bg-gradient-to-t from-blue-500 to-blue-900 lg:ml-5 px-4 py-2 rounded-full">
          Get Started with Clever
        </button>
      </div>

      {/* Right section */}
      <div className="h-[45%] flex justify-center items-center pt-24 lg:w-1/2 lg:h-full">
        <img className="h-full lg:h-[80%]" src={`${Png1}`} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
