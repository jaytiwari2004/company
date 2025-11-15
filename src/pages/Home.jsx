import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Hero from "../component/Hero";
import AboutSection from "../component/AboutSection";
import FeaturesSection from "../component/FeaturesSection";
import SmartFilingSection from "../component/SmartFilingSection";
import NoHiddenChargesSection from "../component/NoHiddenChargesSection";
import ExpertFilingSection from "../component/ExpertFilingSection";
import PortfolioDoctor from "../component/PortfolioDoctorSection";
import WealthBuilderSection from "../component/WealthBuilderSection";
import MutualFundSection from "../component/MutualFundSection";
import ClientReviewsSection from "../component/ClientReviewsSection";
import AwardsSection from "../component/AwardsSection";
import FAQSection from "../component/FAQSection";
import Footer from "../component/Footer";

const Home = () => {
  const navigate = useNavigate();

  // 🔐 Redirect if not logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // redirect user to login page
    }
  }, [navigate]);

  return (
    <div>
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <SmartFilingSection />
      <NoHiddenChargesSection />
      <ExpertFilingSection />
      <PortfolioDoctor />
      <WealthBuilderSection />
      <MutualFundSection />
      <ClientReviewsSection />
      <AwardsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
