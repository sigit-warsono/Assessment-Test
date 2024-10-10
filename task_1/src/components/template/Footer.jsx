import React from "react";
import LogoFooter from "../../assets/image/logo-footer.svg";
import { FaYoutube, FaFacebookF, FaWhatsapp, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#343A40] h-[20rem] flex flex-col gap-20 items-center justify-center">
      <div className="w-full flex justify-around">
        <img src={LogoFooter} alt="" className="w-[13rem] h-[5rem]" />
        <div className="flex gap-7 items-center text-white">
          <span>Beranda</span>
          <span>Profile</span>
          <span>Direktori</span>
          <span>Regulasi</span>
          <span>Agenda</span>
        </div>
        <div className="flex gap-4 items-center text-white">
          <span className="flex justify-center items-center w-[4rem] h-[4rem] rounded-full bg-[#495057]">
            <FaYoutube className="text-[2rem]" />
          </span>
          <span className="flex justify-center items-center w-[4rem] h-[4rem] rounded-full bg-[#495057]">
            <FaFacebookF className="text-[2rem]" />
          </span>
          <span className="flex justify-center items-center w-[4rem] h-[4rem] rounded-full bg-[#495057]">
            <FaWhatsapp className="text-[2rem]" />
          </span>
          <span className="flex justify-center items-center w-[4rem] h-[4rem] rounded-full bg-[#495057]">
            <FaTwitter className="text-[2rem]" />
          </span>
        </div>
      </div>
      <span className="text-white text-[1rem]">
        Copyright @ 2024. All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
