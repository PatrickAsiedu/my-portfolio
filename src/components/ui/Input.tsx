import { motion } from "framer-motion";
import React from "react";

type InputProps = {
  name: string;
  type: string;
  label: string;
  variants?: any;
};

export function Input({ name, type, label, variants }: InputProps) {
  return (
    <motion.div variants={variants} className="w-full pb-6 ">
      <label htmlFor="" className="font-bold text-xs block">
        {label}
      </label>
      <input
        type="text"
        name="username"
        className={`${"mt-3 w-full   bg-input pl-4"} ${
          label === "Message"
            ? "h-44 lg:h-56 md:w-[500px] lg:w-[900px]"
            : "h-12 w-full md:w-96 "
        }`}
      />
    </motion.div>
  );
}
