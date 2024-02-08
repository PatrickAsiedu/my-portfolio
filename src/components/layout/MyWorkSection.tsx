import React from "react";
import { motion } from "framer-motion";
import Headline from "./Headline";
import ProjectCard from "../cards/ProjectCard";

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
    img: "http",
    desccription:
      "     Lorem ipsum dolor sit amet consectetur. Pellentesque placerat et id volutpat sit aliquam elementum ultrices amet. Ut consectetur necvolutpat dui in auctor. Sed vestibulum proin nec magna est venenatis viverra venenatis enim. Pellentesque massa elit sit at",
  },
  {
    id: 2,
    title: "React Empathy",
    img: "http",
    desccription:
      "     Lorem ipsum dolor sit amet consectetur. Pellentesque placerat et id volutpat sit aliquam elementum ultrices amet. Ut consectetur necvolutpat dui in auctor. Sed vestibulum proin nec magna est venenatis viverra venenatis enim. Pellentesque massa elit sit at",
  },
  {
    id: 3,
    title: "React Empathy",
    img: "http",
    desccription:
      "     Lorem ipsum dolor sit amet consectetur. Pellentesque placerat et id volutpat sit aliquam elementum ultrices amet. Ut consectetur necvolutpat dui in auctor. Sed vestibulum proin nec magna est venenatis viverra venenatis enim. Pellentesque massa elit sit at",
  },
  {
    id: 4,
    title: "React Empathy",
    img: "http",
    desccription:
      "     Lorem ipsum dolor sit amet consectetur. Pellentesque placerat et id volutpat sit aliquam elementum ultrices amet. Ut consectetur necvolutpat dui in auctor. Sed vestibulum proin nec magna est venenatis viverra venenatis enim. Pellentesque massa elit sit at",
  },
];

const MyWorkSection = () => {
  return (
    <motion.section className="pb-32 lg:pb-48 md:pt-24 mywork">
      <Headline title={"My work"}></Headline>
      <ProjectCard></ProjectCard>
    </motion.section>
  );
};

export default MyWorkSection;
