import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import IconPdf from "../../../../assets/image/dashboard/iconPdf.svg";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";

const RequirementTech = () => {
  function shortenText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength - 3) + "..."; // -3 for the ellipsis
  }

  return (
    <>
      <div className="w-full flex flex-col gap-2 p-4">
        <div className="w-full grid grid-cols-6 gap-3">
          <div className="flex flex-col justify-between h-[2.5rem]">
            <span className="border w-full h-[7px] rounded-full bg-slate-200"></span>
            <span className="text-slate-600 text-[0.9rem]">Bahan Baku</span>
          </div>
          <div className="flex flex-col justify-between h-[2.5rem]">
            <span className="border w-full h-[7px] rounded-full bg-slate-200"></span>
            <span className="text-slate-600 text-[0.9rem]">Energi</span>
          </div>
          <div className="flex flex-col justify-between h-[2.5rem]">
            <span className="border w-full h-[7px] rounded-full bg-slate-200"></span>
            <span className="text-slate-600 text-[0.9rem]">Air</span>
          </div>
          <div className="flex flex-col justify-between h-[2.5rem]">
            <span className="border w-full h-[7px] rounded-full bg-slate-200"></span>
            <span className="text-slate-600 text-[0.9rem]">
              Proses produksi
            </span>
          </div>
          <div className="flex flex-col justify-between h-[2.5rem]">
            <span className="border w-full h-[7px] rounded-full bg-slate-200"></span>
            <span className="text-slate-600 text-[0.9rem]">
              Produk & Kemasan
            </span>
          </div>
          <div className="flex flex-col justify-between h-[2.5rem]">
            <span className="border w-full h-[7px] rounded-full bg-slate-200"></span>
            <span className="text-slate-600 text-[0.9rem]">Limbah</span>
          </div>
        </div>
        <div className="w-full flex-col gap-1 mt-8">
          <div className="title flex flex-col gap-1">
            <span className="text-[1.2rem] font-semibold text-gray-800">
              Bahan baku utama
              <span className="text-red-500">*</span>
            </span>
            <span className="text-[0.9rem] font-extralight">
              Semua bahan utama yang diperlukan agar produk dapat diproduksi
              (Periode 1 tahun terakhir)
            </span>
          </div>
          <table className="w-full mt-4">
            <thead>
              <tr className="bg-[#F5F8FA]">
                <th className="p-2 border-r border-b border-slate-300 text-left text-[#425B76] font-extralight rounded-tl-lg">
                  Jenis bahan baku
                </th>
                <th className="p-2 border-r border-b border-slate-300 text-left text-[#425B76] font-extralight">
                  Nama bahan baku
                </th>
                <th className="p-2 border-r border-b border-slate-300 text-left text-[#425B76] font-extralight">
                  Jumlah penggunaan
                </th>
                <th className="p-2 border-r border-b border-slate-300 text-left text-[#425B76] font-extralight">
                  Dokumen pendukung
                </th>
                <th className="p-2 border-b border-slate-300 text-left text-[#425B76] font-extralight rounded-tr-lg"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-r border-b border-slate-300 p-2 text-left text-black font-extralight">
                  <div className="w-full flex justify-between items-center">
                    <span>Lokal</span> <IoIosArrowDown />
                  </div>
                </td>
                <td className="border-r border-b border-slate-300 p-2 text-left text-black font-extralight">
                  Tepung Terigu
                </td>
                <td className="border-r border-b border-slate-300 p-2 text-left text-black font-extralight">
                  <div className="w-full flex justify-between items-center">
                    <span>10</span>{" "}
                    <div className="flex items-center gap-1">
                      <span className="font-bold">Kg</span>
                      <IoIosArrowDown className="text-[0.6rem]" />
                    </div>
                  </div>
                </td>
                <td className="border-r border-b border-slate-300 p-2 text-left text-black font-extralight">
                  <div className="flex items-center gap-1">
                    <img src={IconPdf} alt="" className="w-[1rem] h-[1rem]" />
                    <span className="text-[0.9rem]">
                      {shortenText("Bahan Baku Utama - Tepung", 24)}
                    </span>
                  </div>
                </td>
                <td className="border-b border-slate-300 p-2 text-left text-black font-extralight">
                  <div className="flex w-full justify-center">
                    <RiDeleteBin6Line />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border-r border-b border-slate-300 p-2 text-left text-black font-extralight">
                  <div className="w-full flex justify-between items-center">
                    <span>Lokal</span> <IoIosArrowDown />
                  </div>
                </td>
                <td className="border-r border-b border-slate-300 p-2 text-left text-black font-extralight">
                  Tepung Terigu
                </td>
                <td className="border-r border-b border-slate-300 p-2 text-left text-black font-extralight">
                  <div className="w-full flex justify-between items-center">
                    <span>10</span>{" "}
                    <div className="flex items-center gap-1">
                      <span className="font-bold">Kg</span>
                      <IoIosArrowDown className="text-[0.6rem]" />
                    </div>
                  </div>
                </td>
                <td className="border-r border-b border-slate-300 p-2 text-left text-black font-extralight">
                  <div className="flex items-center gap-1">
                    <img src={IconPdf} alt="" className="w-[1rem] h-[1rem]" />
                    <span className="text-[0.9rem]">
                      {shortenText("Bahan Baku Utama - Tepung", 24)}
                    </span>
                  </div>
                </td>
                <td className="border-b border-slate-300 p-2 text-left text-black font-extralight">
                  <div className="flex w-full justify-center">
                    <RiDeleteBin6Line />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border-r border-b border-slate-300 p-2 text-left text-black font-extralight">
                  <div className="w-full flex justify-between items-center">
                    <span>Lokal</span> <IoIosArrowDown />
                  </div>
                </td>
                <td className="border-r border-b border-slate-300 p-2 text-left text-black font-extralight">
                  Tepung Terigu
                </td>
                <td className="border-r border-b border-slate-300 p-2 text-left text-black font-extralight">
                  <div className="w-full flex justify-between items-center">
                    <span>10</span>{" "}
                    <div className="flex items-center gap-1">
                      <span className="font-bold">Kg</span>
                      <IoIosArrowDown className="text-[0.6rem]" />
                    </div>
                  </div>
                </td>
                <td className="border-r border-b border-slate-300 p-2 text-left text-black font-extralight">
                  <div className="flex items-center gap-1">
                    <img src={IconPdf} alt="" className="w-[1rem] h-[1rem]" />
                    <span className="text-[0.9rem]">
                      {shortenText("Bahan Baku Utama - Tepung", 24)}
                    </span>
                  </div>
                </td>
                <td className="border-b border-slate-300 p-2 text-left text-black font-extralight">
                  <div className="flex w-full justify-center">
                    <RiDeleteBin6Line />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border-r border-b border-slate-300 p-2 text-left text-black font-extralight">
                  <div className="w-full flex justify-between items-center">
                    <span>Lokal</span> <IoIosArrowDown />
                  </div>
                </td>
                <td className="border-r border-b border-slate-300 p-2 text-left text-black font-extralight">
                  Tepung Terigu
                </td>
                <td className="border-r border-b border-slate-300 p-2 text-left text-black font-extralight">
                  <div className="w-full flex justify-between items-center">
                    <span>10</span>{" "}
                    <div className="flex items-center gap-1">
                      <span className="font-bold">Kg</span>
                      <IoIosArrowDown className="text-[0.6rem]" />
                    </div>
                  </div>
                </td>
                <td className="border-r border-b border-slate-300 p-2 text-left text-black font-extralight">
                  <div className="flex items-center gap-1">
                    <img src={IconPdf} alt="" className="w-[1rem] h-[1rem]" />
                    <span className="text-[0.9rem]">
                      {shortenText("Bahan Baku Utama - Tepung", 24)}
                    </span>
                  </div>
                </td>
                <td className="border-b border-slate-300 p-2 text-left text-black font-extralight">
                  <div className="flex w-full justify-center">
                    <RiDeleteBin6Line />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border-r border-b border-slate-300 p-2 text-left text-black font-extralight">
                  <div className="w-full flex justify-between items-center">
                    <span>Lokal</span> <IoIosArrowDown />
                  </div>
                </td>
                <td className="border-r border-b border-slate-300 p-2 text-left text-black font-extralight">
                  Tepung Terigu
                </td>
                <td className="border-r border-b border-slate-300 p-2 text-left text-black font-extralight">
                  <div className="w-full flex justify-between items-center">
                    <span>10</span>{" "}
                    <div className="flex items-center gap-1">
                      <span className="font-bold">Kg</span>
                      <IoIosArrowDown className="text-[0.6rem]" />
                    </div>
                  </div>
                </td>
                <td className="border-r border-b border-slate-300 p-2 text-left text-black font-extralight">
                  <div className="flex items-center gap-1">
                    <img src={IconPdf} alt="" className="w-[1rem] h-[1rem]" />
                    <span className="text-[0.9rem]">
                      {shortenText("Bahan Baku Utama - Tepung", 24)}
                    </span>
                  </div>
                </td>
                <td className="border-b border-slate-300 p-2 text-left text-black font-extralight">
                  <div className="flex w-full justify-center">
                    <RiDeleteBin6Line />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="flex items-center gap-1 p-2 rounded-md bg-[#E9ECEF] px-3 mt-3">
            <FiPlus />
            <span>Tambah data</span>
          </button>
        </div>
      </div>
      <div className="w-full border-b border-slate-300 mt-5"></div>

      {/* Table 2 */}
      <div className="w-full flex-col gap-1 mt-8 p-5">
        <div className="title flex flex-col gap-1">
          <span className="text-[1.2rem] font-semibold text-gray-800 flex items-center">
            <span className="flex items-center gap-1">
              Bahan baku penolong{" "}
              <span className="font-extralight">(Optional)</span>
            </span>
          </span>
          <span className="text-[0.9rem] font-extralight">
            Semua bahan tambahan untuk membantu produksi (Periode 1 tahun
            terakhir)
          </span>
        </div>
        <table className="w-full mt-4">
          <thead>
            <tr className="bg-[#F5F8FA]">
              <th className="p-2 border-r border-b border-slate-300 text-left text-[#425B76] font-extralight rounded-tl-lg">
                Jenis bahan baku
              </th>
              <th className="p-2 border-r border-b border-slate-300 text-left text-[#425B76] font-extralight">
                Nama bahan baku
              </th>
              <th className="p-2 border-r border-b border-slate-300 text-left text-[#425B76] font-extralight">
                Jumlah penggunaan
              </th>
              <th className="p-2 border-r border-b border-slate-300 text-left text-[#425B76] font-extralight">
                Dokumen pendukung
              </th>
              <th className="p-2 border-b border-slate-300 text-left text-[#425B76] font-extralight rounded-tr-lg"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-r border-b border-slate-300 p-2 text-left text-black font-extralight">
                <div className="w-full flex justify-between items-center">
                  <span className="text-slate-300">Pilih jenis bahan</span>{" "}
                  <IoIosArrowDown />
                </div>
              </td>
              <td className="border-r border-b border-slate-300 p-2 text-left text-slate-300 font-extralight">
                Tepung Terigu
              </td>
              <td className="border-r border-b border-slate-300 p-2 text-left text-black font-extralight">
                <div className="w-full flex justify-between items-center">
                  <span className="text-slate-300">10</span>{" "}
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-slate-400">
                      pilih satuan
                    </span>
                    <IoIosArrowDown className="text-[0.6rem]" />
                  </div>
                </div>
              </td>
              <td className="border-r border-b border-slate-300 p-2 text-left text-black font-extralight">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-slate-300">Belum ada</span>
                  <span className="text-blue-400 font-extralight">Unggah</span>
                </div>
              </td>
              <td className="border-b border-slate-300 p-2 text-left text-black font-extralight">
                <div className="flex w-full justify-center">
                  <RiDeleteBin6Line />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-r border-b border-slate-300 p-2 text-left text-black font-extralight">
                <div className="w-full flex justify-between items-center">
                  <span className="text-slate-300">Pilih jenis bahan</span>{" "}
                  <IoIosArrowDown />
                </div>
              </td>
              <td className="border-r border-b border-slate-300 p-2 text-left text-slate-300 font-extralight">
                Tepung Terigu
              </td>
              <td className="border-r border-b border-slate-300 p-2 text-left text-black font-extralight">
                <div className="w-full flex justify-between items-center">
                  <span className="text-slate-300">10</span>{" "}
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-slate-400">
                      pilih satuan
                    </span>
                    <IoIosArrowDown className="text-[0.6rem]" />
                  </div>
                </div>
              </td>
              <td className="border-r border-b border-slate-300 p-2 text-left text-black font-extralight">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-slate-300">Belum ada</span>
                  <span className="text-blue-400 font-extralight">Unggah</span>
                </div>
              </td>
              <td className="border-b border-slate-300 p-2 text-left text-black font-extralight">
                <div className="flex w-full justify-center">
                  <RiDeleteBin6Line />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="flex items-center gap-1 p-2 rounded-md bg-[#E9ECEF] px-3 mt-3">
          <FiPlus />
          <span>Tambah data</span>
        </button>
      </div>
    </>
  );
};

export default RequirementTech;
