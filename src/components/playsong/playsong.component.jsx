import React, { useState } from "react";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import defaultImg from "../../assets/default.svg";

import "./playsong.styles.css";

const PlaySong = ({ title, subtitle, image, audio }) => {
  const [playPause, setPlayPause] = useState(true);

  const handlePlayPause = () => {
    setPlayPause(!playPause);
  };

  return (
    <div className="hum__play-song__container slide-top">
      <div className="hum__play-song__container_info">
        <div className="hum_play-song__container__img-div">
          <img src={image ? image : defaultImg} alt="ex" />
        </div>
        <div className="hum_play-song__container__desc-div">
          <h5>{title}</h5>
          <p>{subtitle}</p>
        </div>
      </div>
      <div className="hum__play-song__container_actions">
        {playPause ? (
          <AiFillPauseCircle
            style={{ marginRight: 10 }}
            fontSize={28}
            onClick={handlePlayPause}
          />
        ) : (
          <AiFillPlayCircle
            style={{ marginRight: 10 }}
            fontSize={28}
            onClick={handlePlayPause}
          />
        )}
        <MdCancel fontSize={21} />
      </div>
    </div>
  );
};

export default PlaySong;
