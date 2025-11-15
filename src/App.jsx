import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import Home from "./pages/Home";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Signup from "./pages/Signup.jsx";

import FloatingHelpButton from "./component/FloatingHelpButton.jsx";

function App() {
  return (
    <>
      {/* Navbar visible on all pages */}
      <Navbar />

      {/* Floating WhatsApp + Expert Button visible on ALL pages */}
      <FloatingHelpButton />

      {/* Page Routes */}
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
