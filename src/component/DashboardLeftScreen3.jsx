import React from 'react';
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS } from "chart.js/auto";
import { genRandomNumber } from '../assets/data';
import '../styling/DashbaordLeftScreen3.css'
import {SlOptions} from 'react-icons/sl'


const DashboardLeftScreen3 = () => {
    const data = {
      labels: [
        "0-17 yo",
        "18-22 yo",
        "23-29 yo",
        "30-36 yo",
        "37-42 yo",
        "50+",
      ],
      datasets: [
        {
          data: [
            genRandomNumber(2),
            genRandomNumber(2),
            genRandomNumber(2),
            genRandomNumber(2),
            genRandomNumber(2),
            genRandomNumber(2),
          ],
          borderColor: "#4E9F3D",
          backgroundColor: "#4E9F3D",
          hoverBackgroundColor: "#1E5128",
        },
      ],
    };

    const options = {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          ticks: {
            display: false,
            beginAtZero: false,
          },
        },
      },
    };

    return (
      <div className="barChart">
        <div className="barChartLabel">
          <p>Target Audience</p>
          <SlOptions className="optionsIcon" style={{ color: "#191A19" }} />
        </div>
        <Bar data={data} options={options} />
      </div>
    );
}

export default DashboardLeftScreen3;
