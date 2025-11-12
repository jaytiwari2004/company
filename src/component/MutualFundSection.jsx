import React from "react";

const MutualFundSection = () => {
  return (
    <section className="bg-[#144147] text-white flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-48 py-22">
      {/* === Left Text Content === */}
      <div className="max-w-2xl text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
          Invest in ‘Zero–Commission’ <br /> Mutual Funds
        </h1>

        <h2 className="text-lg sm:text-xl font-medium mb-6">
          Compare Funds. Understand Risk. Invest Smarter.
        </h2>

        <p className="text-base text-[#E0EAEA] leading-relaxed mb-8">
          Use our advanced rating system to evaluate top–performing mutual
          funds. Track historical returns, assess risk levels, and project
          future performance — all within a secure, intuitive dashboard.
        </p>

        {/* Input and Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <input
            type="text"
            placeholder="Enter your mobile number"
            className="w-full sm:w-[320px] px-4 py-3 rounded-md text-[#333333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00A6C4]"
          />
          <button className="bg-[#00A6C4] hover:bg-[#0DC0D6] text-white font-semibold rounded-md px-6 py-3 w-full sm:w-auto transition">
            Start Investing
          </button>
        </div>
      </div>

      {/* === Right Image === */}
      <div className="mt-12 lg:mt-0 flex justify-center lg:justify-end w-full lg:w-auto">
        <img
          src="https://static.wixstatic.com/media/5ef7f2_25a5e91cd358467ba02787cf3a924aed~mv2.jpg/v1/fill/w_540,h_852,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Rajkumar-Rao2-1.jpg"
          alt="Zero Commission Mutual Funds"
          className="w-[300px] sm:w-[400px] md:w-[480px] lg:w-[520px] object-contain"
        />
      </div>
    </section>
  );
};

export default MutualFundSection;
