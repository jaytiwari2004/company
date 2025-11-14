import React from "react";

const Hero = () => {
  return (

    <section className="mt-14 bg-[#072529] text-white px-6 sm:px-10 md:px-16 lg:px-32 xl:px-48 py-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      {/* ===== LEFT CONTENT ===== */}
      <div className="max-w-2xl z-10 text-center md:text-left">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-[60px] leading-tight md:leading-[70px] font-extrabold mb-6">
          File ITR in{" "}
          <span className="relative inline-block px-3 py-1 text-white font-semibold">
            <span className="bg-[linear-gradient(90deg,#04B9C6,#04B9C6)] rounded-[20%_40%_30%_50%/60%_30%_70%_40%] px-3 py-1 inline-block">
              3 minutes
            </span>
          </span>
        </h1>

        {/* Google Reviews */}
        <div className="flex justify-center md:justify-start items-center space-x-2 mb-4">
          <img
            src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg"
            alt="Google"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
          <p className="text-base sm:text-lg">
            <span className="font-semibold">4.9 ★★★★★</span> Google Reviews
          </p>
        </div>

        <p className="text-base sm:text-lg mb-8 font-medium">
          Free Notice Compliance | 365 days support
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 sm:gap-6 items-center md:items-start justify-center md:justify-start">
          <div className="border border-white rounded-2xl px-6 sm:px-8 py-4 max-w-md w-full sm:w-auto">
            <p className="font-semibold text-white mb-2 text-center md:text-left">
              Self-File With Compliancebro AI
            </p>
            <button className="bg-[#00A6C4] hover:bg-[#0DC0D6] text-white font-semibold rounded-lg px-5 sm:px-6 py-2 transition w-full sm:w-auto">
              Start Self Filing
            </button>
          </div>

          <div className="border border-white rounded-2xl px-6 sm:px-8 py-4 max-w-md w-full sm:w-auto">
            <p className="font-semibold text-white mb-2 text-center md:text-left">
              File ITR With a Tax Expert
            </p>
            <button className="bg-[#00A6C4] hover:bg-[#0DC0D6] text-white font-semibold rounded-lg px-5 sm:px-6 py-2 transition w-full sm:w-auto">
              Connect now
            </button>
          </div>
        </div>
      </div>

      {/* ===== RIGHT CONTENT (Images) ===== */}
      <div className="relative mt-12 md:mt-0 flex justify-center md:justify-end md:-ml-10 lg:-ml-20 xl:-ml-24">
        {/* Man Image */}
        <img
          src="/49121.jpg"
          alt="Man"
          className="relative z-10 w-[250px] sm:w-[320px] md:w-[400px] lg:w-[460px]"
        />

        {/* Phone Image */}
        <img
          src="https://taxbuddy.com/assets/newPhone.webp"
          alt="Phone UI"
          className="absolute top-10 right-[-30px] sm:top-12 sm:right-[-40px] w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] rounded-lg shadow-lg"
        />
      </div>

      {/* ===== FLOATING BUTTON ===== */}
      
    </section>
  );
};

export default Hero;
