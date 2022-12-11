import React, { useRef, useState, useEffect } from "react";
import { musicPlayerData } from "../assets/data";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import "../styling/MusicPlayer.css"

export const MusicPlayer = ({ playMusic,isPlaying,setIsPlaying }) => {
  const audioElement = useRef();
  const [currentSong,setCurrentSong]=useState(musicPlayerData[3].songPath)

  let selectedSong = playMusic.replace(/\s/g, "");
  selectedSong = selectedSong + "poster";

  useEffect(() => {
    if (isPlaying === true) {
      audioElement.current
        .play()
        .then(() => console.log("playing"))
        .catch((err) => console.log(err));
    } else {
      audioElement.current.pause()
    }
  }, [isPlaying]);
  
  return (
    <div>
      {musicPlayerData
        ? musicPlayerData.map((ele, key) => {
            if (selectedSong === ele.posterName) {
              return (
                <div className="musicPlayerDiv" key={key}>
                  <img src={ele.posterPath} alt="" />
                  {isPlaying ? (
                    <AiFillPauseCircle
                      className="playPauseIcon pauseIcon"
                      onClick={() => {
                        setIsPlaying(!isPlaying);
                      }}
                    />
                  ) : (
                    <AiFillPlayCircle
                      className="playPauseIcon playIcon"
                      onClick={() => {
                        setCurrentSong(ele.songPath);
                        setIsPlaying(!isPlaying);
                      }}
                    />
                  )}
                </div>
              );
            }
            return null
          })
        : null}
      <audio src={currentSong} id="playSong" ref={audioElement}></audio>
    </div>
  );
};
