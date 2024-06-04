import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaGithub, FaHeart } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Png1 from "../../assets/Png1.png";

function Footer() {
  return (
    <div className="h-[97vh] flex items-center bg-transparent/50 rounded-t-3xl">
      <div className="p-3 pt-5 w-full space-y-9 lg:m-auto lg:space-y-2 lg:w-4/5">
        {/* About */}
        <div className="text-lg lg:text-center p-2">
          <h5 className="text-2xl font-bold underline underline-offset-4 inline">
            About
          </h5>
          <span className="font-bold"> - : </span>
          <p className="inline">
            <span className="bg-gradient-to-r mx-1.5 from-indigo-500/80 to-purple-500/80 px-2 py-1 rounded-md text-black font-bold">
              CleverBook
            </span>{" "}
            is your one-stop online bookstore offering a vast collection of
            reading materials across all genres. From manga to magazines,
            articles to newspapers, CleverBook ensures you have access to a
            diverse range of content, catering to every reader's preference.
          </p>
        </div>

        {/* Contact */}
        <div className=" lg:flex lg:justify-around lg:py-10">
          <div className=" flex flex-col justify-center">
            <h5 className="text-center mb-2 font-bold text-xl underline underline-offset-4 lg:mb-5">
              Contact Information
            </h5>
            <div className="text-lg px-2 ">
              <span className="flex items-center gap-2 ">
                <span>
                  <MdEmail />
                </span>{" "}
                <span>-: kundankumarratu@gmail.com</span>
              </span>
              <span className="flex items-center gap-2">
                <span>
                  <MdPhone />
                </span>
                <span>-: +91 7634881182</span>
              </span>
            </div>
          </div>
          <div className=" flex items-center justify-center gap-3 p-3 py-8 lg:p-0">
            <span className="text-8xl lg:text-9xl">
              <img className="h-32" src={`${Png1}`} alt="" />
            </span>
            <p className="text-3xl font-extrabold">CleverBook</p>
          </div>
        </div>

        {/* Social media links */}
        <div className=" text-center text-3xl ">
          <div className="inline-flex gap-5 outline outline-2 py-3 px-6 rounded-xl">
            <a
              href="https://www.instagram.com/kun_dan.kr"
              className="hover:text-[#b359e0]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/kundan-kumar-ratu"
              className="hover:text-[#b359e0]"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/07kundan/E-Commerce"
              className="hover:text-[#b359e0]"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/kundan_X_07"
              className=" hover:text-[#b359e0]"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* bottom text */}
        <div className="text-center space-y-10 pt-4">
          <span className="inline-flex items-center gap-1">
            Developed with{" "}
            <span className="text-red-500 text-xl">
              <FaHeart />
            </span>
            by Kundan
          </span>
          <p className="text-sm">All &copy; reserved to @none</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
