import React from "react";
import Header from "../components/layout/Header";
import HeroSection from "../components/layout/HeroSection";
import MyWorkSection from "../components/layout/MyWorkSection";
import MySkillsSection from "../components/layout/MySkillsSection";
import ContactMe from "../components/layout/ContactMe";

const Home = () => {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <MyWorkSection></MyWorkSection>
      <MySkillsSection></MySkillsSection>
      <ContactMe></ContactMe>
    </>
  );
};

export default Home;
