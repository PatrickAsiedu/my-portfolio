import React from "react";
import RenpathyImage from "../../assets/renpathy.png";
import BeatstashImage from "../../assets/beatstash.png";
import BslOrdersImage from "../../assets/bslorders.png";
import ProjectCardAlt from "../cards/ProjectCardAlt";
import Headline from "./Headline";
import TradeFlowImage from "../../assets/tradeflowscreenshot.png";

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
    title: "Bsl Orders",
    img: BslOrdersImage,
    description:
      "At Broadspectrum, where all employees are entitled to lunch, the use of Microsoft Forms for order placement resulted in inaccuracies, increased company costs, and added complexity for chefs. BSL Lunch is an authenticated web-based application designed to reduce costs by preventing duplicate orders, ensuring order accuracy, and simplifying the process for chefs, thereby improving efficiency and user experience.",
    link: "https://bslorders-client.vercel.app/",
    repo: "https://github.com/PatrickAsiedu/bslorders-client",
  },

  {
    id: 2,
    title: "TradeFlow",
    img: TradeFlowImage,
    description:
      "TradeFlow is a comprehensive trading engine web application that enables users to monitor real-time stock market trends, manage portfolios, and execute trades across multiple exchanges to achieve optimal market value. It was built with a micro-service architecture using spring boot and Angular.",
    link: "",
    repo: "",
  },

  {
    id: 3,
    title: "BeatStash",
    img: BeatstashImage,
    description:
      "     A dynamic marketplace connecting music producers and artists, enabling producers to sell instrumentals and artists to purchase them. It features a robust search engine for discovering beats and an integrated audio player for seamless previewing.",
    link: "https://beatstash.onrender.com",
    repo: "https://github.com/PatrickAsiedu/beatstash-frontend",
  },
  {
    id: 4,
    title: "React Empathy",
    img: RenpathyImage,
    description:
      "Renpathy, a Web app for documenting contracts between real estate owners and applicants ",
    link: "https://dealtor-web.vercel.app/",
    repo: "https://github.com/PatrickAsiedu/dealtor-web",
  },

  // {
  //   id: 3,
  //   title: "Beat Stars Clone",
  //   img: RenpathyImage,
  //   description:
  //     "     Lorem ipsum dolor sit amet consectetur. Pellentesque placerat et id volutpat sit aliquam elementum ultrices amet. Ut consectetur necvolutpat dui in auctor. Sed vestibulum proin nec magna est venenatis viverra venenatis enim. Pellentesque massa elit sit at",
  // },
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
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <section className="myworkalt " ref={ref} id="mywork">
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
