import React from "react";

const WealthBuilderSection = () => {
  return (
    <section className="bg-[#e9f5b8] flex flex-col lg:flex-row items-center justify-center gap-10 px-6 sm:px-10 md:px-20 lg:px-32 py-22">
      {/* Left Image */}
      <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
        <img
          src="https://static.wixstatic.com/media/5ef7f2_cb9c60855c27456f8c9654295ea2869e~mv2.jpg/v1/fill/w_454,h_810,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Rajkumar-Rao4.jpg"
          alt="TaxBuddy Wealth Builder"
          className="w-[220px] sm:w-[280px] md:w-[340px] lg:w-[380px] object-contain"
        />
      </div>

      {/* Right Text */}
      <div className="text-center lg:text-left max-w-lg w-full lg:w-1/2">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-[#000000] leading-tight">
          TaxBuddy Wealth <br /> Builder
        </h1>

        <h2 className="text-base sm:text-lg font-medium mb-4 text-[#000000]">
          Assisted Investment Planning Backed by Tax Insight
        </h2>

        <p className="text-[15px] text-[#111111] leading-relaxed mb-8">
          Get expert–assisted, actionable advice customized to your income, tax
          profile, and future goals. Whether you’re salaried, self–employed, or
          an NRI, our secure online platform helps align your investments with
          smarter tax planning strategies.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <input
            type="text"
            placeholder="Enter your mobile number"
            className="w-full sm:w-[280px] px-4 py-3 rounded-md border border-[#BEBEBE] bg-white text-[#333333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00A6C4]"
          />
          <button className="bg-[#00A6C4] hover:bg-[#0DC0D6] text-white font-semibold rounded-md px-6 py-3 w-full sm:w-auto transition">
            Grow your Wealth
          </button>
        </div>
      </div>
    </section>
  );
};

export default WealthBuilderSection;
