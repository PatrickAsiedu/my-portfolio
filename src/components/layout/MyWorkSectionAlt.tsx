import React from "react";
import RenpathyImage from "../../assets/renpathy.png";
import BeastashImage from "../../assets/beatstash.png";
import ProjectCardAlt from "../cards/ProjectCardAlt";
import Headline from "./Headline";
import { useRef } from "react";
import { useScroll, useSpring, motion } from "framer-motion";
import { useTransform } from "framer-motion";

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
    img: BeastashImage,
    description:
      "     Lorem ipsum dolor sit amet consectetur. Pellentesque placerat et id volutpat sit aliquam elementum ultrices amet. Ut consectetur necvolutpat dui in auctor. Sed vestibulum proin nec magna est venenatis viverra venenatis enim. Pellentesque massa elit sit at",
  },
  {
    id: 3,
    title: "Beat Stars Clone",
    img: RenpathyImage,
    description:
      "     Lorem ipsum dolor sit amet consectetur. Pellentesque placerat et id volutpat sit aliquam elementum ultrices amet. Ut consectetur necvolutpat dui in auctor. Sed vestibulum proin nec magna est venenatis viverra venenatis enim. Pellentesque massa elit sit at",
  },
  {
    id: 4,
    title: "Space Invaders",
    img: BeastashImage,
    description:
      "     Lorem ipsum dolor sit amet consectetur. Pellentesque placerat et id volutpat sit aliquam elementum ultrices amet. Ut consectetur necvolutpat dui in auctor. Sed vestibulum proin nec magna est venenatis viverra venenatis enim. Pellentesque massa elit sit at",
  },
];

// const Portfolio = (
//   <section className="myworkalt">
//     <Headline title={"My work"}></Headline>
//     {projects.map((project) => (
//       <div key={project.id} className="h-screen ">
//         <ProjectCardAlt  project={project}></ProjectCardAlt>
//       </div>
//     ))}
//   </section>
// );
const Portfolio = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <section className="myworkalt " ref={ref}>
      <Headline title={"My work"}></Headline>
      {/* <motion.div
        style={{ scaleX }}
        className="h-3 w-full bg-blue-300    "
      ></motion.div> */}
      {projects.map((project) => (
        <div key={project.id} className="lg:h-screen ">
          <ProjectCardAlt project={project}></ProjectCardAlt>
        </div>
      ))}
    </section>
  );
};

const MyWorkSectionAlt = () => {
  return <Portfolio></Portfolio>;
};

export default MyWorkSectionAlt;
