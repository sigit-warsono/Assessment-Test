import React, { useState } from "react";
import { GiAlarmClock } from "react-icons/gi";
import RequirementTech from "./RequirementTech";
import RequirementManj from "./RequirementManj";

const Requirement = () => {
  const [selectReq, setSelectReq] = useState("teknis");
  return (
    <div className="w-full bg-white h-auto rounded-md px-0">
      <div className="w-full border-b border-slate-300 p-3 flex justify-between items-center">
        <span className="text-[1.2rem] font-semibold">Teknis & Manajemen</span>
        <div className="flex items-center gap-2 text-[1rem]">
          <GiAlarmClock />
          <span>31 Mei 2024</span>
          <span className="p-2 bg-[#FFE2E5] text-[#DC3545] rounded-full px-4">
            04:23:59:57
          </span>
        </div>
      </div>
      <div className="w-full border-b border-slate-300 flex items-start">
        <button
          className={`p-2 ${
            selectReq === "teknis"
              ? "text-[#17A39D] border-[#17A39D] border-b-2 cursor-pointer"
              : "text-black"
          }`}
          onClick={() => setSelectReq("teknis")}
        >
          Persyaratan Teknis
        </button>
        <button
          className={`p-2 ${
            selectReq === "manajemen"
              ? "text-[#17A39D] border-[#17A39D] border-b-2 cursor-pointer"
              : "text-black"
          }`}
          onClick={() => setSelectReq("manajemen")}
        >
          Persyaratan Managemen
        </button>
      </div>
      <div className="w-full mt-7">
        {selectReq === "teknis" ? <RequirementTech /> : <RequirementManj />}
      </div>

      <div className="w-full border-b border-slate-300 mt-5"></div>
      <div className="w-full h-[9rem] mb-16 flex items-center justify-between px-5">
        <button className="border border-blue-500 rounded-lg text-blue-500 p-3 px-4 w-[9rem]">
          Batalkan
        </button>
        <div className="flex items-center gap-5">
          <span className="text-[#17A39D] font-bold">Simpan draft</span>
          <button className="bg-[#17A39D] rounded-lg text-white p-3 px-4 w-[9rem]">
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default Requirement;
