import React from "react";
import Header from "../components/layout/Header";
import HeroSection from "../components/layout/HeroSection";
import MyWorkSection from "../components/layout/MyWorkSection";
import MySkillsSection from "../components/layout/MySkillsSection";
import ContactMe from "../components/layout/ContactMe";
import MyWorkSectionAlt from "../components/layout/MyWorkSectionAlt";

const Home = () => {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      {/* <MyWorkSection></MyWorkSection> */}
      <MyWorkSectionAlt></MyWorkSectionAlt>

      <MySkillsSection></MySkillsSection>
      <ContactMe></ContactMe>
    </>
  );
};

export default Home;
