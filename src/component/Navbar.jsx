import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ===== MAIN NAVBAR ===== */}
      <nav className="fixed z-50 top-0 left-0 right-0 bg-[#144047] text-white px-6 md:px-12 lg:px-48 py-4 flex justify-between items-center shadow-md">
        {/* ===== LOGO ===== */}
        <div className="flex flex-col leading-tight">
          <h1 className="text-3xl font-bold">
            <Link to="/">
              Com<span className="text-blue-400">pany</span>
            </Link>
          </h1>
          <p className="text-xs tracking-wider hidden md:block">
            SIMPLE | ACCURATE | SECURE
          </p>
        </div>

        {/* ===== DESKTOP MENU (Only for ≥1245px) ===== */}
        <ul className="hidden xl:flex space-x-8 text-lg font-medium">
          <li><Link to="/" className="hover:text-blue-300">Services</Link></li>
          <li><Link to="/" className="hover:text-blue-300">Pricing</Link></li>
          <li><Link to="/" className="hover:text-blue-300">Resources</Link></li>
          <li><Link to="/" className="hover:text-blue-300">Investments</Link></li>
          <li><Link to="/" className="hover:text-blue-300 font-semibold">Corporate tie-up</Link></li>
        </ul>

        {/* ===== DESKTOP LOGIN BUTTON (≥1245px) ===== */}
        <div className="hidden xl:block">
          <Link
            to="/login"
            className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-5 py-2 rounded-md transition-all"
          >
            Login →
          </Link>
        </div>

        {/* ===== MENU BUTTON (For <1245px screens, includes md-lg) ===== */}
        <button
          className="xl:hidden focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* ===== SIDE DRAWER (For tablets & md-lg screens) ===== */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-80 bg-[#144047] text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg z-50`}
      >
        {/* ===== Drawer Header ===== */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/20">
          <h1 className="text-2xl font-bold">
            Com<span className="text-blue-400">pany</span>
          </h1>
          <button onClick={() => setIsOpen(false)}>
            <X size={28} className="text-white" />
          </button>
        </div>

        {/* ===== Drawer Links ===== */}
        <ul className="flex flex-col text-lg font-medium mt-6 space-y-4 px-6">
          <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-300">Services</Link></li>
          <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-300">Pricing</Link></li>
          <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-300">Resources</Link></li>
          <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-300">Investments</Link></li>
          <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-300">Corporate tie-up</Link></li>
        </ul>

        {/* ===== Drawer Buttons ===== */}
        <div className="mt-8 px-6 flex flex-col space-y-3">
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="bg-teal-500 hover:bg-teal-400 text-white font-semibold py-2 rounded-md text-center transition-all"
          >
            Login →
          </Link>
          <Link
            to="/signup"
            onClick={() => setIsOpen(false)}
            className="bg-white hover:bg-gray-200 text-[#144047] font-semibold py-2 rounded-md text-center transition-all"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* ===== OVERLAY ===== */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
