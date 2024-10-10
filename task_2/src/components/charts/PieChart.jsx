import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

const PieChart = (props) => {
  let labels = [];
  let SubCatPercentage = [];
  if (props.cData && props.cData.length > 0) {
    labels = props.cData.map((shape) => shape.title);
    SubCatPercentage = props.cData.map((shape) => shape.vote_count);
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Subcategory Percentage",
        data: SubCatPercentage,
        backgroundColor: [
          "#FF0095",
          "#CD17C9",
          "#701BEE",
          "#AD5CFF",
          "#06A4F4",
          "#3BF4fB",
          "#07BEB8",
          "#73FBD3",
          "#FF9E00",
          "#FFD23F",
        ],
        borderColor: [
          "#FF0095",
          "#CD17C9",
          "#701BEE",
          "#AD5CFF",
          "#06A4F4",
          "#3BF4fB",
          "#07BEB8",
          "#73FBD3",
          "#FF9E00",
          "#FFD23F",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    legend: {
      position: "bottom",
      labels: {
        boxWidth: 20,
        fontSize: 12,
        fontColor: "white",
      },
    },
  };
  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
