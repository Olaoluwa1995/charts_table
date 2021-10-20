import React from "react";
import { Bar } from "react-chartjs-2";

type Props = {
  keys: any[];
  sumOfSales: any[];
  sumOfProfits: any[];
};

const CompositeChart: React.FC<Props> = ({
  keys,
  sumOfSales,
  sumOfProfits,
}) => {
  return (
    <Bar
      data={{
        labels: keys,
        datasets: [
          {
            label: "Amount of Sales",
            data: sumOfSales,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "Profits",
            data: sumOfProfits,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      }}
      options={{
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      }}
    />
  );
};

export default CompositeChart;
