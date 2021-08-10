import React, { useContext } from "react";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import { withRouter } from "react-router";
import { BsMusicNoteList } from "react-icons/bs";
import {
  HideContext,
  HideDispatchContext,
  PlayContext,
  PlayDispatchContext,
} from "../../context/songContext";

import "./playbar.styles.css";

const PlayBar = ({
  playNo,
  title,
  subtitle,
  img,
  audio,
  togglePlay,
  playPause,
  history,
}) => {
  const playDetails = useContext(PlayContext);
  const setPlayDetails = useContext(PlayDispatchContext);
  const hide = useContext(HideContext);
  const setHide = useContext(HideDispatchContext);

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

  const handlePlayDetails = (playStatus) => {
    setPlayDetails({
      title: title,
      subtitle: subtitle,
      image: img,
      audio: audio,
      status: playStatus,
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
        {!playDetails.status || !playPause[title + subtitle] ? (
          <AiFillPlayCircle
            fontSize={28}
            onClick={() => {
              if (hide) setHide(false);
              handlePlayDetails(!playPause[title + subtitle]);
              togglePlay(title + subtitle);
            }}
          />
        ) : (
          <AiFillPauseCircle
            fontSize={28}
            onClick={() => {
              setPlayDetails((prev) => ({
                ...prev,
                status: false,
              }));
              togglePlay(title + subtitle);
            }}
          />
        )}
        <div className="hum_song-playbar__container__btn-div_lyrics">
          <BsMusicNoteList fontSize={13} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(PlayBar);
