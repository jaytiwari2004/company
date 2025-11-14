import React from "react";

const AwardsSection = () => {
  return (
    <section className="w-full">
      {/* === Top Banner === */}
      <div className="bg-black text-white py-4 flex flex-col md:flex-row justify-center items-center gap-3">
        <div className="flex items-center gap-3">
          <h2 className="text-lg sm:text-xl font-semibold text-center md:text-left">
            ET Now Best Brands 2024
          </h2>
          <img
            src="https://static.wixstatic.com/media/5ef7f2_d76365a823464210849e06739a98a117~mv2.jpg/v1/fill/w_2962,h_148,al_c,q_85,enc_avif,quality_auto/header---best-brand-banner.jpg"
            alt="ET Now Logo"
            className="w-16 h-auto"
          />
        </div>
        <div className="flex items-center gap-2">
          <img
            src="https://static.wixstatic.com/media/5ef7f2_2179c80030354526bee31a64fb744322~mv2.jpg/v1/fill/w_838,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Best-Brands-logo-2024-01.jpg"
            alt="Best Brand"
            className="w-10 h-auto"
          />
          <p className="text-sm sm:text-base tracking-wide">
            BEST BRANDS CONCLAVE
          </p>
        </div>
      </div>

      {/* === Brand Logos Section === */}
      <div className="bg-[#1E1E1E] py-6 px-4 flex flex-wrap justify-center items-center gap-8 sm:gap-12">
        <p className="text-gray-300 text-sm sm:text-base font-semibold">
          Business Standard
        </p>
        <p className="text-gray-300 text-sm sm:text-base font-semibold">
          BUSINESS INSIDER
        </p>
        <p className="text-gray-300 text-sm sm:text-base font-semibold">
          BusinessLine
        </p>
        <p className="text-gray-300 text-sm sm:text-base font-semibold">
          FINANCIAL EXPRESS
        </p>
        <p className="text-gray-300 text-sm sm:text-base font-semibold">
          businesstoday
        </p>
      </div>
    </section>
  );
};

export default AwardsSection;
