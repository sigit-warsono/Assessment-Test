import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const LandingPage = ({ children }) => {
  return (
    <div className="flex flex-col bg-[#FFFFFF]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default LandingPage;
