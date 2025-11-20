import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#0C3C46] text-white px-4 py-10 md:px-10">
      
      {/* Main Container */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE CONTENT */}
        <div>
          
          {/* TEXT LOGO - COMPLIANCEBRO */}
          <h1 className="text-4xl font-extrabold tracking-wide mb-6">
            Compliance<span className="text-[#00A7B6]">Bro</span>
          </h1>

          {/* Title Section */}
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Secure ITR filing with ComplianceBro!
          </h1>

          <p className="text-gray-200 mt-2">
            Free Notice Compliance | 365 Days Support
          </p>

          {/* Ratings */}
          <div className="flex items-center gap-3 mt-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Google_Reviews_logo.png/600px-Google_Reviews_logo.png"
              className="w-40"
            />
            <span className="text-yellow-400 text-lg font-bold">⭐ 4.9</span>
          </div>

          {/* What to expect */}
          <h2 className="text-2xl font-semibold mt-10">
            What to expect from ComplianceBro AI
          </h2>

          <ul className="mt-4 space-y-3 text-gray-100">
            <li className="flex items-start gap-2">
              <span className="text-teal-400">✔</span> It will request your
              details for ITR filing
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-400">✔</span> It will calculate all tax
              saving opportunities
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-400">✔</span> It will create a summary
              for you to approve
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-400">✔</span> Once approved, it will
              file your ITR on the income tax portal
            </li>
          </ul>

          {/* Business Registration Sections */}
          <h2 className="text-2xl font-semibold mt-10">Business Registration</h2>

          <div className="mt-6 grid sm:grid-cols-2 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="font-bold text-lg mb-2">Company Registration</h3>
              <ul className="text-gray-200 space-y-2 text-sm">
                <li>Proprietorship Registration</li>
                <li>Partnership Registration</li>
                <li>Limited Liability Partnership</li>
                <li>One Person Company Registration</li>
                <li>Private Limited Company Registration</li>
                <li>Public Limited Company Registration</li>
              </ul>

              <h3 className="font-bold text-lg mt-5 mb-2">
                Special Entity Registration
              </h3>
              <ul className="text-gray-200 space-y-2 text-sm">
                <li>Section-8 Company Registration</li>
                <li>Trust Registration</li>
                <li>Society Registration</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-bold text-lg mb-2">
                Industry Specific Registration
              </h3>
              <ul className="text-gray-200 space-y-2 text-sm">
                <li>FSSAI Registration</li>
                <li>Import Export Code Registration</li>
              </ul>

              <h3 className="font-bold text-lg mt-5 mb-2">Tax Registration</h3>
              <ul className="text-gray-200 space-y-2 text-sm">
                <li>GST Registration</li>
                <li>PF ESI Registration</li>
              </ul>

              <h3 className="font-bold text-lg mt-5 mb-2">
                Intellectual Property Rights
              </h3>
              <ul className="text-gray-200 space-y-2 text-sm">
                <li>Trademark Registration</li>
                <li>Copyright</li>
              </ul>

              <h3 className="font-bold text-lg mt-5 mb-2">Certification</h3>
              <ul className="text-gray-200 space-y-2 text-sm">
                <li>ISO Certification</li>
              </ul>

              <h3 className="font-bold text-lg mt-5 mb-2">
                Things to do After Incorporation
              </h3>
              <ul className="text-gray-200 space-y-2 text-sm">
                <li>Stage-1: Basic Necessity</li>
                <li>Stage-2: Industry Specific Necessity</li>
                <li>Stage-3: Go Live & Get Funding</li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE OPTIONS */}
        <div className="text-center flex flex-col items-center gap-8">

          {/* Rajkumar Image (Hidden on Mobile) */}
          <img
            src="https://taxbuddy.com/assets/images/home/rajkumar.png"
            className="w-72 hidden md:block"
          />

          {/* Card 1 */}
          <div className="bg-white w-full max-w-lg p-8 rounded-3xl shadow-xl text-[#0C3C46]">
            <h3 className="text-2xl font-bold">Self-File With ComplianceBro AI</h3>
            <button className="mt-6 bg-[#00A7B6] text-white px-6 py-2 rounded-lg shadow hover:scale-105 transition">
              Sign Up
            </button>
          </div>

          <p className="text-white text-lg">OR</p>

          {/* Card 2 */}
          <div className="bg-white w-full max-w-lg p-8 rounded-3xl shadow-xl text-[#0C3C46]">
            <h3 className="text-2xl font-bold">Hire Tax Expert</h3>
            <button className="mt-6 bg-[#00A7B6] text-white px-6 py-2 rounded-lg shadow hover:scale-105 transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
