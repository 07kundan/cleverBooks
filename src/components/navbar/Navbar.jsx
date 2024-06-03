import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { CgLogIn, CgMenuBoxed, CgProfile } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { FaGift, FaHeart } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";

const NavItems = [
  { name: "Product", icon: <SiHomeassistantcommunitystore /> },
  { name: "Pricing", icon: <CgLogIn /> },
  { name: "Industry", icon: <IoMdCart /> },
  { name: "Customer Service", icon: <IoMdCart /> },
  { name: "About", icon: <IoMdCart /> },
  { name: "Blog", icon: <IoMdCart /> },
];

// Navbar
function NavBar() {
  // search bar
  // menu list
  const [menuIsActive, setMenuIsActive] = useState(false);

  return (
    <div className="w-screen flex justify-center">
      <div className="p-2 px-5 flex m-auto justify-around items-center bg-transparent/50 fixed top-4 z-10  rounded-2xl lg:outline-2 lg:p-3 lg:w-[92vw] lg:top-2 ">
        {/* Name */}
        <span className="text-2xl underline underline-offset- -rotate-6 w-fit font-semibold tracking-tighter">
          Clever Books
        </span>

        {/* dots */}
        <button
          className="lg:hidden"
          onClick={() => {
            setMenuIsActive(!menuIsActive);
          }}
        >
          <CgMenuBoxed />
        </button>
        {/* ------- */}

        {/*  For Big Screen */}
        {window.innerWidth > 1024 && (
          <div className=" flex justify-around gap-8 p-1 px-3">
            {/* Routes */}
            {NavItems.map((item) => (
              <span key={item.name}>{item.name}</span>
            ))}
            {/* -------------- */}
          </div>
        )}

        <div className="space-x-6">
          <span>Login</span>
          <span className="bg-red-600 px-4 py-1.5 rounded-xl">Contact Us</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
