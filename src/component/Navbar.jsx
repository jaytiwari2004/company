import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Live update login state
  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkLogin();
    window.addEventListener("storage", checkLogin);
    return () => window.removeEventListener("storage", checkLogin);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("storage"));
    setIsOpen(false);
    window.location.href = "/login";
  };

  return (
    <>
      {/* MAIN NAVBAR */}
      <nav className="fixed z-50 top-0 left-0 right-0 bg-[#144047] text-white px-6 md:px-12 lg:px-48 py-4 flex justify-between items-center shadow-md">
        
        {/* LOGO */}
        <div className="flex flex-col leading-tight">
          <h1 className="text-3xl font-bold">
            <Link to="/">
              Compliance<span className="text-blue-400"> Bro</span>
            </Link>
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden xl:flex space-x-8 text-lg font-medium">
          <li><Link to="/">Services</Link></li>
          <li><Link to="/">Pricing</Link></li>
          <li><Link to="/">Resources</Link></li>
          <li><Link to="/">Investments</Link></li>
          <li><Link to="/">Corporate tie-up</Link></li>
        </ul>

        {/* DESKTOP AUTH BUTTONS */}
        <div className="hidden xl:flex items-center gap-4">
          {!isLoggedIn ? (
            <Link
              to="/login"
              className="bg-teal-500 hover:bg-teal-400 px-5 py-2 rounded-md"
            >
              Login →
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-400 px-5 py-2 rounded-md"
            >
              Logout
            </button>
          )}
        </div>

        {/* MOBILE MENU */}
        <button className="xl:hidden" onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
      </nav>

      {/* SIDE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-80 bg-[#144047] text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition duration-300 z-50`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/20">
          <h1 className="text-2xl font-bold">
            Complia<span className="text-blue-400">nce bro</span>
          </h1>
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Drawer Links */}
        <ul className="flex flex-col text-lg font-medium mt-6 space-y-4 px-6">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Pricing</Link></li>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Resources</Link></li>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Investments</Link></li>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Corporate tie-up</Link></li>
        </ul>

        {/* DRAWER AUTH BUTTON */}
        <div className="mt-8 px-6 flex flex-col space-y-3">
          {!isLoggedIn ? (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="bg-teal-500 py-2 rounded-md text-center"
            >
              Login →
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 py-2 rounded-md text-center"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
