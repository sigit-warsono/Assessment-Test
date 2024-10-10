import React from "react";
import { CiSearch } from "react-icons/ci";
const Banner = () => {
  return (
    <div className="w-full h-[50rem] bg-[#D1EDEB] flex">
      <div className="w-[50%] flex flex-col justify-center items-center gap-9">
        <div className="flex flex-col justify-center items-start">
          <div className="text-[3rem] font-bold">
            Bersama{" "}
            <span className="p-2 bg-gradient-to-r from-[#138883] to-[#3EB2AD] rounded-lg text-white px-4">
              Industri Hijau
            </span>
          </div>
          <div className="text-[3rem] font-bold">
            membangun dunia lebih baik!
          </div>
        </div>
        <span className="w-[75%]">
          Penuhi proses dan produk perusahaan Anda dengan standar tinggi untuk
          turut serta dalam menjaga kelestarian lingkungan, mengurangi dampak
          pencemaran lingkungan, produksi yang ramah lingkungan, dan pemakaian
          sumber daya yang efisien.
        </span>
        <div className="flex items-center w-[75%]">
          <CiSearch className="absolute ml-3 text-slate-400" />
          <input
            type="text"
            name=""
            className="w-full p-2 rounded-lg px-8"
            placeholder="Cari Perusahaan, SIH, KBLI Terdaftar"
          />
        </div>
      </div>
      <div className="w-[50%] bg-[url('assets/image/BannerImg.svg')] bg-cover bg-no-repeat"></div>
    </div>
  );
};

export default Banner;
