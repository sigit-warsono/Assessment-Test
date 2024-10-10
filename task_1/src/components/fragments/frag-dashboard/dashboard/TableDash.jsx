import React from "react";
import { FaCheck } from "react-icons/fa";
import Icom from "../../../../assets/image/dashboard/icom.svg";
import Person1 from "../../../../assets/image/dashboard/listperson1.svg";
import Person2 from "../../../../assets/image/dashboard/listperson2.svg";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const TableDash = () => {
  function shortenText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength - 3) + "..."; // -3 for the ellipsis
  }

  return (
    <div className="p-9 py-2 mt-0 w-full">
      <table class="table-auto w-full">
        <thead>
          <tr className="bg-[#F0F6FF]">
            <th className="text-left p-2 px-1 text-[1rem] font-semibold text-[#425B76] w-[15%]">
              Sertifikat
            </th>
            <th className="text-left p-2 px-1 text-[1rem] font-semibold text-[#425B76] w-[15%]">
              Status
            </th>
            <th className="text-left p-2 px-1 text-[1rem] font-semibold text-[#425B76] w-[10%]">
              Sertifikasi
            </th>
            <th className="text-left p-2 px-1 text-[1rem] font-semibold text-[#425B76] w-[12%]">
              Tanggal terbit
            </th>
            <th className="text-left p-2 px-1 text-[1rem] font-semibold text-[#425B76] w-[15%]">
              Lembaga SIH
            </th>
            <th className="text-left p-2 px-1 text-[1rem] font-semibold text-[#425B76] w-[15%]">
              Auditor
            </th>
            <th className="text-left p-2 px-1 text-[1rem] font-semibold text-[#425B76] w-[5%]"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="p-3 px-1 bg-white border-b border-slate-200">
              <div className="flex flex-col">
                <span>
                  {shortenText("LSIH001-8120101891302.P.51.03.03.2007", 17)}
                </span>
                <span className="text-[#6C757D]">
                  {shortenText("Industri Air Mineral", 20)}
                </span>
              </div>
            </td>
            <td className=" bg-white p-3 px-1 border-b border-slate-200">
              <button className="p-1 bg-[#E5FFF3] px-2 text-[#138883] flex items-center gap-2 w-auto rounded-md">
                <span className="w-[9px] h-[9px] rounded-full bg-[#138883]"></span>
                Sertifikasi awal
              </button>
            </td>
            <td className="text-[#495057] bg-white p-3 px-0 border-b border-slate-200">
              09 Feb 2024{" "}
            </td>
            <td className=" bg-white p-3 px-1 border-b border-slate-200">
              <div className="flex flex-col">
                <span className="text-[1rem]">09 Feb 2024 </span>
                <span className="text-[0.8rem] flex items-center gap-1">
                  <span className="w-[10px] h-[10px] bg-green-700 text-white rounded-full flex justify-center items-center">
                    <FaCheck className="text-[5px]" />
                  </span>
                  <span className="text-[#58627A]">Sampai 25 Apr 2028</span>
                </span>
              </div>
            </td>
            <td className="gap-1 text-[#495057] bg-white p-3 px-1 border-b border-slate-200">
              <div className="flex items-center gap-1">
                <img
                  src={Icom}
                  alt=""
                  className="w-[3rem] h-[3rem] rounded-full"
                />
                <span>PT Sucofindo ICS</span>
              </div>
            </td>
            <td className="border-b border-slate-200">
              <img src={Person1} alt="" className="w-[7rem] h-[6rem]" />
            </td>
            <td className="border-b border-slate-200">
              <HiOutlineDotsHorizontal />
            </td>
          </tr>
          <tr className="bg-white">
            <td className="p-3 px-1 bg-white border-b border-slate-200">
              <div className="flex flex-col">
                <span>
                  {shortenText(
                    "LSIH001-8120013092644.P.12.18.07.2004-00.2022-001.P0.A0-22121.01:202",
                    17
                  )}
                </span>
                <span className="text-[#6C757D]">
                  {shortenText("Industri Makanan Ringan", 20)}
                </span>
              </div>
            </td>
            <td className=" bg-white p-3 px-1 border-b border-slate-200">
              <button className="p-1 bg-[#E5FFF3] px-2 text-[#138883] flex items-center gap-2 w-auto rounded-md">
                <span className="w-[9px] h-[9px] rounded-full bg-[#138883]"></span>
                Sertifikasi awal
              </button>
            </td>
            <td className="text-[#495057] bg-white p-3 px-0 border-b border-slate-200">
              09 Feb 2024{" "}
            </td>
            <td className=" bg-white p-3 px-1 border-b border-slate-200">
              <div className="flex flex-col">
                <span className="text-[1rem]">09 Feb 2024 </span>
                <span className="text-[0.8rem] flex items-center gap-1">
                  <span className="w-[10px] h-[10px] bg-green-700 text-white rounded-full flex justify-center items-center">
                    <FaCheck className="text-[5px]" />
                  </span>
                  <span className="text-[#58627A]">Sampai 25 Apr 2028</span>
                </span>
              </div>
            </td>
            <td className="gap-1 text-[#495057] bg-white p-3 px-1 border-b border-slate-200">
              <div className="flex items-center gap-1">
                <img
                  src={Icom}
                  alt=""
                  className="w-[3rem] h-[3rem] rounded-full"
                />
                <span>PT Sucofindo ICS</span>
              </div>
            </td>
            <td className="border-b border-slate-200">
              <img src={Person2} alt="" className="w-[7rem] h-[6rem]" />
            </td>
            <td className="border-b border-slate-200">
              <HiOutlineDotsHorizontal />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableDash;
