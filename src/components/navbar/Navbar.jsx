import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdCart } from "react-icons/io";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { CgLogIn, CgMenuBoxed } from "react-icons/cg";

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
        className="w-[95%] p-2 px-8 flex m-auto justify-between items-center z-30
      bg-transparent/50 fixed top-4 left-1/2 -translate-x-1/2 rounded-2xl lg:justify-around lg:p-3 lg:px-5
      lg:w-[92vw] lg:top-2 "
      >
        {/* Name */}
        <motion.span
          initial={{ rotateZ: 2 }}
          animate={{
            rotateZ: -6,
          }}
          transition={{
            ease: "backIn",
            duration: 0.5,
          }}
          className="pb-3 text-2xl underline underline-offset-2 -rotate-6 w-fit font-semibold tracking-tighter"
        >
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
        {window.innerWidth > 1024 && (
          <>
            <div className=" flex justify-around gap-8 p-1 px-3">
              {/* Routes */}
              {NavItems.map((item) => (
                <span key={item.name}>{item.name}</span>
              ))}
              {/* -------------- */}
            </div>

            <div className="space-x-6">
              <span>Login</span>
              <span className="bg-red-600 px-4 py-1.5 rounded-xl">
                Contact Us
              </span>
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
