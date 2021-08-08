import React from "react";
import { withRouter } from "react-router";

import "./track-card.styles.css";

const TrackCard = ({ name, color, img, history }) => {
  const handleClick = () => {
    const fetchURL = "https://shazam.p.rapidapi.com/search";
    const fetchParams = { term: name, locale: "en-US", limit: "20" };
    const fetchHost = "shazam.p.rapidapi.com";

    history.push({
      pathname: `/${name}/playlist`,
      state: {
        urlParams: fetchParams,
        url: fetchURL,
        host: fetchHost,
        song: true,
      },
    });
  };

  return (
    <div
      className="hum__track__card-container"
      style={{ backgroundColor: color }}
      onClick={handleClick}
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

export default withRouter(TrackCard);
