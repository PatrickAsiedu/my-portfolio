import React from "react";
import { motion } from "framer-motion";

type Headlineprops = {
  title: String;
  variants?: any;
};

const Headline = ({ title, variants }: Headlineprops) => {
  return (
    <motion.div variants={variants} className="">
      <motion.h1 className="font-bold">{title}</motion.h1>
      <motion.div className="mt-[2px] w-10 h-2 bg-primary rounded-md "></motion.div>
    </motion.div>
  );
};

export default Headline;
