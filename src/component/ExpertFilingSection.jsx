import React from "react";

const ExpertFilingSection = () => {
  return (
    <section className="bg-white text-[#000000]">
      {/* === Top Section === */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-20 px-6 sm:px-10 md:px-20 lg:px-42 py-26 text-center lg:text-left">
        {/* Image */}
        <img
          src="https://static.wixstatic.com/media/5ef7f2_476c74792dc040d7a802f4a223059b7d~mv2.jpg/v1/fill/w_710,h_850,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Rajkumar-Rao3-2.jpg"
          alt="Tax Expert"
          className="w-[200px] sm:w-[260px] md:w-[320px] lg:w-[380px] mx-auto lg:mx-0"
        />

        {/* Text */}
        <div className="max-w-lg">
          <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug mb-3 text-black">
            Start Income Tax e–Filing with our Tax Expert Today
          </h2>

          <div className="flex flex-wrap justify-center lg:justify-start gap-5 text-sm sm:text-base mb-6 text-black font-semibold">
            <p className="flex items-center gap-2">
              ⭐ <span>4.9 Rating</span>
            </p>
            <p className="flex items-center gap-2">
              👥 <span>13,00,000 Users</span>
            </p>
            <p className="flex items-center gap-2">
              💼 <span>3000+ Tax experts</span>
            </p>
          </div>

          <button className="bg-[#00A6C4] hover:bg-[#0DC0D6] text-white font-semibold rounded-md px-6 py-2 text-sm sm:text-base transition">
            Start Filing Now
          </button>
        </div>
      </div>

      {/* === Bottom Section === */}
      <div className="bg-[#F9F9F9] py-20 px-6 sm:px-10 md:px-16 lg:px-48 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-10 text-black">
          Need More Than Just Filing? TaxBuddy’s Got You Covered
        </h2>

        {/* Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Card */}
          <div className="border border-[#BEBEBE] rounded-2xl p-8 text-left bg-white">
            <h3 className="text-xl font-extrabold mb-6 text-black">
              Smart Services for Individuals
            </h3>

            <ul className="space-y-6 text-[15px] text-[#222222] leading-relaxed">
              <li>
                <p className="font-bold text-black">
                  📑 Personalized ITR Filing Support
                </p>
                <p className="mt-1">
                  Whether you’re a salaried employee, NRI freelancer, or capital
                  gains investor — our expert-assisted ITR filing ensures
                  accurate, AI-backed e-filing tailored to your tax situation.
                </p>
              </li>

              <li>
                <p className="font-bold text-black">
                  💰 TDS on Property Sale{" "}
                  <span className="text-blue-700 underline cursor-pointer">
                    (Form 26QB)
                  </span>
                </p>
                <p className="mt-1">
                  Selling real estate? We handle your TDS compliance under{" "}
                  <span className="underline text-blue-700 cursor-pointer">
                    Section 194-IA
                  </span>{" "}
                  and file Form 26QB correctly through our secure e-tax filing
                  services — no hassle, no delay.
                </p>
              </li>

              <li>
                <p className="font-bold text-black">
                  📘 Legal Review for Personal Finance
                </p>
                <p className="mt-1">
                  Need HRA validation, rent agreement help, or investment proof
                  prep? Our team ensures your documents meet tax standards for
                  seamless income tax e-filing.
                </p>
              </li>
            </ul>

            <p className="mt-8 text-blue-700 underline cursor-pointer font-semibold">
              Explore Services for Individuals →
            </p>
          </div>

          {/* Right Card */}
          <div className="border border-[#BEBEBE] rounded-2xl p-8 text-left bg-white">
            <h3 className="text-xl font-extrabold mb-6 text-black">
              Complete Compliance Suite for Startups & Small Businesses
            </h3>

            <ul className="space-y-6 text-[15px] text-[#222222] leading-relaxed">
              <li>
                <p className="font-bold text-black">
                  🧾 End-to-End Tax Filing for Businesses
                </p>
                <p className="mt-1">
                  From GST returns to ITR, our income tax filing services cover
                  all compliance needs so you can focus on scaling while we
                  handle the filings.
                </p>
              </li>

              <li>
                <p className="font-bold text-black">
                  🧮 Business Registrations Made Easy
                </p>
                <p className="mt-1">
                  Get expert guidance on PF, ESI, PAN, Shop Act, and FSSAI
                  registrations — all supported by TaxBuddy’s trusted online
                  income tax services for entrepreneurs.
                </p>
              </li>

              <li>
                <p className="font-bold text-black">
                  🪪 Trademarks & DSC Assistance
                </p>
                <p className="mt-1">
                  Secure your brand identity and compliance with our quick help
                  for trademark registration, renewal, and Digital Signature
                  Certificates (DSC) setup — fully compliant and startup-ready.
                </p>
              </li>
            </ul>

            <p className="mt-8 text-blue-700 underline cursor-pointer font-semibold">
              See Business Services in Detail →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertFilingSection;
