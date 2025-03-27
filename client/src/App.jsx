import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Payment from "./Pages/Payment";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./index.css";
import ContactUs from "./Pages/Contact";

const AppContent = () => {
  const location = useLocation(); // Get current route

  const hideNavbarFooter = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>

      {/* Show Footer only if not on Home */}
      {!hideNavbarFooter && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
