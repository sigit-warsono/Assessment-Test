import React from "react";
import Sidebar from "./Sidebar";
import NavDashboard from "./NavDashboard";

const RootDashboard = ({ children }) => {
  return (
    <div className="flex justify-start items-start w-full fixed">
      <Sidebar />
      <div className="flex flex-col w-[82%]">
        <NavDashboard />
        <div className="overflow-y-scroll h-screen bg-slate-50">{children}</div>
      </div>
    </div>
  );
};

export default RootDashboard;
