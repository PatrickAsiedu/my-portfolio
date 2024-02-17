import React, { useRef } from "react";

import { motion, useInView } from "framer-motion";
import ContactForm from "../forms/ContactForm";
import Headline from "./Headline";
const contactVariants = {
  initial: {
    y: 200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    // transition: { staggerChildren: 0.3 },
    transition: { duration: 0.5 },
  },
};

const ContactMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "50px" });
  return (
    <motion.section className="pb-32 md:pt-24 contactme">
      <Headline title={"Contact Me"}></Headline>
      <motion.h2 ref={ref} className=" mt-8 font-light pb-14">
        Feel free to contact me at anytime via the means below.
      </motion.h2>
      <ContactForm variants={contactVariants}></ContactForm>
    </motion.section>
  );
};

export default ContactMe;
