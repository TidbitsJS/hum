import React from "react";

import "./track-card.styles.css";

const TrackCard = ({ name, color, img }) => {
  return (
    <div
      className="hum__track__card-container"
      style={{ backgroundColor: color }}
    >
      <div className="hum__track__text-block">{name}</div>
      <div className="hum__track__image-block">
        <div className="hum__track__image">
          <img src={img} alt="telgu" />
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
