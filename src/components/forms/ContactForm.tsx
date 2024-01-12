import React from "react";
import { motion } from "framer-motion";
import { Input } from "../ui/Input";

const ContactForm = () => {
  return (
    <motion.form>
      <Input name={"Name"} type={"text"} label={"Name"}></Input>
      <Input
        name={"Email Address"}
        type={"email"}
        label={"Email Address"}
      ></Input>
      <Input name={"Message"} type={"text"} label={"Message"}></Input>
      <motion.button className="mt-2 bg-primary rounded-md px-8 py-4 font-bold text-black">
        Send Message
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
