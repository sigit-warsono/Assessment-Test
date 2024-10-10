import React from "react";
import RootDashboard from "../../template/RootDashboard";
import { PiCertificate } from "react-icons/pi";
import Progress from "../../fragments/frag-dashboard/certification/Progress";
import Requirement from "../../fragments/frag-dashboard/certification/Requirement";

const Certification = () => {
  return (
    <RootDashboard>
      <div className="flex w-full h-[8rem]">
        <div className="w-[50%] flex flex-col gap-2 p-5 bg-[#FFFFFF]">
          <span className="text-[0.9rem] font-extralight text-slate-400">
            Berkas pengajuan
          </span>
          <div className="flex items-center gap-2">
            <div className="rounded-full w-[4rem] h-[4rem] bg-[#DEFCFA] flex justify-center items-center">
              <PiCertificate className="text-[#17A39D] text-[2rem]" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-[1.2rem]">
                46335.01.2024・Industri Air Mineral
              </span>
              <span className="font-extralight text-[0.9rem] text-slate-500">
                4882・Pengolahan Air Minum Kemasan
              </span>
            </div>
          </div>
        </div>
        <div className="w-[50%] bg-[url('assets/image/dashboard/certificate.svg')] bg-cover bg-no-repeat"></div>
      </div>
      <div className="flex p-6">
        <Progress />
        <Requirement />
      </div>
    </RootDashboard>
  );
};

export default Certification;
