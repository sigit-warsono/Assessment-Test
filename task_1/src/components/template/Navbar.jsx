import React from "react";
import Logo from "../../assets/image/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-2 bg-white flex justify-around">
      <img src={Logo} alt="" className="w-[12rem] h-[5rem]" />
      <div className="flex items-start gap-10 text-[#495057] mt-7">
        <div class="relative">
          <div class=" pb-4">Beranda</div>
          <div class="absolute inset-x-0 bottom-0 h-4 bg-white">
            <div class="w-full h-3 rounded-tl-full rounded-tr-full border-t-2 border-[#17A39D] bg-white border-b-0"></div>
          </div>
        </div>
        <span>Profile</span>

        <span>Direktori</span>
        <span>Reguler</span>
        <span>Agenda</span>
      </div>
      <div className="flex items-center gap-3">
        <Link
          to={"/dashboard"}
          className="border border-[#17A39D] text-[#17A39D] w-[5rem] rounded-md p-2 flex justify-center items-center"
        >
          Masuk
        </Link>
        <Link
          Link
          to={"/dashboard"}
          className="border bg-[#17A39D] text-white w-auto px-4 rounded-md p-2 flex justify-center items-center"
        >
          Ambil Sertifikasi
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
