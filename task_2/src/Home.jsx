import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import Chart from "./components/Chart";
import axios from "axios";
import Movie from "./assets/image/movies.svg";

const Home = () => {
  const [select, setSelect] = useState("movie");
  const [dataMovie, setDataMovie] = useState([]);
  const [pageMove, setPageMovie] = useState(1);
  const [totalPageMove, setTotalPageMove] = useState(500);
  const [searchMove, setSearchMovie] = useState("");

  //chart
  const [categoriesData, setCategoriesData] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    getMovie();
    getDataChart();
  }, [pageMove, totalPageMove, searchMove]);

  const getMovie = async () => {
    try {
      await axios
        .get(
          `${
            searchMove.length > 0
              ? `https://api.themoviedb.org/3/search/movie?query=${searchMove}&include_adult=false&language=en-US&page=${pageMove}`
              : `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageMove}&sort_by=popularity.desc`
          }`,

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          if (response) {
            setTotalPageMove(response.data.results.length);
            setDataMovie(response.data.results);
            setPageMovie(response.data.page);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeSearch = (event) => {
    setSearchMovie(event.target.value);
  };

  const changePage = ({ selected }) => {
    setPageMovie(selected);
  };

  //chart
  const getDataChart = async () => {
    try {
      await axios
        .get(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response) {
            setCategoriesData(response.data.results);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <Navbar />
      <div className="w-full flex flex-col gap-3 px-6 mt-6">
        <div className="w-full flex">
          <div
            className={`w-[50%] p-2  ${
              select === "movie"
                ? "bg-blue-400"
                : "border-b border-blue-200 cursor-pointer"
            }  flex justify-center`}
            onClick={() => setSelect("movie")}
          >
            Move list
          </div>
          <div
            className={`w-[50%] p-2 ${
              select === "chart"
                ? "bg-blue-400"
                : "border-b border-blue-200  cursor-pointer"
            } flex justify-center`}
            onClick={() => setSelect("chart")}
          >
            Chart
          </div>
        </div>
        <div className="w-full ">
          {token ? (
            select === "movie" ? (
              <MovieList
                dataMovie={dataMovie}
                totalPageMove={totalPageMove}
                changePage={changePage}
                setSearchMovie={setSearchMovie}
                searchMove={searchMove}
                handleChangeSearch={handleChangeSearch}
              />
            ) : (
              <div className="w-full flex justify-center">
                <div
                  className=""
                  style={{ width: "80vw", position: "relative" }}
                >
                  <Chart categoriesData={categoriesData} />
                </div>
              </div>
            )
          ) : (
            <div className="w-full flex justify-center items-center mt-7">
              <div className="flex flex-col gap-2 items-center">
                <img src={Movie} alt="" className="w-[12rem] h-[12rem]" />
                <span className="text-blue-600">Harap login dulu ...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
