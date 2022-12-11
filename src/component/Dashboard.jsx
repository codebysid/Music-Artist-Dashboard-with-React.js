import React from "react";
import { genRandomNumber } from "../assets/data";
import "../styling/Dashboard.css";
import DashbaordLeftScreen1 from "./DashboardLeftScreen1";
import DashboardLeftScreen2 from "./DashboardLeftScreen2";
import DashboardLeftScreen3 from "./DashboardLeftScreen3";
import DashboardLeftScreen4 from "./DashboardLeftScreen4";
import { DashboardLeftScreen5 } from "./DashboardLeftScreen5";
import { DashboardRightScreen } from "./DashboardRightScreen";

export default function Dashboard() {
  // const [earnings,setEarnings]=useState([])

  const fakeLabel = [
    "Feb28",
    "Mar3",
    "Mar24",
    "Apr15",
    "May12",
    "Jun1",
    "Jun23",
  ];

  const fakeNum = [
    genRandomNumber(5),
    genRandomNumber(5),
    genRandomNumber(5),
    genRandomNumber(5),
    genRandomNumber(5),
    genRandomNumber(5),
    genRandomNumber(5),
  ];

  const data = {
    labels: fakeLabel,
    datasets: [
      {
        label: "Streams",
        data: fakeNum,
        borderColor: "#4E9F3D",
        borderWidth: 1,
        tension: 0.5,
        pointBorderWidth: 2,
        backgroundColor: "#1E5128",
        fill: true,
      },
    ],
  };

  const options = {
    animation: {
      x: {
        duration: 1000,
        from: 0,
      },
      y: {
        duration: 1000,
        from: 500,
        stacked: true,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },

    // Modify the axis by adding scales
    scales: {
      // to remove the labels
      x: {
        ticks: {
          display: true,
        },

        // to remove the x-axis grid
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      // to remove the y-axis labels
      y: {
        min: 10000,
        max: 99999,
        ticks: {
          display: false,
          beginAtZero: true,
          stepSize: 25000,
        },
        // to remove the y-axis grid
        grid: {
          drawBorder: false,
          display: false,
          color: "grey",
        },
      },
    },
  };

  return (
    <div className="mainBox">
      <div className="leftScreen">
        <div className="leftScreen1">
          <DashbaordLeftScreen1 data={data} options={options} />
        </div>
        <div className="leftScreen2">
          <DashboardLeftScreen2 />
        </div>
        <div className="leftScreen3">
          <DashboardLeftScreen3 />
        </div>
        <div className="leftScreen4">
          <DashboardLeftScreen4 />
        </div>
        <div className="leftScreen5">
          <DashboardLeftScreen5 />
        </div>
      </div>
      <div className="rightScreen">
        <DashboardRightScreen />
      </div>
    </div>
  );
}
