import { motion } from "framer-motion";
import React from "react";

const Header = () => {
  return (
    <motion.header className="w-full py-4 md:py-8 flex justify-between md:fixed top-0 left-0 z-50 md:px-10 lg:px-20 xl:px-28 2xl:px-40 bg-body">
      <motion.div className=" text-lg font-bold">Patrick Asiedu</motion.div>
      <motion.nav className="hidden md:block space-x-12 font-normal relative">
        <motion.a className="navanimation">My work</motion.a>
        <motion.a className="navanimation">Home</motion.a>
        <motion.a className="navanimation">My skills</motion.a>
        <motion.a className="px-6 py-2 bg-primary rounded-md font-medium">
          Contact me
        </motion.a>
      </motion.nav>
      <motion.nav className="md:hidden">HAM</motion.nav>
    </motion.header>
  );
};

export default Header;
