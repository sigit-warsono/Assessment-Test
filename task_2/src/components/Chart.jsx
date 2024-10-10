import React from "react";
import PieChart from "./charts/PieChart";

const Chart = ({ categoriesData }) => {
  return (
    <>
      <span className="text-[2rem] font-semibold mb-10">
        Trending big 10 top movie (Pie Chart)
      </span>
      {categoriesData.length && (
        <PieChart cData={categoriesData.slice(0, 10)} />
      )}
    </>
  );
};

export default Chart;
