import React from "react";
import { Line } from "react-chartjs-2";

type Props = {
  keys: any[];
  sumOfSales: any[];
};

const LineChart: React.FC<Props> = ({ keys, sumOfSales }) => {
  return (
    <Line
      data={{
        labels: keys,
        datasets: [
          {
            label: "Amount of Sales",
            data: sumOfSales,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
            ],
            borderWidth: 1,
          },
        ],
      }}
    />
  );
};

export default LineChart;
