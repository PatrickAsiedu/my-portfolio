import { motion } from "framer-motion";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);

  const links = ["Home", "My Work", "My Skills", "Contact Me"];

  const MenuVariants = {
    // open: {
    //   clipPath: "circle(1200px at 50px 50px)",
    //   transition: { duration: 1 },
    // },
    // closed: { clipPath: "circle(50% at 50% 50%)" },
    open: {
      clipPath: "circle(70.7% at 50% 50%)",
      transition: { duration: 0.5 },
    },
    closed: { clipPath: "circle(40px at 370px 30px)" },
    intial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { staggerChildren: 0.5 } },
  };

  // const linkVariants = {
  //   intial: { y: -50, opacity: 0 },
  //   animate: { y: 0, opacity: 1, transition: { staggerChildren: 0.5 } },
  // };
  return (
    <motion.header className=" w-full py-4 md:py-8 flex justify-between md:fixed top-0 left-0 z-50 md:px-10 lg:px-20 xl:px-28 2xl:px-40 bg-body navbar ">
      <motion.div className=" text-lg font-bold">Patrick Asiedu</motion.div>
      <motion.nav className="hidden md:block space-x-12 font-normal relative">
        <motion.a href="#home" className="navanimation">
          Home
        </motion.a>
        <motion.a href="#mywork" className="navanimation">
          My work
        </motion.a>
        <motion.a href="#myskills" className="navanimation">
          My skills
        </motion.a>
        <motion.a
          href="#contactme"
          className="px-6 py-2 bg-primary rounded-md font-medium"
        >
          Contact me
        </motion.a>
      </motion.nav>
      <motion.div
        variants={MenuVariants}
        animate={isOpen ? "open" : "closed"}
        // className="md:hidden bg-body fixed inset-0 z-50  "
        className={`md:hidden  fixed inset-0 z-50 ${
          isOpen ? "bg-body" : "bg-transparent"
        } `}
      >
        <motion.nav
          variants={MenuVariants}
          initial="initial"
          animate={isOpen ? "animate" : "initial"}
          className="flex flex-col mt-32 items-center space-y-12  font-medium text-xl "
        >
          {links.map((link) => (
            <motion.a variants={MenuVariants} href={`${link}`} key={link}>
              {link}
            </motion.a>
          ))}
          {/* <motion.a href="">Home</motion.a>
          <motion.a href="">My work</motion.a>
          <motion.a href="">My Skills</motion.a>
          <motion.a href="">Contact me</motion.a> */}
        </motion.nav>
        <button
          className="absolute right-4 top-4"
          onClick={() => setisOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path
                fill="currentColor"
                d="M20 18a1 1 0 0 1 .117 1.993L20 20H4a1 1 0 0 1-.117-1.993L4 18zm0-7a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm0-7a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </g>
          </svg>
        </button>
      </motion.div>
    </motion.header>
  );
};

export default Header;
