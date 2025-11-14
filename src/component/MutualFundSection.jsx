import React from "react";

const MutualFunds = () => {
  return (
    <section className="bg-[#072529] text-white w-full py-20 px-6 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center justify-between">

      {/* LEFT SECTION */}
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-6">
          Invest in ‘Zero–Commission’ <br /> Mutual Funds
        </h1>

        <p className="text-xl text-gray-200 mb-6">
          Compare Funds. Understand Risk. Invest Smarter.
        </p>

        <p className="text-[16px] text-gray-200 leading-relaxed mb-10">
          Use our advanced rating system to evaluate top–performing mutual 
          funds. Track historical returns, assess risk levels, and project 
          future performance — all within a secure, intuitive dashboard.
        </p>

        {/* INPUT + BUTTON */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Enter your mobile number"
            className="w-full sm:w-[380px] px-5 py-3 rounded-md text-black focus:outline-none"
          />
          <button className="bg-[#00A6C4] hover:bg-[#0DC0D6] px-6 py-3 rounded-md font-semibold text-white">
            Start Investing
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="mt-14 lg:mt-0 flex justify-center lg:justify-end w-full">
        <img
          src="49121.jpg"
          alt="Mutual Funds Banner"
          className="w-[260px] sm:w-[320px] md:w-[400px] lg:w-[450px]"
        />
      </div>

    </section>
  );
};

export default MutualFunds;
