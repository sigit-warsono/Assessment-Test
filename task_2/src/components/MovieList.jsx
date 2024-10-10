import React from "react";
import ReactPaginate from "react-paginate";
import { CiSearch } from "react-icons/ci";
import Spinner from "./charts/Spinner";

const MovieList = ({
  dataMovie,
  totalPageMove,
  changePage,
  searchMove,
  setSearchMovie,
  handleChangeSearch,
}) => {
  return (
    <>
      {dataMovie.length === 0 ? (
        <div className="w-full flex flex-col justify-center items-center text-blue-400 font-bold gap-4 mt-9">
          Data not found
          <button
            className="p-2 bg-blue-900 text-white rounded-lg cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            Kembali
          </button>
        </div>
      ) : (
        <div div className="mt-8">
          <div className="w-full flex justify-center items-center">
            <div className="flex items-center w-auto">
              <button className="p-[0.6rem] bg-blue-600 text-white rounded-l-lg">
                <CiSearch className="text-[1.4rem]" />
              </button>
              <input
                type="text"
                className="p-2 border border-slate-300 rounded-r-lg w-[22rem] focus:outline-none focus:ring-0 focus:ring-slate-300"
                placeholder="Search movie..."
                value={searchMove}
                onChange={handleChangeSearch}
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-5 gap-3 mt-5">
            {dataMovie.map((data, index) => (
              <div className="w-full bg-blue-300 rounded-lg h-auto" key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                  alt=""
                  className="w-full h-[15rem]"
                />
              </div>
            ))}
          </div>

          {!searchMove && (
            <ReactPaginate
              previousLabel={"← Prev"}
              nextLabel={"Next →"}
              breakLabel="..."
              containerClassName="flex gap-5 justify-center items-center p-3  mt-4 mb-10 text-blue-400"
              pageCount={totalPageMove}
              onPageChange={changePage}
              previousLinkClassName={"w-[5rem]"}
              nextLinkClassName={"w-[5rem]"}
              disabledClassName={"p-2 text-slate-300 text-slate-200"}
              activeClassName={
                "border border-blue-200 p-3 rounded-[50%] bg-blue-400 text-white w-[3rem] flex justify-center items-center"
              }
            />
          )}
        </div>
      )}
    </>
  );
};

export default MovieList;
