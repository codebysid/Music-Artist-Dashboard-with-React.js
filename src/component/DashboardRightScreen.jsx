import React, { useState } from "react";
import "../styling/DashboardRightScreen.css";
import { musicPlayerData } from "../assets/data";
import { BsPlayFill } from "react-icons/bs";
import { MusicPlayer } from "./MusicPlayer";

export const DashboardRightScreen = () => {
  const [playMusic, setPlayMusic] = useState("we dont talk anymore");
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <p className="releaseLabel">Top Releases</p>

      <div className="releaseBtn">
        <button className="allRelease">All Release</button>

        <button className="newRelease">+ New Release</button>
      </div>
      <div className="songList">
        {musicPlayerData.map((ele, key) => {
          return (
            <div key={key}>
              <ul className="songListUL">
                <li className="songId">{ele.id}</li>
                <li className="songPoster">
                  <img src={ele.posterPath} alt="" />
                </li>
                <li className="songName">
                  {ele.name}
                  <button
                    className="playMusic"
                    onClick={() => {
                      setPlayMusic(ele.name.toLowerCase());
                      setIsPlaying(false);
                    }}
                  >
                    <BsPlayFill />
                  </button>
                </li>
              </ul>
              <hr className="songBreak"></hr>
            </div>
          );
        })}
      </div>
      <MusicPlayer
        playMusic={playMusic}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
};
