import React from "react";
import { motion } from "framer-motion";

type Headlineprops = {
  title: String;
};

const Headline = ({ title }: Headlineprops) => {
  return (
    <div className="">
      <motion.h1 className="font-bold">{title}</motion.h1>
      <motion.div className="mt-[2px] w-10 h-2 bg-primary rounded-md "></motion.div>
    </div>
  );
};

export default Headline;
