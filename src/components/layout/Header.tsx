import { motion } from "framer-motion";
import React from "react";

const Header = () => {
  return (
    <motion.header className="w-full py-4 md:py-8 flex justify-between ">
      <motion.div className=" text-lg font-bold">Patrick Asiedu</motion.div>
      <motion.nav className="hidden md:block space-x-12 font-normal">
        <motion.a className="">Home</motion.a>
        <motion.a className="">My work</motion.a>
        <motion.a className="">My skills</motion.a>
        <motion.a className="px-6 py-2 bg-primary rounded-md font-medium">
          Contact me
        </motion.a>
      </motion.nav>
      <motion.nav className="md:hidden">HAM</motion.nav>
    </motion.header>
  );
};

export default Header;
