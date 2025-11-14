import React from "react";

const SmartFilingSection = () => {
  return (
    <section className="flex flex-col lg:flex-row">
      {/* ===== Left Side ===== */}
      <div className="bg-[#EFF6B3] w-full lg:w-1/2 px-10 lg:px-24 py-16">
        <h2 className="text-5xl font-extrabold text-[#0A4655] mb-8 leading-tight">
          Crores Saved Through <br /> Smart, AI-Driven ITR Filing
        </h2>

        <h3 className="text-xl font-semibold text-[#0A4655] mb-4">
          Simplifying Income Tax e–Filing for Every Indian
        </h3>

        <p className="text-[#0A4655] text-[17px] leading-relaxed mb-4">
          At Compliancebro, we combine intelligent automation with expert assistance
          to make income tax e filing simple, secure, and stress–free.
        </p>
        <p className="text-[#0A4655] text-[17px] leading-relaxed mb-8">
          Our assisted ITR filing platform helps salaried individuals,
          professionals, and startups file returns accurately, claim every
          deduction, and stay compliant — all on India’s most trusted secure
          online ITR filing platform.
        </p>

        <button className="bg-[#00A6C4] hover:bg-[#0DC0D6] text-white font-semibold rounded-md px-8 py-3 transition">
          Start ITR Filing
        </button>
      </div>

      {/* ===== Right Side ===== */}
      <div className="bg-[#F5FAF9] w-full lg:w-1/2 px-10 lg:px-24 py-16">
        <h2 className="text-4xl font-extrabold text-[#0A4655] mb-10 leading-tight">
          How Assisted ITR Filing <br /> Works with Compliancebro
        </h2>

        {/* Steps */}
        <div className="relative">
          {/* Step 1 */}
          <div className="flex items-start mb-10">
            <div className="flex flex-col items-center mr-6">
              <div className="w-10 h-10 rounded-full bg-[#00A6C4] text-white font-bold flex items-center justify-center">
                1
              </div>
              <div className="h-20 w-[2px] bg-dashed bg-[#00A6C4] border-l-2 border-dotted border-[#00A6C4] mt-1"></div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0A4655] mb-1">
                Connect Instantly via Live Chat
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Get expert support through our online income tax filing service,
                available right from your browser or mobile.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start mb-10">
            <div className="flex flex-col items-center mr-6">
              <div className="w-10 h-10 rounded-full bg-[#00A6C4] text-white font-bold flex items-center justify-center">
                2
              </div>
              <div className="h-20 w-[2px] bg-dashed bg-[#00A6C4] border-l-2 border-dotted border-[#00A6C4] mt-1"></div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0A4655] mb-1">
                Share Your Tax Details Securely
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Upload Form 16,{" "}
                <span className="text-[#007BFF] underline cursor-pointer">
                  TDS details
                </span>
                , and investment proofs via our encrypted, secure e–tax filing
                service.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start mb-10">
            <div className="flex flex-col items-center mr-6">
              <div className="w-10 h-10 rounded-full bg-[#00A6C4] text-white font-bold flex items-center justify-center">
                3
              </div>
              <div className="h-20 w-[2px] bg-dashed bg-[#00A6C4] border-l-2 border-dotted border-[#00A6C4] mt-1"></div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0A4655] mb-1">
                Review, Approve & File
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We prepare your return, summarize it for your approval, and
                ensure 100% accurate income tax return filing.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start">
            <div className="flex flex-col items-center mr-6">
              <div className="w-10 h-10 rounded-full bg-[#00A6C4] text-white font-bold flex items-center justify-center">
                4
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0A4655] mb-1">
                Get ITR Filed in 24 Hour
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Enjoy lightning-fast turnaround. Your ITR is filed online,
                error–free, and within 24 hours—guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartFilingSection;
