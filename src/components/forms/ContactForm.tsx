import React from "react";
import { motion } from "framer-motion";
import { Input } from "../ui/Input";

type ContactFormProps = {
  variants: any;
};

const ContactForm = ({ variants }: ContactFormProps) => {
  return (
    <motion.form
      className=""
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <Input
        variants={variants}
        name={"Name"}
        type={"text"}
        label={"Name"}
      ></Input>
      <Input
        variants={variants}
        name={"Email Address"}
        type={"email"}
        label={"Email Address"}
      ></Input>
      {/* <Input
        variants={variants}
        name={"Message"}
        type={"text"}
        label={"Message"}
      ></Input> */}
      <motion.div className="w-full pb-6 " variants={variants}>
        <label htmlFor="" className="font-bold text-xs block">
          Message
        </label>
        <textarea
          className="h-44 lg:h-56 md:w-[500px] lg:w-[900px] mt-3 w-full   bg-input pl-4 pt-4"
          name="message"
          id="message"
        ></textarea>
      </motion.div>
      <motion.button
        variants={variants}
        className="mt-2 bg-primary rounded-md px-8 py-4 font-bold text-black"
      >
        Send Message
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
