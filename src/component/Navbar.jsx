import React, { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      {/* NAVBAR TOP */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        
        {/* LOGO */}
        <h1 className="text-2xl font-bold text-[#0C3C46]">
          Compliance<span className="text-[#00A7B6]">Bro</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <button className="hover:text-red-600 hover:underline underline-offset-4">Startup India</button>

          {/* REGISTRATION DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown(true)}
            onMouseLeave={() => setOpenDropdown(false)}
          >
            <button className="hover:text-red-600 hover:underline underline-offset-4">
              Registration
            </button>

            {/* MEGA MENU */}
            {openDropdown && (
              <div className="absolute left-0 top-full mt-4 bg-white shadow-xl border border-gray-200 p-6 grid grid-cols-4 gap-10 w-[900px] z-50 rounded-lg">
                
                {/* COLUMN 1 */}
                <div>
                  <h3 className="font-bold text-gray-800">Company Registration</h3>
                  <ul className="space-y-1 text-sm text-gray-600 mt-2">
                    <li>Proprietorship Registration</li>
                    <li>Partnership Registration</li>
                    <li>Limited Liability Partnership</li>
                    <li>One Person Company Registration</li>
                    <li>Private Limited Company Registration</li>
                    <li>Public Limited Company Registration</li>
                  </ul>

                  <h3 className="font-bold text-gray-800 mt-4">Special Entity Registration</h3>
                  <ul className="space-y-1 text-sm text-gray-600 mt-2">
                    <li>Section-8 Company Registration</li>
                    <li>Trust Registration</li>
                    <li>Society Registration</li>
                  </ul>
                </div>

                {/* COLUMN 2 */}
                <div>
                  <h3 className="font-bold text-gray-800">Industry Specific Registration</h3>
                  <ul className="space-y-1 text-sm text-gray-600 mt-2">
                    <li>FSSAI Registration</li>
                    <li>Import Export Code Registration</li>
                  </ul>

                  <h3 className="font-bold text-gray-800 mt-4">Tax Registration</h3>
                  <ul className="space-y-1 text-sm text-gray-600 mt-2">
                    <li>GST Registration</li>
                    <li>PF ESI Registration</li>
                  </ul>
                </div>

                {/* COLUMN 3 */}
                <div>
                  <h3 className="font-bold text-gray-800">Intellectual Property Rights</h3>
                  <ul className="space-y-1 text-sm text-gray-600 mt-2">
                    <li>Trademark Registration</li>
                    <li>Copyright</li>
                  </ul>

                  <h3 className="font-bold text-gray-800 mt-4">Certification</h3>
                  <ul className="space-y-1 text-sm text-gray-600 mt-2">
                    <li>ISO Certification</li>
                  </ul>
                </div>

                {/* COLUMN 4 */}
                <div>
                  <h3 className="font-bold text-gray-800">Things to do After Incorporation</h3>
                  <ul className="space-y-1 text-sm text-gray-600 mt-2">
                    <li>Stage-1: Basic Necessity</li>
                    <li>Stage-2: Industry Specific Necessity</li>
                    <li>Stage-3: Go Live & Get Funding</li>
                  </ul>
                </div>

              </div>
            )}
          </div>

          <button className="hover:text-red-600 hover:underline underline-offset-4">Compliance</button>
          <button className="hover:text-red-600 hover:underline underline-offset-4">Go Online</button>
          <button className="hover:text-red-600 hover:underline underline-offset-4">Tutorials</button>
          <button className="hover:text-red-600 hover:underline underline-offset-4">Downloads</button>
          <button className="hover:text-red-600 hover:underline underline-offset-4">Packages</button>

          {/* LOGIN BUTTON */}
          <button className="bg-red-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-700">
            Login/Sign Up
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpenMenu(!openMenu)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {openMenu && (
        <div className="md:hidden bg-white px-4 py-4 border-t">
          <ul className="space-y-3 text-gray-700 font-medium">

            <li>Startup India</li>

            <li className="font-bold mt-3">Registration</li>
            <ul className="ml-4 text-sm space-y-1">
              <li>Proprietorship Registration</li>
              <li>Partnership Registration</li>
              <li>LLP Registration</li>
              <li>One Person Company</li>
              <li>Private Limited Company</li>
            </ul>

            <li>Compliance</li>
            <li>Go Online</li>
            <li>Tutorials</li>
            <li>Downloads</li>
            <li>Packages</li>

            <button className="bg-red-600 w-full text-white py-2 rounded-md font-semibold mt-3">
              Login / Sign Up
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
