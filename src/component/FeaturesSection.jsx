import React from "react";

const FeaturesSection = () => {
  return (
    <section className="bg-[#EFF8F8] text-[#0A4655] px-6 md:px-24 py-16 text-center">
      {/* === Heading === */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
        TaxBuddy: Your AI-Driven Partner for Online Income Tax Filing
      </h2>
      <p className="text-gray-700 text-lg mb-2">
        We simplify your e-filing journey with powerful automation and human expertise.
      </p>
      <p className="text-gray-900 font-semibold text-lg mb-10">
        Taxbuddy is your ideal partner for assisted{" "}
        <span className="text-[#007BFF] underline cursor-pointer">
          Income Tax Filing
        </span>{" "}
        as we offer
      </p>

      {/* === Features Grid === */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center max-w-5xl mx-auto mb-16">
        {/* Card 1 */}
        <div className="bg-[#C9E5EE] rounded-md p-6 text-left shadow-sm border border-[#C9E5EE] hover:shadow-md transition">
          <div className="flex justify-center text-4xl mb-3">⚙️</div>
          <h3 className="text-lg font-semibold mb-2 text-center">
            Expert-Assisted Income Tax eFiling Services
          </h3>
          <p className="text-[#0A4655] text-[15px] leading-relaxed text-center">
            Get personalized help from our in-house professionals. Whether
            you’re filing as a salaried employee, freelancer, or managing a
            business, our team ensures 100% accuracy and maximum savings—
            backed by one of India’s most trusted online e-tax filing platforms.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#C9E5EE] rounded-md p-6 text-left shadow-sm border border-[#C9E5EE] hover:shadow-md transition">
          <div className="flex justify-center text-4xl mb-3">📅</div>
          <h3 className="text-lg font-semibold mb-2 text-center">
            Timely, Hassle-Free ITR Filing
          </h3>
          <p className="text-[#0A4655] text-[15px] leading-relaxed text-center">
            Stay ahead of deadlines with AI-powered reminders and automated
            updates. Our system ensures smooth, compliant Income Tax Return
            Filing — always on time.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#C9E5EE] rounded-md p-6 text-left shadow-sm border border-[#C9E5EE] hover:shadow-md transition">
          <div className="flex justify-center text-4xl mb-3">🔒</div>
          <h3 className="text-lg font-semibold mb-2 text-center">
            Secure Online ITR Filing Platform
          </h3>
          <p className="text-[#0A4655] text-[15px] leading-relaxed text-center">
            Your data is safe with us. TaxBuddy’s secure e-tax filing services
            use advanced encryption to keep your personal and financial
            information private.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#C9E5EE] rounded-md p-6 text-left shadow-sm border border-[#C9E5EE] hover:shadow-md transition">
          <div className="flex justify-center text-4xl mb-3">🧾</div>
          <h3 className="text-lg font-semibold mb-2 text-center">
            Seamless Filing with Smart Tools
          </h3>
          <p className="text-[#0A4655] text-[15px] leading-relaxed text-center">
            Upload Form 16, review Form 26AS, and auto-import income details
            using our integrated income tax filing tool. Our online incometax
            filing services cover everything from salary to capital gains and{" "}
            <span className="text-[#007BFF] underline cursor-pointer">
              house property
            </span>
            .
          </p>
        </div>
      </div>

      {/* === Bottom Section === */}
      <div className="text-center mt-10">
        <p className="text-black font-semibold mb-2">
          Take Control of Your Taxes
        </p>
        <p className="text-gray-900 mb-6 text-[16px]">
          Join lakhs of Indians using TaxBuddy—India’s most secure and
          easy-to-use income tax e-filing website for individuals and businesses.
        </p>
        <button className="bg-[#00A6C4] hover:bg-[#0DC0D6] text-white font-semibold rounded-md px-8 py-3 transition">
          File Income Tax Return Online
        </button>
      </div>

      {/* Floating WhatsApp Button */}
     
    </section>
  );
};

export default FeaturesSection;
