import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

import "./playbar.styles.css";

const PlayBar = ({ playNo, title, subtitle, img }) => {
  return (
    <div className="hum__song-playbar__container">
      <div className="hum_song-playbar__container__details">
        <div className="hum_song-playbar__container__playNo">
          <p>{playNo}.</p>
        </div>
        <div className="hum_song-playbar__container__img-div">
          <img src={img} alt={title} />
        </div>
        <div className="hum_song-playbar__container__desc-div">
          <h5>{title}</h5>
          <p>{subtitle}</p>
        </div>
      </div>
      <div className="hum_song-playbar__container__btn-div">
        <AiFillPlayCircle fontSize={28} />
      </div>
    </div>
  );
};

export default PlayBar;
