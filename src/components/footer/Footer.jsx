import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaGithub, FaHeart } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Png1 from "../../assets/Png1.png";

function Footer() {
  return (
    <div className="font-mono h-[95vh] flex items-center bg-transparent/60 rounded-t-[3rem] ">
      <div className="p-5 pt-5 w-full space-y-9 lg:space-y-0 lg:h-full lg:m-auto lg:flex lg:flex-col lg:justify-around lg:w-[87%]">
        {/* About */}
        <div className="text-lg lg:text-center p-2">
          <h5 className="text-2xl font-poetsen underline underline-offset-4 inline">
            About
          </h5>
          <span className="font-bold"> - : </span>
          <p className="inline">
            CleverBook is your one-stop online bookstore offering a vast
            collection of reading materials across all genres. From manga to
            magazines, articles to newspapers, CleverBook ensures you have
            access to a diverse range of content, catering to every reader's
            preference.
          </p>
        </div>

        {/* Contact */}
        <div className=" lg:flex lg:justify-around lg:py-10">
          <div className=" flex flex-col justify-center">
            <h5 className="text-center mb-2 font-poetsen text-xl underline underline-offset-4 lg:mb-5">
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
