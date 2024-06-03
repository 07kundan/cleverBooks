import React from "react";
import Message from "../message/Message";

function HeroSection() {
  return (
    <div className="relative h-screen flex bg-blue-500/30 rounded-ee-full items-center pt-20">
      {/* Message */}
      <div className="absolute top-[30%] right-1/4">
        <Message />
      </div>

      {/* Left-section */}
      <div className="w-1/2 space-y-12 p-3 pl-6">
        <div className="space-y-5">
          <h1 className="text-3xl font-bold">
            Meet the Clever Book -:
            <p className="pl-14">Your Ultimate Learning Companion</p>
          </h1>
          <p className="text-base">
            Unlock a world of knowledge with the Clever Book. Designed to
            revolutionize your learning experience, this innovative tool
            combines traditional reading with cutting-edge technology. Whether
            you're a student, professional, or lifelong learner, the Clever Book
            adapts to your needs, providing personalized content and interactive
            features that make studying more engaging and effective. Dive into a
            smarter way of learning today.
          </p>
        </div>

        <button className="outline outline-2 bg-gradient-to-t from-blue-500 to-blue-900 ml-5 px-4 py-2 rounded-full">
          Get Started with Clever
        </button>
      </div>

      {/* Right section */}
      <div className=""></div>
    </div>
  );
}

export default HeroSection;
