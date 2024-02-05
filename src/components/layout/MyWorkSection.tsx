import React from "react";
import { motion } from "framer-motion";
import Headline from "./Headline";
import ProjectCard from "../cards/ProjectCard";

const MyWorkSection = () => {
  return (
    <motion.section className="pb-32 lg:pb-48 md:pt-24">
      <Headline title={"My work"}></Headline>
      <ProjectCard></ProjectCard>
    </motion.section>
  );
};

export default MyWorkSection;
