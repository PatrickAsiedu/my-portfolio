import React from "react";
import { motion } from "framer-motion";
import Headline from "./Headline";
import TechCard from "../cards/TechCard";

const TechCardVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, staggerChildren: 0.5 },
};

const MySkillsSection = () => {
  return (
    <motion.section className="pb-64 md:pt-24">
      <Headline title={"My skills"}></Headline>
      <motion.h2 className="mt-8 font-light mb-12 ">
        I’ve had the pleasure to master these modern stacks and technologies at
        my best ability
      </motion.h2>
      <motion.div className=" grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4  ">
        <TechCard variants={TechCardVariants}></TechCard>
        <TechCard variants={TechCardVariants}></TechCard>
        <TechCard variants={TechCardVariants}></TechCard>
        <TechCard variants={TechCardVariants}></TechCard>
        <TechCard variants={TechCardVariants}></TechCard>
        <TechCard variants={TechCardVariants}></TechCard>
        <TechCard variants={TechCardVariants}></TechCard>
        <TechCard variants={TechCardVariants}></TechCard>
      </motion.div>
    </motion.section>
  );
};

export default MySkillsSection;
