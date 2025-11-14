import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import Home from "./pages/Home";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
//import FloatingHelpButton from "./component/FloatingHelpButton.jsx";




function App() {
  return (
    
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
      
    </>
    
  );
}

export default App;
