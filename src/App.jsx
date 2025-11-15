import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import Home from "./pages/Home";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Signup from "./pages/Signup.jsx";
import FloatingHelpButton from "./component/FloatingHelpButton.jsx";

function App() {
  const location = useLocation();

  const token = localStorage.getItem("token");

  // Pages where Navbar + WhatsApp button should NOT appear
  const hideOn = ["/login", "/signup"];

  const hideNavbar = hideOn.includes(location.pathname);
  const hideWhatsApp = hideOn.includes(location.pathname);

  return (
    <>
      {/* Show Navbar only when NOT on login or signup */}
      {!hideNavbar && <Navbar />}

      {/* Show WhatsApp only when logged in AND not on login/signup */}
      {token && !hideWhatsApp && <FloatingHelpButton />}

      {/* All Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
