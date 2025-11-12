import React from "react";
import Hero from "../component/Hero";
import AboutSection from "../component/AboutSection";
import FeaturesSection from "../component/FeaturesSection";
import SmartFilingSection from "../component/SmartFilingSection";
import NoHiddenChargesSection from "../component/NoHiddenChargesSection";
import ExpertFilingSection from "../component/ExpertFilingSection";
import PortfolioDoctorSection from "../component/PortfolioDoctorSection";
import WealthBuilderSection from "../component/WealthBuilderSection";
import MutualFundSection from "../component/MutualFundSection";
import ClientReviewsSection from "../component/ClientReviewsSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <SmartFilingSection />
      <NoHiddenChargesSection />
      <ExpertFilingSection />
      <PortfolioDoctorSection />
      <WealthBuilderSection />
      <MutualFundSection />

      <ClientReviewsSection />
     
    </div>
  );
};

export default Home;
