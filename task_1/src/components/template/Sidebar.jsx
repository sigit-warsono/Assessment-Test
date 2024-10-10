import React from "react";
import LogoDash from "../../assets/image/dashboard/logoDash.svg";
import { GoHome } from "react-icons/go";
import { PiCertificate } from "react-icons/pi";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const pathname = window.location.pathname;

  return (
    <div className="w-[18%] h-screen bg-[#FFFFFF] p-4 flex flex-col gap-9 items-center border-r border-slate-50">
      <div className="flex flex-col gap-4 items-center">
        <img src={LogoDash} alt="" className="w-[6rem] h-[6rem]" />
        <div className="flex flex-col gap-1 items-center justify-center">
          <span className="text-[2rem] font-semibold">SELASIH</span>
          <span className="text-[1rem] font-extralight w-[90%] text-center">
            Sistem Layanan Standar Industri Hijau{" "}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-4 w-full">
        <Link
          to={"/dashboard"}
          className={`flex items-center gap-2 text-[1.1rem] p-2  w-full rounded-md cursor-pointer ${
            pathname === "/dashboard"
              ? "bg-[#D1EDEB] border-l-8 border-[#17A39D]"
              : "bg-[#FFFFFF]"
          }`}
        >
          <GoHome
            className={`${
              pathname === "/dashboard" ? "text-[#17A39D]" : "text-[#6C757D]"
            }`}
          />
          <span
            className={`font-extralight ${
              pathname === "/dashboard" ? "text-[#17A39D]" : "text-[#6C757D]"
            }`}
          >
            Beranda
          </span>
        </Link>

        <Link
          to={"/certification"}
          className={`flex items-center gap-2 text-[1.1rem] p-2  w-full rounded-md cursor-pointer ${
            pathname === "/certification"
              ? "bg-[#D1EDEB] border-l-8 border-[#17A39D]"
              : "bg-[#FFFFFF]"
          }`}
        >
          <PiCertificate
            className={`${
              pathname === "/certification"
                ? "text-[#17A39D]"
                : "text-[#6C757D]"
            }`}
          />
          <span
            className={`font-extralight ${
              pathname === "/certification"
                ? "text-[#17A39D]"
                : "text-[#6C757D]"
            }`}
          >
            Proses Sertifikasi
          </span>
        </Link>
        <div className="flex items-center gap-2 text-[1.1rem] p-2">
          <GoHome />
          <span className="font-extralight text-[#6C757D]">Rektifikasi</span>
        </div>
        <div className="flex items-center gap-2 text-[1.1rem] p-2">
          <GoHome />
          <span className="font-extralight text-[#6C757D]">Lorem Ipsum</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
