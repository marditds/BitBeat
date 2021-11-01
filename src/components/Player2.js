import React, { useState, useRef } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

export const Player2 = (props) => {
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
          <BsPauseFill className="pauseButton2" />
        ) : (
          <BsFillPlayFill className="playerButton2" />
        )}
      </div>
    </div>
  );
};
