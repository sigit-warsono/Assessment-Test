import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./landing-page/Home";
import Dashboard from "./components/layout/lay-dashboard/Dashboard";
import Certification from "./components/layout/lay-dashboard/Certification";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/certification" element={<Certification />} />
      </Routes>
    </Router>
  );
};

export default App;
