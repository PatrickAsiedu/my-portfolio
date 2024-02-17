import React, { useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
import Headline from "./Headline";
import TechCard from "../cards/TechCard";
import { useEffect } from "react";

const skills = [
  { id: 1, title: "s" },
  { id: 2, title: "s" },
  { id: 3, title: "s" },
  { id: 4, title: "s" },
  { id: 5, title: "s" },
  { id: 6, title: "s" },
];

// variants are just outsourced to a diff location instead of directly on the component, to make use of stagger children,
// u put variants on their parent
const TechCardVariants = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2 },
  },
};

const MySkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  // useEffect(() => {
  //   console.log("Element is in view: ", isInView);
  // }, [isInView]);

  return (
    <motion.section className="pb-64 md:pt-24 myskills">
      <Headline title={"My skills"}></Headline>
      <motion.h2 className="mt-8 font-light mb-12 ">
        I’ve had the pleasure to master these modern stacks and technologies at
        my best ability
      </motion.h2>
      <motion.div
        variants={TechCardVariants}
        initial="initial"
        // whileInView="animate"
        ref={ref}
        animate={isInView && "animate"}
        className=" grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4  "
      >
        {skills.map((skill) => (
          <TechCard key={skill.id} variants={TechCardVariants}></TechCard>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default MySkillsSection;
