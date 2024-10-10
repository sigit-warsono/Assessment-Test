import React from "react";
import LogoNav from "../../assets/image/dashboard/logoNav.svg";
import LogoAbc from "../../assets/image/partnership/abc.svg";
import { CiBellOn, CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const NavDashboard = () => {
  return (
    <div className="bg-[#FFFFFF] border-b border-slate-200 p-0 w-full  flex items-center justify-between px-8">
      <Link to={"/"}>
        <img
          src={LogoNav}
          alt=""
          className="w-[9rem] h-[5rem] cursor-pointer"
        />
      </Link>
      <div className="flex items-center gap-6">
        <CiSearch className="text-[1.5rem] text-slate-400" />
        <CiBellOn className="text-[1.5rem] text-slate-400" />
        <span className="h-[2rem] border-l border-slate-400"></span>
        <div className="flex items-center gap-2">
          <img
            src={LogoAbc}
            alt=""
            className="w-[3rem] h-[3rem] border border-slate-100 rounded-full"
          />
          <div className="flex flex-col gap-0">
            <span className="text-[1rem] font-bold">PT ABC Indonesia</span>
            <span className="text-[0.9rem] font-extralight">Jakarta</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDashboard;
