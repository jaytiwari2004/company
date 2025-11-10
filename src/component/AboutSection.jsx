import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-[#E6DCF3] text-[#0A4655] px-48 h-[115vh] lg:px-48 py-20 relative overflow-hidden">
      {/* === Top Stats Row === */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
        {/* Users */}
        <div>
          <h3 className="text-gray-700 font-medium mb-2">Users</h3>
          <div className="flex items-center space-x-3">
            <span className="text-3xl">👥</span>
            <h2 className="text-4xl font-bold">13,00,000</h2>
          </div>
          <p className="text-gray-700 mt-2 text-sm">
            Users from 2600 towns trust TaxBuddy
          </p>
        </div>

        {/* Impact */}
        <div>
          <h3 className="text-gray-700 font-medium mb-2">Impact</h3>
          <div className="flex items-center space-x-3">
            <span className="text-3xl">💡</span>
            <h2 className="text-4xl font-bold">94%</h2>
          </div>
          <p className="text-gray-700 mt-2 text-sm max-w-xs">
            That’s how many 1st time users save tax with TaxBuddy
          </p>
        </div>

        {/* Founded */}
        <div>
          <h3 className="text-gray-700 font-medium mb-2">Founded</h3>
          <div className="flex items-center space-x-3">
            <span className="text-3xl">⚡</span>
            <h2 className="text-4xl font-bold">2017</h2>
          </div>
          <p className="text-gray-700 mt-2 text-sm max-w-xs">
            Led by a team of ex-IRS joint commissioners and accomplished CAs —
            India’s highest-rated and most trusted assisted tax filing platform.
          </p>
        </div>
      </div>

      {/* === Main Content Section === */}
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left: Phone Images */}
        <div className="relative flex justify-center items-end gap-6 mt-10 lg:mt-0">
          <img
            src="https://static.wixstatic.com/media/42bffb_e3f3a806208a425796c9f96abe0ab92c~mv2.png/v1/fill/w_928,h_976,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Appscreen-with-RR.png"
            alt="TaxBuddy App Preview"
            className="w-[450px] md:w-[500px] lg:w-[520px]"
          />
        </div>

        {/* Right: Text Content */}
        <div className="max-w-xl mt-10 lg:mt-0">
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-snug mb-6 text-black">
            India’s First AI-powered Platform for ITR Filing and Tax Compliance
          </h2>

          <p className="text-gray-800 text-lg mb-8 leading-relaxed">
            Experience fast, reliable, and secure online ITR filing with
            TaxBuddy.
          </p>

          <ul className="space-y-4 mb-10 text-[17px]">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              <span>
                <span className="text-blue-600 font-medium">Free notice management</span> with expert-backed e-tax filing support
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              <span>
                Year-round query resolution with India’s top assisted ITR filing
                platform
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              <span>
                Trusted by startups, salaried professionals & freelancers
              </span>
            </li>
          </ul>

          <button className="bg-[#00A6C4] hover:bg-[#0DC0D6] text-white font-semibold rounded-md px-8 py-3 transition">
            Start ITR Filing
          </button>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="#"
        className="fixed bottom-8 right-8 flex items-center gap-2 bg-[#F7931E] text-white px-5 py-3 rounded-full shadow-lg hover:bg-[#ffa733] transition"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-6 h-6 bg-white rounded-full p-1"
        />
        <span className="font-semibold">Talk to Tax Expert</span>
      </a>
    </section>
  );
};

export default AboutSection;
