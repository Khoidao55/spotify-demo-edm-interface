import React, { useState, useEffect } from "react";
import PlayButton from "./playbutton.png";
import PauseButton from "./pausebutton.png";

import "./Music.css";

const useAudio = (song) => {
  const [audio] = useState(new Audio(song));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    audio.currentTime = 0;
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Music = ({ song }) => {
  const [playing, toggle] = useAudio(song);
  return (
    <div>
      {playing ? (
        <img src={PauseButton} onClick={toggle} alt="pause-button" />
      ) : (
        <img src={PlayButton} onClick={toggle} alt="play-button" />
      )}
    </div>
  );
};

export default Music;
