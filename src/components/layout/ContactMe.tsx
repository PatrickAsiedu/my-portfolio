import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../forms/ContactForm";
import Headline from "./Headline";

const ContactMe = () => {
  return (
    <motion.section className="pb-32 md:pt-24 contactme">
      <Headline title={"Contact Me"}></Headline>
      <motion.h2 className=" mt-8 font-light pb-14">
        Feel free to contact me at anytime via the means below.
      </motion.h2>
      <ContactForm></ContactForm>
    </motion.section>
  );
};

export default ContactMe;
