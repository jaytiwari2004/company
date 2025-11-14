import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-16 lg:px-40 text-[13px] leading-relaxed">

      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-14">

        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-bold mb-1">ComplianceBro</h2>
          <p className="text-[11px] text-gray-300">
            ComplianceBro simplifies tax filing, accounting & business compliance.
            We provide expert-backed solutions at an affordable cost.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            <FaFacebookF size={14} className="cursor-pointer" />
            <FaTwitter size={14} className="cursor-pointer" />
            <FaInstagram size={14} className="cursor-pointer" />
            <FaLinkedinIn size={14} className="cursor-pointer" />
            <FaYoutube size={14} className="cursor-pointer" />
          </div>
        </div>

        {/* Column 2 - Services */}
        <div>
          <h3 className="uppercase text-gray-300 text-[11px] mb-3">Services</h3>
          <ul className="space-y-2">
            <li>ITR Filing</li>
            <li>TDS Filing</li>
            <li>GST Registration</li>
            <li>PAN Application</li>
            <li>Digital Signature</li>
            <li>LLP Registration</li>
            <li>Business Setup</li>
            <li>Company Compliance</li>
          </ul>
        </div>

        {/* Column 3 - Calculators */}
        <div>
          <h3 className="uppercase text-gray-300 text-[11px] mb-3">Calculators</h3>
          <ul className="space-y-2">
            <li>Income Tax</li>
            <li>Salary Calculator</li>
            <li>TDS Calculator</li>
            <li>HRA Calculator</li>
            <li>Depreciation Tool</li>
            <li>EMI Calculator</li>
            <li>GST Calculator</li>
            <li>Currency Converter</li>
          </ul>
        </div>

        {/* Column 4 - Guides */}
        <div>
          <h3 className="uppercase text-gray-300 text-[11px] mb-3">Guides</h3>
          <ul className="space-y-2">
            <li>Income Tax Guide</li>
            <li>GST Guide</li>
            <li>Startup Compliance Guide</li>
            <li>Business Registration</li>
            <li>Trademark Filing</li>
            <li>LLP Annual Filing</li>
            <li>New Tax Regime</li>
            <li>Savings & Deductions</li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-10"></div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between text-[11px] text-gray-400 gap-3">
        <p>© {new Date().getFullYear()} ComplianceBro. All Rights Reserved.</p>
        <div className="flex gap-6">
          <p className="cursor-pointer hover:text-white">Terms & Conditions</p>
          <p className="cursor-pointer hover:text-white">Privacy Policy</p>
          <p className="cursor-pointer hover:text-white">Refund Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
