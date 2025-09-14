import { motion } from "framer-motion";
import myImage from "../../assets/patrick-2ff.jpg";
// import myImage from "../../assets/patrick-2f.jpg"

const HeroSection = () => {
  return (
    <motion.main
      className="mt-20 md:mt-0 md:pt-48 md:flex pb-32 lg:pb-64 lg:h-screen 2xl:h-full relative "
      id="home"
    >
      <motion.div className="w-full  ">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="  font-bold  text-center text-4xl md:text-5xl md:text-left lg:text-6xl xl:text-[5.1rem]  md:leading-[1.1]"
        >
          Beautifully <br></br> Crafted Web <br></br> Experiences.
        </motion.h1>
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-center font-light  md:text-left"
        >
          Hire a front-end developer with UI/UX intuition
        </motion.h1>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center md:justify-start"
        >
          <motion.a
            href="#mywork"
            className=" mt-8 bg-primary py-4 px-12 rounded-md font-bold "
          >
            My work
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div
        className="relative w-full "
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={myImage}
          srcSet={`
            ${myImage} 400w,
            ${myImage} 800w,
            ${myImage} 1200w
          `}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 50vw"
          className="mt-4 w-full md:w-[90%] xl:w-[80%] md:absolute -top-24 lg:-top-32   "
          alt=""
        />
      </motion.div>
    </motion.main>
  );
};

export default HeroSection;
