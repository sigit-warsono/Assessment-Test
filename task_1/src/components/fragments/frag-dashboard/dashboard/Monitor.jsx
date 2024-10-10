import React from "react";
import { PiCertificate } from "react-icons/pi";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import DatePicker from "./DatePicker";
import { MdDateRange } from "react-icons/md";

const Monitor = () => {
  return (
    <div className="p-9 pb-4 mt-0 flex items-start gap-6 w-full">
      <div className="w-[70%] h-auto flex flex-col gap-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="w-full h-[10rem] bg-white rounded-md flex flex-col justify-around p-3">
            <div className="flex items-center gap-2">
              <div className="rounded-full w-[2rem] h-[2rem] bg-[#DEFCFA] flex justify-center items-center">
                <PiCertificate className="text-[#17A39D]" />
              </div>
              <span className="text-[#6C757D] text-[0.8rem]">
                Total sertifikasi
              </span>
            </div>
            <span className="text-[2rem] font-bold">30</span>
          </div>
          <div className="w-full h-[10rem] bg-white rounded-md flex flex-col justify-around p-3">
            <div className="flex items-center gap-2">
              <div className="rounded-full w-[2rem] h-[2rem] bg-[#DEFCFA] flex justify-center items-center">
                <PiCertificate className="text-[#17A39D]" />
              </div>
              <span className="text-[#6C757D] text-[0.8rem]">
                Total sertifikasi
              </span>
            </div>
            <span className="text-[2rem] font-bold">28</span>
          </div>
          <div className="w-full h-[10rem] bg-white rounded-md flex flex-col justify-around p-3">
            <div className="flex items-center gap-2">
              <div className="rounded-full w-[2rem] h-[2rem] bg-[#DEFCFA] flex justify-center items-center">
                <PiCertificate className="text-[#17A39D]" />
              </div>
              <span className="text-[#6C757D] text-[0.8rem]">
                Total sertifikasi
              </span>
            </div>
            <span className="text-[2rem] font-bold">16</span>
          </div>
        </div>
        <div className="w-full h-[19.2rem] bg-white rounded-md p-4 flex flex-col gap-5">
          <div className="w-full flex justify-between">
            <span className="text-[1.2rem] font-semibold">
              Sedang berlangsung (1)
            </span>
            <div className="flex items-center gap-1 text-[1rem] text-slate-300">
              <IoChevronBackOutline />
              <IoChevronForwardOutline />
            </div>
          </div>
          <div className="w-[18rem] h-[9rem] rounded-md border border-slate-200 p-3 flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <span className="text-[1.1rem] font-semibold">
                Industri Air Mineral
              </span>
              <div className="flex items-center gap-2 text-[0.8rem] text-[#6C757D]">
                <span>4048.02.2024</span>
                <span>.</span>
                <span>XYR48T</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-full p-0 rounded-full border border-slate-200">
                <div className="w-[50%] bg-[#0D6EFD] p-1 rounded-full"></div>
              </div>
              <span className="text-[0.8rem] text-black">10%</span>
            </div>
            <div className="flex items-center gap-1 rounded-full bg-[#FEE8CC] text-[#D17500] w-[80%] text-[0.8rem] p-1 px-3">
              <IoTimeOutline />
              <span>Verifikasi Pembayaran</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[30%] h-[10rem]">
        <div className="flex flex-col gap-2 w-full bg-white rounded-md">
          <div className="flex items-center gap-2 w-full justify-start pt-3 px-3 pb-0">
            <div className="rounded-full w-[2rem] h-[2rem] bg-[#DEFCFA] flex justify-center items-center">
              <PiCertificate className="text-[#17A39D]" />
            </div>
            <span className="text-[1rem] text-[#6C757D]">
              Kalender & Jadwal
            </span>
          </div>
          <div className="p-5 w-full h-auto py-1">
            <DatePicker />
          </div>

          <div className="w-full border-t border-slate-400 h-[6rem] overflow-y-scroll p-2 flex flex-col divide-y divide-slate-200">
            <div className="flex w-full items-center gap-2 p-1">
              <div className="flex items-center gap-1 text-[#212529] font-extralight text-[1rem]">
                <MdDateRange className="text-[1rem]" />
                <span className="text-[0.9rem]">22 Mei</span>
              </div>
              <div className="p-1 bg-blue-500 text-white text-[0.9rem] rounded-full px-4">
                Jadwal Audit Kesesuaian
              </div>
            </div>
            <div className="flex w-full items-center gap-2 p-1">
              <div className="flex items-center gap-1 text-[#212529] font-extralight text-[1rem]">
                <MdDateRange className="text-[1rem]" />
                <span className="text-[0.9rem]">26 Mei</span>
              </div>
              <div className="p-1 bg-blue-500 text-white text-[0.9rem] rounded-full px-4">
                Batas Pemesanan Akomodasi...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitor;
