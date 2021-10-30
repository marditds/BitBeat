import React, { useState, useRef } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

export const Player = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  const playAndPasue = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    } else {
      setIsPlaying(false);
      audio.pause();
    }
  };

  return (
    <div>
      <audio src={props.sound} ref={audioRef}></audio>
      <div onClick={playAndPasue}>
        {isPlaying ? (
          <BsPauseFill className="pauseButton" />
        ) : (
          <BsFillPlayFill className="playerButton" />
        )}
      </div>
    </div>
  );
};
