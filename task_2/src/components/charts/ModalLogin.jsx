import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import Spinner from "./Spinner";

const ModalLogin = ({ setOpen }) => {
  const value =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWFmY2U2ZWVjOTFhM2Q4Y2RmYWE4ZGU0Zjk5NDAzNyIsIm5iZiI6MTcyODM3MjU4NC40MzA1MTUsInN1YiI6IjY3MDRkOTY0MWI5NmI4ZWY0YzY5YzZiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RahdLpo0X4_4kUu0UzMiZvWnHRIjkGzw4WUxHu1n4rU";
  const [token, setToken] = useState(value);
  const [loader, setLoader] = useState(false);

  const [data, setData] = useState([]);
  console.log(data);

  const Submit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      await axios
        .get(`https://api.themoviedb.org/3/account/null`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response) {
            setData(response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
            localStorage.setItem("token", JSON.stringify(token));
            setOpen(false);
            window.location.href = "/";
            setLoader(false);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {loader && <Spinner />}
      <div className="w-full h-screen fixed flex justify-center items-center bg-modal-black">
        <div className="w-[50%] h-auto bg-white rounded-lg p-2 pb-20">
          <div className="flex w-full justify-end">
            <IoMdClose
              onClick={() => setOpen(false)}
              className="cursor-pointer"
            />
          </div>
          <form
            className="w-full flex flex-col justify-center items-center gap-2"
            onSubmit={Submit}
          >
            <span className="text-[1rem] font-bold">Auth Token</span>
            <textarea
              name=""
              id=""
              className="border border-slate-300 w-[90%] h-[8rem] focus:ring-slate-200 focus:ring-0 outline-none rounded-lg p-2"
              // value={
              //   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWFmY2U2ZWVjOTFhM2Q4Y2RmYWE4ZGU0Zjk5NDAzNyIsIm5iZiI6MTcyODM3MjU4NC40MzA1MTUsInN1YiI6IjY3MDRkOTY0MWI5NmI4ZWY0YzY5YzZiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RahdLpo0X4_4kUu0UzMiZvWnHRIjkGzw4WUxHu1n4rU"
              // }
              value={token}
              onChange={(e) => setToken(e.target.value)}
            ></textarea>
            <button className="p-2 bg-blue-600 text-white px-4 rounded-lg ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalLogin;
