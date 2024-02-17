import { motion } from "framer-motion";
import React from "react";

const HeroSection = () => {
  return (
    <motion.main className="mt-20 md:mt-0 md:pt-48 flex pb-32 lg:pb-64 lg:h-screen 2xl:h-full ">
      <motion.div className="w-full ">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="  font-bold  text-center text-4xl md:text-5xl md:text-left lg:text-6xl 2xl:text-[4.1rem] md:leading-[1.1]"
        >
          Beautifully <br></br> Crafted Web <br></br> Experiences.
        </motion.h1>
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-center font-light  md:text-left"
        >
          Hire a developer with UI/UX Expericence
        </motion.h1>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center md:justify-start"
        >
          <motion.button className=" mt-8 bg-primary py-4 px-12 rounded-md font-bold ">
            My work
          </motion.button>
        </motion.div>
      </motion.div>
      <motion.div className=""></motion.div>
    </motion.main>
  );
};

export default HeroSection;
