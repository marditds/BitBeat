import React, { useState, useRef } from "react";
import {
  BsFillPlayFill,
  BsPlayCircleFill,
  BsPauseFill,
  BsPauseCircleFill,
} from "react-icons/bs";
import { Col, Row } from "react-bootstrap";

export const Player = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPause, setShowPause] = useState(false);
  const audioRef = useRef();

  const playAndPasue = () => {
    const audio = audioRef.current;

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
      setShowPause(true);
    } else {
      setIsPlaying(false);
      audio.pause();
      setShowPause(false);
    }
  };

  return (
    <div>
      <audio src={props.sound} ref={audioRef}></audio>
      <div onClick={playAndPasue}>
        {isPlaying ? (
          // <BottomPlayer />
          <BsPauseFill className="pauseButton" />
        ) : (
          <BsFillPlayFill className="playerButton" />
        )}
      </div>
    </div>
  );
};

const BottomPlayer = () => {
  const [show, setShow] = useState(false);

  const showing = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <div onClick={showing}>
      {!show ? <BsPauseCircleFill className="bottomPlayer" /> : null}
    </div>
  );
};
