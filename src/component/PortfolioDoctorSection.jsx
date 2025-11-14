import React from "react";

const PortfolioDoctor = () => {
  return (
    <section className="bg-[#072529] text-white w-full py-20 px-6 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center justify-between">

      {/* LEFT TEXT SECTION */}
      <div className="max-w-xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
          TaxBuddy Portfolio <br /> Doctor
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Get Your Investment Portfolio Analyzed in Minutes
        </p>

        <p className="text-[15px] text-gray-300 leading-relaxed mb-10">
          Upload your CAS report and let our AI-driven engine analyze your
          current holdings. Instantly discover top performers, laggards, and
          personalized insights to optimize your investments for better tax
          efficiency.
        </p>

        {/* INPUT + BUTTON */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Enter your mobile number"
            className="w-full sm:w-[380px] px-5 py-3 rounded-md text-black focus:outline-none"
          />
          <button className="bg-[#00A6C4] hover:bg-[#0DC0D6] text-white font-medium px-6 py-3 rounded-md">
            Analyze My Portfolio
          </button>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="mt-12 lg:mt-0 flex justify-center lg:justify-end w-full">
        <img
          src="49135.jpg"
          alt="Portfolio Doctor"
          className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[430px]"
        />
      </div>

    </section>
  );
};

export default PortfolioDoctor;
