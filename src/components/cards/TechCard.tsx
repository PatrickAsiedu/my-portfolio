import React from "react";
import { motion } from "framer-motion";

const TechCard = ({ variants, skill }: any) => {
  return (
    <motion.div
      variants={variants}
      className=" h-32 lg:h-56 bg-input rounded-md flex flex-col justify-center items-center space-y-4"
    >
      <skill.icon className="w-14 h-14"></skill.icon>
      <h1>{skill.title}</h1>
    </motion.div>
  );
};

export default TechCard;
