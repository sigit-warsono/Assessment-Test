import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import TandaSeru from "../../../../assets/image/dashboard/tandaSeru.svg";

const RequirementManj = () => {
  const [fileName1, setFileName1] = useState("");
  const [fileName2, setFileName2] = useState("");
  const [fileName3, setFileName3] = useState("");
  const [fileName4, setFileName4] = useState("");
  const [fileName5, setFileName5] = useState("");
  const [fileName6, setFileName6] = useState("");
  const [fileName7, setFileName7] = useState("");
  const [fileName8, setFileName8] = useState("");
  const [fileName9, setFileName9] = useState("");
  const [fileName10, setFileName10] = useState("");
  const [fileName11, setFileName11] = useState("");

  function shortenText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength - 3) + "..."; // -3 for the ellipsis
  }

  const handleFileChange1 = (event1) => {
    const file = event1.target.files[0];
    setFileName1(file ? file.name : "No file chosen");
  };

  const handleFileChange2 = (event2) => {
    const file = event2.target.files[0];
    setFileName2(file ? file.name : "No file chosen");
  };

  const handleFileChange3 = (event3) => {
    const file = event3.target.files[0];
    setFileName3(file ? file.name : "No file chosen");
  };

  const handleFileChange4 = (event4) => {
    const file = event4.target.files[0];
    setFileName4(file ? file.name : "No file chosen");
  };

  const handleFileChange5 = (event5) => {
    const file = event5.target.files[0];
    setFileName5(file ? file.name : "No file chosen");
  };

  const handleFileChange6 = (event6) => {
    const file = event6.target.files[0];
    setFileName6(file ? file.name : "No file chosen");
  };

  const handleFileChange7 = (event7) => {
    const file = event7.target.files[0];
    setFileName7(file ? file.name : "No file chosen");
  };

  const handleFileChange8 = (event8) => {
    const file = event8.target.files[0];
    setFileName8(file ? file.name : "No file chosen");
  };

  const handleFileChange9 = (event9) => {
    const file = event9.target.files[0];
    setFileName9(file ? file.name : "No file chosen");
  };

  const handleFileChange10 = (event10) => {
    const file = event10.target.files[0];
    setFileName10(file ? file.name : "No file chosen");
  };

  const handleFileChange11 = (event11) => {
    const file = event11.target.files[0];
    setFileName11(file ? file.name : "No file chosen");
  };
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col p-4">
        <div className="grid grid-cols-2 gap-5 items-center">
          <div className="flex items-center justify-between p-2 border border-slate-300 rounded-md">
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileChange1}
            />
            {!fileName1 && (
              <label
                htmlFor="fileInput"
                className="bg-[#17A39D] text-white px-4 py-1 rounded cursor-pointer hover:bg-blue-600"
              >
                Choose File
              </label>
            )}

            <span className="ml-2 text-gray-700">
              {shortenText(fileName1, 20)}
            </span>
            {fileName1 && (
              <RiDeleteBin5Line
                onClick={() => setFileName1("")}
                className="cursor-pointer"
              />
            )}
          </div>
          <div className="flex items-center justify-between p-2 border border-slate-300 rounded-md">
            <input
              type="file"
              id="fileInput2"
              className="hidden"
              onChange={handleFileChange2}
            />
            {!fileName2 && (
              <label
                htmlFor="fileInput2"
                className="bg-[#17A39D] text-white px-4 py-1 rounded cursor-pointer hover:bg-blue-600"
              >
                Choose File
              </label>
            )}

            <span className="ml-2 text-gray-700">
              {shortenText(fileName2, 20)}
            </span>
            {fileName2 && (
              <RiDeleteBin5Line
                onClick={() => setFileName2("")}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 items-center mt-7">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              Bukti Persetujuan{" "}
              <img src={TandaSeru} alt="" className="w-[1rem] h-[1rem]" />
            </div>
            <div className="flex items-center justify-between p-2 border border-slate-300 rounded-md">
              <input
                type="file"
                id="fileInput3"
                className="hidden"
                onChange={handleFileChange3}
              />
              {!fileName3 && (
                <label
                  htmlFor="fileInput3"
                  className="bg-[#17A39D] text-white px-4 py-1 rounded cursor-pointer hover:bg-blue-600"
                >
                  Choose File
                </label>
              )}

              <span className="ml-2 text-gray-700">
                {shortenText(fileName3, 20)}
              </span>
              {fileName3 && (
                <RiDeleteBin5Line
                  onClick={() => setFileName3("")}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              Laporan Hasil Acara{" "}
              <img src={TandaSeru} alt="" className="w-[1rem] h-[1rem]" />
            </div>
            <div className="flex items-center justify-between p-2 border border-slate-300 rounded-md">
              <input
                type="file"
                id="fileInput4"
                className="hidden"
                onChange={handleFileChange4}
              />
              {!fileName4 && (
                <label
                  htmlFor="fileInput4"
                  className="bg-[#17A39D] text-white px-4 py-1 rounded cursor-pointer hover:bg-blue-600"
                >
                  Choose File
                </label>
              )}

              <span className="ml-2 text-gray-700">
                {shortenText(fileName4, 20)}
              </span>
              {fileName4 && (
                <RiDeleteBin5Line
                  onClick={() => setFileName4("")}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 items-center mt-7">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              Laporan Penilaian Internal{" "}
              <img src={TandaSeru} alt="" className="w-[1rem] h-[1rem]" />
            </div>
            <div className="flex items-center justify-between p-2 border border-slate-300 rounded-md">
              <input
                type="file"
                id="fileInput5"
                className="hidden"
                onChange={handleFileChange5}
              />
              {!fileName5 && (
                <label
                  htmlFor="fileInput5"
                  className="bg-[#17A39D] text-white px-4 py-1 rounded cursor-pointer hover:bg-blue-600"
                >
                  Choose File
                </label>
              )}

              <span className="ml-2 text-gray-700">
                {shortenText(fileName5, 20)}
              </span>
              {fileName5 && (
                <RiDeleteBin5Line
                  onClick={() => setFileName5("")}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-6">
          <span className="text-[1.2rem] text-[#425B76]">
            Tinjauan Manajemen
          </span>

          <div className="grid grid-cols-2 gap-5 items-center mt-2">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1">
                Laporan Hasil Tinjauan{" "}
                <img src={TandaSeru} alt="" className="w-[1rem] h-[1rem]" />
              </div>
              <div className="flex items-center justify-between p-2 border border-slate-300 rounded-md">
                <input
                  type="file"
                  id="fileInput6"
                  className="hidden"
                  onChange={handleFileChange6}
                />
                {!fileName6 && (
                  <label
                    htmlFor="fileInput6"
                    className="bg-[#17A39D] text-white px-4 py-1 rounded cursor-pointer hover:bg-blue-600"
                  >
                    Choose File
                  </label>
                )}

                <span className="ml-2 text-gray-700">
                  {shortenText(fileName6, 20)}
                </span>
                {fileName6 && (
                  <RiDeleteBin5Line
                    onClick={() => setFileName6("")}
                    className="cursor-pointer"
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1">
                Laporan Restropective{" "}
                <img src={TandaSeru} alt="" className="w-[1rem] h-[1rem]" />
              </div>
              <div className="flex items-center justify-between p-2 border border-slate-300 rounded-md">
                <input
                  type="file"
                  id="fileInput7"
                  className="hidden"
                  onChange={handleFileChange7}
                />
                {!fileName7 && (
                  <label
                    htmlFor="fileInput7"
                    className="bg-[#17A39D] text-white px-4 py-1 rounded cursor-pointer hover:bg-blue-600"
                  >
                    Choose File
                  </label>
                )}

                <span className="ml-2 text-gray-700">
                  {shortenText(fileName7, 20)}
                </span>
                {fileName7 && (
                  <RiDeleteBin5Line
                    onClick={() => setFileName7("")}
                    className="cursor-pointer"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-6">
          <span className="text-[1.2rem] text-[#425B76]">
            Tanggung Jawab Sosial Perusahaan
          </span>

          <div className="grid grid-cols-2 gap-5 items-center mt-2">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1">
                Program CSR & EPR Lanjutan{" "}
                <img src={TandaSeru} alt="" className="w-[1rem] h-[1rem]" />
              </div>
              <div className="flex items-center justify-between p-2 border border-slate-300 rounded-md">
                <input
                  type="file"
                  id="fileInput8"
                  className="hidden"
                  onChange={handleFileChange8}
                />
                {!fileName8 && (
                  <label
                    htmlFor="fileInput8"
                    className="bg-[#17A39D] text-white px-4 py-1 rounded cursor-pointer hover:bg-blue-600"
                  >
                    Choose File
                  </label>
                )}

                <span className="ml-2 text-gray-700">
                  {shortenText(fileName8, 20)}
                </span>
                {fileName8 && (
                  <RiDeleteBin5Line
                    onClick={() => setFileName8("")}
                    className="cursor-pointer"
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1">
                Laporan Pelaksanaan Kegiatan{" "}
                <img src={TandaSeru} alt="" className="w-[1rem] h-[1rem]" />
              </div>
              <div className="flex items-center justify-between p-2 border border-slate-300 rounded-md">
                <input
                  type="file"
                  id="fileInput9"
                  className="hidden"
                  onChange={handleFileChange9}
                />
                {!fileName9 && (
                  <label
                    htmlFor="fileInput9"
                    className="bg-[#17A39D] text-white px-4 py-1 rounded cursor-pointer hover:bg-blue-600"
                  >
                    Choose File
                  </label>
                )}

                <span className="ml-2 text-gray-700">
                  {shortenText(fileName9, 20)}
                </span>
                {fileName9 && (
                  <RiDeleteBin5Line
                    onClick={() => setFileName9("")}
                    className="cursor-pointer"
                  />
                )}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1">
                Bukti Dokumentasi Fasilitas{" "}
                <img src={TandaSeru} alt="" className="w-[1rem] h-[1rem]" />
              </div>
              <div className="flex items-center justify-between p-2 border border-slate-300 rounded-md">
                <input
                  type="file"
                  id="fileInput10"
                  className="hidden"
                  onChange={handleFileChange10}
                />
                {!fileName10 && (
                  <label
                    htmlFor="fileInput10"
                    className="bg-[#17A39D] text-white px-4 py-1 rounded cursor-pointer hover:bg-blue-600"
                  >
                    Choose File
                  </label>
                )}

                <span className="ml-2 text-gray-700">
                  {shortenText(fileName10, 20)}
                </span>
                {fileName10 && (
                  <RiDeleteBin5Line
                    onClick={() => setFileName10("")}
                    className="cursor-pointer"
                  />
                )}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1">
                Laporan Penyediaan Fasilitas{" "}
                <img src={TandaSeru} alt="" className="w-[1rem] h-[1rem]" />
              </div>
              <div className="flex items-center justify-between p-2 border border-slate-300 rounded-md">
                <input
                  type="file"
                  id="fileInput11"
                  className="hidden"
                  onChange={handleFileChange11}
                />
                {!fileName11 && (
                  <label
                    htmlFor="fileInput11"
                    className="bg-[#17A39D] text-white px-4 py-1 rounded cursor-pointer hover:bg-blue-600"
                  >
                    Choose File
                  </label>
                )}

                <span className="ml-2 text-gray-700">
                  {shortenText(fileName11, 20)}
                </span>
                {fileName11 && (
                  <RiDeleteBin5Line
                    onClick={() => setFileName11("")}
                    className="cursor-pointer"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequirementManj;
