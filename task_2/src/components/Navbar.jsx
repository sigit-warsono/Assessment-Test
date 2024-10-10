import React, { useState } from "react";
import ModalLogin from "./charts/ModalLogin";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));

  const Logout = async () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <>
      <div className="p-2 w-full bg-blue-600 flex justify-around items-center">
        <div className="logo text-[2rem] text-white font-bold">
          The Movie (TMDB)
        </div>
        {token ? (
          <div className="text-white flex items-center gap-2">
            {user.username}{" "}
            <IoIosLogOut className="cursor-pointer" onClick={() => Logout()} />
          </div>
        ) : (
          <button
            className="p-2 px-3 text-white bg-blue-950 hover:bg-blue-400 rounded-full cursor-pointer"
            onClick={() => setOpen(true)}
          >
            Login Auth
          </button>
        )}
      </div>
      {open && <ModalLogin setOpen={setOpen} />}
    </>
  );
};

export default Navbar;
