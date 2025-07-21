import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { FunctionComponent } from 'react';

const ProjectCard = ({ project }: any) => {
  const TextVariants = {
    initial: {
      opacity: 0,
      y: 200,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const ref = useRef(null);

  //   const { scrollYProgress } = useScroll({
  //     target: ref,
  //   });

  const isInView = useInView(ref);

  //   const y = useTransform(scrollYProgress, [0, 1], [-100, 200]);

  //   useEffect(() => {
  //     console.log(`${project.title}`, isInView);
  //   }, [isInView]);
  return (
    <motion.div
      ref={ref}
      // style={{ x }}
      // animate={{ x: 5 }}
      // transition={{ duration: 1 }}
      className="mt-14 md:mt-32 lg:mt-32 md:flex md:space-x-10 pb-8  "
    >
      <motion.a
        href="/"
        className=" w-full h-64 md:h-80  md:w-[50%] lg:h-[450px] rounded-md bg-input cursor-pointer relative  group overflow-hidden"
      >
        <div className="w-full h-full bg-black/30 absolute hidden group-hover:flex group-hover:transition-all group-hover:duration-1000 items-center justify-center z-10 ">
          <div className="rounded-full flex bg-black  py-4 ">
            <a href={project.link} className="px-4">
            {(MdOutlineArrowOutward as FunctionComponent)({ size: '2em' })}
            </a>
            <a href={project.repo} className="border-l-2 border-gray-400 px-4 ">
            {(FaGithub as FunctionComponent)({ size: '2em' })}
            </a>
          </div>
        </div>
        <img
          className=" w-full h-full object-cover object-top md:object-left  rounded-md transition-all group-hover:scale-105 group-hover:flex group-hover:transition-all group-hover:duration-[800ms] duration-[800ms]   "
          src={project.img}
          alt=""
        />
      </motion.a>
      <motion.div
        variants={TextVariants}
        initial="initial"
        animate={isInView && "animate"}
        className="md:w-[50%] "
      >
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
