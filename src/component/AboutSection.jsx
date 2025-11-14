import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-[#95d0f0] text-[#0A4655] px-6 sm:px-10 md:px-16 lg:px-32 xl:px-48 py-16 md:py-20 relative overflow-hidden">
      {/* === Top Stats Row === */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-16 md:mb-20 gap-10 text-center md:text-left">
        {/* Users */}
        <div>
          <h3 className="text-gray-700 font-medium mb-2">Users</h3>
          <div className="flex justify-center md:justify-start items-center space-x-3">
            <span className="text-3xl">👥</span>
            <h2 className="text-3xl sm:text-4xl font-bold">13,00,000</h2>
          </div>
          <p className="text-gray-700 mt-2 text-sm sm:text-base">
            Users from 2600 towns trust Compliancebro
          </p>
        </div>

        {/* Impact */}
        <div>
          <h3 className="text-gray-700 font-medium mb-2">Impact</h3>
          <div className="flex justify-center md:justify-start items-center space-x-3">
            <span className="text-3xl">💡</span>
            <h2 className="text-3xl sm:text-4xl font-bold">94%</h2>
          </div>
          <p className="text-gray-700 mt-2 text-sm sm:text-base max-w-xs">
            That’s how many 1st time users understand this easily
          </p>
        </div>

        {/* Founded */}
        <div>
          <h3 className="text-gray-700 font-medium mb-2">Founded</h3>
          <div className="flex justify-center md:justify-start items-center space-x-3">
            <span className="text-3xl">⚡</span>
            <h2 className="text-3xl sm:text-4xl font-bold">2017</h2>
          </div>
          <p className="text-gray-700 mt-2 text-sm sm:text-base max-w-xs">
            Led by a team of ex-IRS joint commissioners and accomplished CAs — 
            India’s highest-rated and most trusted assisted tax filing platform.
          </p>
        </div>
      </div>

      {/* === Main Content Section === */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        {/* Left: Phone Images */}
        <div className="relative flex justify-center lg:justify-start items-center lg:items-end mt-4 lg:mt-0">
          <img
            src="invoice_3.jpg"
            alt="Compliance bro App Preview"
            className="w-[260px] sm:w-[360px] md:w-[450px] lg:w-[520px] drop-shadow-lg"
          />
        </div>

        {/* Right: Text Content */}
        <div className="max-w-xl text-center lg:text-left mt-10 lg:mt-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug mb-6 text-black">
            India’s First AI-powered Platform for ITR Filing and Tax Compliance
          </h2>

          <p className="text-gray-800 text-base sm:text-lg mb-8 leading-relaxed">
            Experience fast, reliable, and secure online ITR filing with ComplianceBro.
          </p>

          <ul className="space-y-4 mb-10 text-[15px] sm:text-[17px] text-left">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              <span>
                <span className="text-blue-600 font-medium">
                  Free notice management
                </span>{" "}
                with expert-backed e-tax filing support
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              <span>
                Year-round query resolution with India’s top assisted ITR filing platform
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              <span>
                Trusted by startups, salaried professionals & freelancers
              </span>
            </li>
          </ul>

          <button className="bg-[#00A6C4] hover:bg-[#0DC0D6] text-white font-semibold rounded-md px-6 sm:px-8 py-3 transition">
            Start ITR Filing
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
