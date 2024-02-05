import React from "react";
import { motion } from "framer-motion";

const ProjectCard = () => {
  return (
    <motion.div className="mt-8 lg:mt-32 md:flex md:space-x-10 pb-8">
      <motion.div className="w-full h-64 md:h-80  md:w-[50%] lg:h-[450px] rounded-md bg-input"></motion.div>
      <motion.div className="md:w-[50%]">
        <motion.h1 className="mt-6 md:mt-0 font-bold text-2xl text-center md:text-left ">
          Renpathy
        </motion.h1>
        <motion.p className=" mt-4 text-center md:text-left font-light">
          Lorem ipsum dolor sit amet consectetur. Pellentesque placerat et id
          volutpat sit aliquam elementum ultrices amet. Ut consectetur nec
          volutpat dui in auctor. Sed vestibulum proin nec magna est venenatis
          viverra venenatis enim. Pellentesque massa elit sit at.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
