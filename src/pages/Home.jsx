import React from "react";
import Hero from "../component/Hero";
import AboutSection from "../component/AboutSection";
import FeaturesSection from "../component/FeaturesSection";
import SmartFilingSection from "../component/SmartFilingSection";
import NoHiddenChargesSection from "../component/NoHiddenChargesSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <SmartFilingSection />
      <NoHiddenChargesSection />
     
    </div>
  );
};

export default Home;
