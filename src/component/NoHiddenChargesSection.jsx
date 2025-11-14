import React from "react";

const NoHiddenChargesSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#072529] text-white flex flex-col lg:flex-row items-center justify-between px-10 lg:px-48 py-20">
      {/* === LEFT BLUR GRADIENT === */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#072529] via-[#072529]/80 to-transparent blur-3xl pointer-events-none"></div>

      {/* === RIGHT BLUR GRADIENT === */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#072529] via-[#072529]/80 to-transparent blur-3xl pointer-events-none"></div>

      {/* ===== Left Text Section ===== */}
      <div className="max-w-xl z-10">
        <p className="text-[#19A7CE] font-semibold mb-3">
          Real Experts. Real Support. True Assisted Tax Compliance.
        </p>

        <h2 className="text-5xl font-extrabold leading-tight mb-6">
          No Hidden Charges — <br /> Ever
        </h2>

        <p className="text-[#E0EAEA] text-[17px] leading-relaxed mb-6">
          Enjoy complete peace of mind with fully transparent pricing. Our
          income tax filing services are designed to be secure, reliable, and
          always backed by expert support.
        </p>

        <div className="flex items-start mb-6">
          <span className="text-[#2ECC71] text-2xl mr-2 mt-[2px]">☑️</span>
          <div>
            <p className="text-white font-bold text-[18px]">
              97.4% Users Get It Right the First Time
            </p>
            <p className="text-[#E0EAEA] text-[16px] leading-relaxed mt-1">
              With our expert–assisted ITR filing, most users file error–free on
              the first attempt. Got a tax notice? No worries — our team handles
              it at no extra cost through our secure online ITR filing platform.
            </p>
          </div>
        </div>

        <button className="bg-[#00A6C4] hover:bg-[#0DC0D6] text-white font-semibold rounded-md px-8 py-3 transition">
          Start Filing
        </button>
      </div>

      {/* ===== Right Image Section ===== */}
      <div className="mt-12 lg:mt-0 relative z-5 lg:-translate-x-24 xl:-translate-x-26">
        {/* background glow effect behind phone */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0A4655]/50 to-[#0A4655]/80 blur-2xl rounded-full scale-125"></div>

        <img
          src="49135.jpg"
          alt="Compliancebro App Preview"
          className="relative w-[380px] md:w-[420px] lg:w-[480px] rounded-lg shadow-2xl"
        />
      </div>

    </section>
  );
};

export default NoHiddenChargesSection;
