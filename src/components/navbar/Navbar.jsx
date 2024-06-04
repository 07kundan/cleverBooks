import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoMdCart } from "react-icons/io";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { CgLogIn, CgMenuBoxed } from "react-icons/cg";
import Png1 from "../../assets/Png1.png";

const NavItems = [
  { name: "Product", icon: <SiHomeassistantcommunitystore /> },
  { name: "Pricing", icon: <CgLogIn /> },
  { name: "Industry", icon: <IoMdCart /> },
  { name: "Customer Service", icon: <IoMdCart /> },
  { name: "About", icon: <IoMdCart /> },
  { name: "Blog", icon: <IoMdCart /> },
];

function NavBar({ visible }) {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.div
        initial={{ translateX: "-50%" }}
        animate={{
          y: visible ? 0 : -100,
        }}
        transition={{
          ease: "linear",
          duration: 0.3,
        }}
        className="w-[95vw] m-auto p-2 px-8 flex justify-between items-center z-30 bg-transparent/80 fixed top-2 left-1/2 rounded-2xl lg:justify-around lg:p-2.5 lg:px-5 lg:w-[92vw]"
      >
        {/* Name */}
        <motion.span
          initial={{ rotateZ: 6 }}
          animate={{
            rotateZ: 0,
          }}
          transition={{
            ease: "backIn",
            duration: 0.5,
          }}
          className="flex  items-center gap-1 text-xl leading-10 w-fit font-semibold tracking-tighter"
        >
          <img className="h-8" src={`${Png1}`} alt="" />
          Clever Books
        </motion.span>
        {/* dots */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => {
            setMenuIsActive(!menuIsActive);
          }}
        >
          <CgMenuBoxed />
        </button>

        {/* ------- */}
        {/*  For Big Screen */}
        {isLargeScreen && (
          <>
            <div className="flex justify-around gap-8 p-1 px-3">
              {/* Routes */}
              {NavItems.map((item) => (
                <span key={item.name}>{item.name}</span>
              ))}
              {/* -------------- */}
            </div>

            <div className="space-x-6">
              <button>Login</button>
              <button className="px-6 py-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full">
                Lit up borders
              </button>
            </div>
          </>
        )}
      </motion.div>

      {menuIsActive && (
        <div className="h-screen w-full text-lg bg-lime-50 text-black absolute top-0 z-10 text-center space-y-12 pt-32 px-8">
          <div className="space-y-8 ">
            {NavItems.map((item) => (
              <div className="text-left" key={item.name}>
                {item.name}
              </div>
            ))}
          </div>
          <button className="bg-red-600 px-4 py-1.5 rounded-xl">
            Contact Us
          </button>
        </div>
      )}
    </>
  );
}

export default NavBar;
