import React, { useState } from "react";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import { withRouter } from "react-router";
import { BsMusicNoteList } from "react-icons/bs";

import "./playbar.styles.css";

const PlayBar = ({ playNo, title, subtitle, img, audio, history }) => {
  const handleClick = () => {
    history.push({
      pathname: `/${title}/lyrics`,
      state: {
        title: title,
        artist: subtitle,
        cover: img,
        audio: audio,
      },
    });
  };

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
        <div className="hum_song-playbar__container__btn-div_lyrics">
          <BsMusicNoteList fontSize={13} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(PlayBar);
