import React from "react";

const Login = () => {
  return (
    <section className="bg-[#0D3B46] text-white min-h-screen w-full p-6 md:p-16 flex flex-col lg:flex-row justify-between">

      {/* LEFT SIDE */}
      <div className="max-w-xl">
        {/* COMPANY LOGO TEXT */}
        <h1 className="text-4xl font-bold tracking-wide mb-6">
          ComplianceBro
        </h1>

        {/* MAIN HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Secure ITR filing with ComplianceBro!
        </h2>

        {/* SUBTEXT */}
        <p className="text-lg text-gray-200 mb-4">
          Free Notice Compliance | 365 Days Support
        </p>

        {/* GOOGLE REVIEWS IMAGE */}
        <img
          src="https://itr.taxbuddy.com/assets/images/rating.png"
          alt="Google Reviews"
          className="w-[250px] mb-8"
        />

        {/* WHAT TO EXPECT */}
        <h3 className="text-2xl font-bold mb-4">
          What to expect from ComplianceBro AI
        </h3>

        <ul className="space-y-4 text-lg">
          <li className="flex items-start gap-3">
            <span className="text-teal-400 text-2xl">✔</span>
            It will request your details for ITR filing
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-400 text-2xl">✔</span>
            It will calculate all tax saving opportunities
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-400 text-2xl">✔</span>
            It will create a summary for you to approve
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-400 text-2xl">✔</span>
            Once approved, it will file your ITR on the income tax portal
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col items-center mt-12 lg:mt-0 w-full lg:w-auto">

        {/* PERSON IMAGE */}
        <img
          src=""
          alt="Person"
          className="w-[320px] md:w-[380px] lg:w-[420px] mb-10"
        />
                {/* SELF FILE BOX */}
        <div className="bg-white text-[#0D3B46] rounded-2xl p-10 w-[330px] sm:w-[450px] text-center mb-8">
          <h3 className="text-2xl font-semibold mb-5">
            Self-File With ComplianceBro AI
          </h3>
          <button className="bg-[#00A6C4] hover:bg-[#0DC0D6] px-6 py-3 rounded-md text-white font-semibold w-[120px]">
            Sign Up
          </button>
        </div>

        <p className="text-lg mb-8">OR</p>

        {/* HIRE EXPERT BOX */}
        <div className="bg-white text-[#0D3B46] rounded-2xl p-10 w-[330px] sm:w-[450px] text-center">
          <h3 className="text-2xl font-semibold mb-5">
            Hire Tax Expert
          </h3>
          <button className="bg-[#00A6C4] hover:bg-[#0DC0D6] px-6 py-3 rounded-md text-white font-semibold w-[120px]">
            sign up 
          </button>
        </div>

      </div>
    </section>
  );
};

export default Login;
