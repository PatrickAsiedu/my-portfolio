import React, { useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
import Headline from "./Headline";
import TechCard from "../cards/TechCard";
import { useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { PiAngularLogo } from "react-icons/pi";
import { FaAngular } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiAdobexd } from "react-icons/si";

const skills = [
  { id: 1, title: "React", icon: FaReact },
  { id: 2, title: "Nextjs", icon: RiNextjsLine },
  { id: 3, title: "Angular", icon: FaAngular },
  { id: 4, title: "Tailwind Css", icon: RiTailwindCssFill },
  { id: 5, title: "Typescript", icon: SiTypescript },
  { id: 6, title: "NodeJs", icon: FaNode },
  { id: 7, title: "MongoDB", icon: DiMongodb },
  { id: 8, title: "Figma", icon: FaFigma },
  { id: 9, title: "Adobe XD", icon: SiAdobexd },
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
    <motion.section className="pb-64 md:pt-24 myskills" id="myskills">
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
          <TechCard
            key={skill.id}
            variants={TechCardVariants}
            skill={skill}
          ></TechCard>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default MySkillsSection;
