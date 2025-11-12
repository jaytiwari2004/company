import React from "react";

const MutualFundSection = () => {
  return (
    <section className="bg-[#0A4655] text-white flex flex-col lg:flex-row items-center justify-center gap-10 px-6 sm:px-10 md:px-20 lg:px-32 py-20">
      {/* Left Text */}
      <div className="max-w-lg text-center lg:text-left w-full lg:w-1/2">
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
          Invest in ‘Zero–Commission’ <br /> Mutual Funds
        </h1>

        <h2 className="text-base sm:text-lg font-medium mb-6">
          Compare Funds. Understand Risk. Invest Smarter.
        </h2>

        <p className="text-[15px] text-[#E0EAEA] leading-relaxed mb-8">
          Use our advanced rating system to evaluate top–performing mutual
          funds. Track historical returns, assess risk levels, and project
          future performance — all within a secure, intuitive dashboard.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <input
            type="text"
            placeholder="Enter your mobile number"
            className="w-full sm:w-[280px] px-4 py-3 rounded-md text-[#333333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00A6C4]"
          />
          <button className="bg-[#00A6C4] hover:bg-[#0DC0D6] text-white font-semibold rounded-md px-6 py-3 w-full sm:w-auto transition">
            Start Investing
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
        <img
          src="https://static.wixstatic.com/media/5ef7f2_8b9e6f6c62b744c3a8e45e4cf6e4f1de~mv2.png/v1/fill/w_800,h_700,al_c,lg_1,q_90,enc_avif,quality_auto/Zero-Commission.png"
          alt="Zero Commission Mutual Funds"
          className="w-[220px] sm:w-[280px] md:w-[340px] lg:w-[380px] object-contain"
        />
      </div>
    </section>
  );
};

export default MutualFundSection;
