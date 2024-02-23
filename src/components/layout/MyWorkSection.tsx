import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Headline from "./Headline";
import ProjectCard from "../cards/ProjectCard";
import RenpathyImage from "../../assets/renpathy.png";
import BeastarsImage from "../../assets/beatstars.png";

type projects = {
  id: number;
  title: string;
  img: string;
  description: string;
};

const projects = [
  {
    id: 1,
    title: "React Empathy",
    img: RenpathyImage,
    description:
      "     Lorem ipsum dolor sit amet consectetur. Pellentesque placerat et id volutpat sit aliquam elementum ultrices amet. Ut consectetur necvolutpat dui in auctor. Sed vestibulum proin nec magna est venenatis viverra venenatis enim. Pellentesque massa elit sit at",
  },
  {
    id: 2,
    title: "Food Odering App",
    img: "https://unsplash.com/photos/person-holding-white-and-black-labeled-card-F0e3AdcwVbM",
    description:
      "     Lorem ipsum dolor sit amet consectetur. Pellentesque placerat et id volutpat sit aliquam elementum ultrices amet. Ut consectetur necvolutpat dui in auctor. Sed vestibulum proin nec magna est venenatis viverra venenatis enim. Pellentesque massa elit sit at",
  },
  {
    id: 3,
    title: "Beat Stars Clone",
    img: BeastarsImage,
    description:
      "     Lorem ipsum dolor sit amet consectetur. Pellentesque placerat et id volutpat sit aliquam elementum ultrices amet. Ut consectetur necvolutpat dui in auctor. Sed vestibulum proin nec magna est venenatis viverra venenatis enim. Pellentesque massa elit sit at",
  },
  {
    id: 4,
    title: "Space Invaders",
    img: "http",
    description:
      "     Lorem ipsum dolor sit amet consectetur. Pellentesque placerat et id volutpat sit aliquam elementum ultrices amet. Ut consectetur necvolutpat dui in auctor. Sed vestibulum proin nec magna est venenatis viverra venenatis enim. Pellentesque massa elit sit at",
  },
];

const MyWorkSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-78%"]);
  return (
    <motion.section
      ref={ref}
      className="pb-32 lg:pb-48 h-[calc(500vh)]  mywork relative "
    >
      <Headline title={"My work"}></Headline>
      <motion.div className=" sticky top-0 flex  overflow-hidden ">
        <motion.div style={{ x }} className=" flex gap-10  ">
          {/* <div className="h-screen w-screen flex items-center "></div> */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project}></ProjectCard>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default MyWorkSection;
