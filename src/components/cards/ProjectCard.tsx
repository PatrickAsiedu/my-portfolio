import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }: any) => {
  return (
    <motion.div
      // style={{ x }}
      // animate={{ x: 5 }}
      // transition={{ duration: 1 }}
      className="mt-14 md:mt-32 lg:mt-32 md:flex md:space-x-10 pb-8 w-[calc(100vw-4rem)] md:w-[calc(100vw-8rem)]  2xl:w-[calc(100vw-28rem)]   "
    >
      <motion.div className=" w-full h-64 md:h-80  md:w-[50%] lg:h-[450px] rounded-md bg-input  ">
        <img
          className=" w-full h-full object-cover object-left"
          src={project.img}
          alt=""
        />
      </motion.div>
      <motion.div className="md:w-[50%]">
        <motion.h1 className="mt-6 md:mt-0 font-bold text-2xl text-center md:text-left ">
          {project.title}
        </motion.h1>
        <motion.p className=" mt-4 text-center md:text-left font-light">
          {project.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
