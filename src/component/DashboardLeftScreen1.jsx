import { Line } from "react-chartjs-2";
import { BsSpotify } from "react-icons/bs";
import { SiYoutubemusic } from "react-icons/si";
import { GiMusicSpell } from "react-icons/gi";
import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const DashboardLeftScreen1 = ({data,options}) => {
    return (
        <div>
             <div className="musicDetails">
            <p className="streamsText">
              Streams
              <span>80,234</span>
            </p>
            <div className="musicIcons">
              <BsSpotify style={{ color: "#4caf50" }} />
              <SiYoutubemusic style={{ color: "#e53935" }} />
              <GiMusicSpell style={{ color: "white" }} />
            </div>
          </div>
          {data ? (
            <div className="chart1Container">
              <Line data={data} options={options} />
            </div>
          ) : null}
        </div>
    );
}

export default DashboardLeftScreen1;
