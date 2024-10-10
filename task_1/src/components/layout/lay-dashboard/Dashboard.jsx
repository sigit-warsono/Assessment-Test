import React from "react";
import RootDashboard from "../../template/RootDashboard";
import DashImg from "../../../assets/image/dashboard/dash.svg";
import Monitor from "../../fragments/frag-dashboard/dashboard/Monitor";
import TableDash from "../../fragments/frag-dashboard/dashboard/TableDash";

const Dashboard = () => {
  return (
    <RootDashboard>
      <div className="w-full h-screen">
        <div className="w-full h-[5rem] bg-[#DFFAF8] flex justify-between items-center pr-6">
          <div className="flex items-center gap-6">
            <img src={DashImg} alt="" className="w-[6rem] h-full" />
            <div className="flex items-start flex-col">
              <span className="text-[1.2rem] font-semibold">
                Daftarkan produk Anda yang lain agar tersertifikasi Industri
                Hijau!
              </span>
              <span className="text-[0.9rem] font-extralight">
                Anda dapat mendaftarkan sertifikasi lain sekaligus sambil
                menunggu proses lain.
              </span>
            </div>
          </div>
          <button className="bg-[#17A39D] text-white w-auto p-2 px-4 rounded-md">
            Daftar sertifikasi
          </button>
        </div>
        <div className="h-[200rem] w-full">
          <Monitor />
          <TableDash />
        </div>
      </div>
    </RootDashboard>
  );
};

export default Dashboard;
