import React from "react";
import { motion } from "framer-motion";
import Headline from "./Headline";

const MySkillsSection = () => {
  return (
    <motion.section className="pb-64">
      <Headline title={"My skills"}></Headline>
      <motion.h2 className="mt-8 font-light ">
        I’ve had the pleasure to master these modern stacks and technologies at
        my best ability
      </motion.h2>
    </motion.section>
  );
};

export default MySkillsSection;
