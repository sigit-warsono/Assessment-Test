import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

const Progress = () => {
  return (
    <div className="flex flex-col w-[18%] h-auto">
      <div className="flex items-center gap-3 h-[5rem]">
        <div className="h-full w-[1rem] rounded-t-full bg-[#E9ECEF]">
          {/* <div className="h-full w-full bg-blue-500 rounded-full"></div> */}
        </div>
        <div className="flex gap-1 items-center">
          <span className="text-[0.7rem]">Permohonan Sertifikasi</span>
          <span className="w-[10px] h-[10px] rounded-full bg-blue-600 text-white flex justify-center items-center">
            <IoCheckmarkOutline className="text-[7px]" />
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 h-[5rem]">
        <div className="h-full w-[1rem] bg-[#E9ECEF]">
          {/* <div className="h-full w-full bg-[#17A39D] rounded-full"></div> */}
        </div>
        <div className="flex gap-1 items-center">
          <span className="text-[0.7rem]">Pembayaran</span>
          <span className="w-[10px] h-[10px] rounded-full bg-blue-600 text-white flex justify-center items-center">
            <IoCheckmarkOutline className="text-[7px]" />
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 h-[5rem]">
        <div className="h-full w-[1rem] bg-[#E9ECEF]">
          <div className="h-full w-full bg-[#17A39D] rounded-full"></div>
        </div>
        <div className="flex gap-1">
          <span className="text-[0.7rem]">Teknis & Manajemen</span>
        </div>
      </div>
      <div className="flex items-center gap-3 h-[5rem]">
        <div className="h-full w-[1rem] bg-[#E9ECEF]">
          {/* <div className="h-full w-full bg-blue-500 rounded-full"></div> */}
        </div>
        <div className="flex gap-1">
          <span className="text-[0.7rem] text-[#6C757D]">Audit Kecukupan</span>
        </div>
      </div>
      <div className="flex items-center gap-3 h-[5rem]">
        <div className="h-full w-[1rem] bg-[#E9ECEF]">
          {/* <div className="h-full w-full bg-blue-500 rounded-full"></div> */}
        </div>
        <div className="flex gap-1">
          <span className="text-[0.7rem] text-[#6C757D]">
            Penjadwalan Audit
            <br /> Kesesuaian
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 h-[5rem]">
        <div className="h-full w-[1rem] bg-[#E9ECEF]">
          {/* <div className="h-full w-full bg-blue-500 rounded-full"></div> */}
        </div>
        <div className="flex gap-1">
          <span className="text-[0.7rem] text-[#6C757D]">Audit kesesuaian</span>
        </div>
      </div>
      <div className="flex items-center gap-3 h-[5rem] ">
        <div className="h-full w-[1rem] bg-[#E9ECEF] rounded-b-full">
          {/* <div className="h-full w-full bg-blue-500 rounded-full"></div> */}
        </div>
        <div className="flex gap-1">
          <span className="text-[0.7rem] text-[#6C757D]">Pengumuman</span>
        </div>
      </div>
    </div>
  );
};

export default Progress;
