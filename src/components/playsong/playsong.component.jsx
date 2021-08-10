import React from "react";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import ReactPlayer from "react-player";
import defaultImg from "../../assets/default.svg";
import {
  PlayContext,
  PlayDispatchContext,
  HideContext,
  HideDispatchContext,
} from "../../context/songContext";

import "./playsong.styles.css";

const PlaySong = () => {
  const playDetails = React.useContext(PlayContext);
  const setPlayDetails = React.useContext(PlayDispatchContext);
  const { title, subtitle, image, audio, status } = playDetails;

  const hide = React.useContext(HideContext);
  const setHide = React.useContext(HideDispatchContext);

  if (hide) return null;

  return (
    <>
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
          {status ? (
            <AiFillPauseCircle
              style={{ marginRight: 10 }}
              fontSize={28}
              onClick={() => {
                setPlayDetails((prev) => ({
                  ...prev,
                  status: false,
                }));
              }}
            />
          ) : (
            <AiFillPlayCircle
              style={{ marginRight: 10 }}
              fontSize={28}
              onClick={() => {
                setPlayDetails((prev) => ({
                  ...prev,
                  status: true,
                }));
              }}
            />
          )}
          <MdCancel fontSize={21} onClick={() => setHide(true)} />
        </div>
      </div>
      <ReactPlayer url={audio} playing={status} style={{ display: "none" }} />
    </>
  );
};

export default PlaySong;
