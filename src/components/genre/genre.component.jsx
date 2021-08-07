import React from "react";
import { Link } from "react-router-dom";

import "./genre.styles.css";

const Genre = ({ genre }) => {
  const { color, bgColor, name, code } = genre;

  const fetchURL = "https://shazam-core.p.rapidapi.com/v1/charts/genre-world";
  const fetchParams = { genre_code: code.toUpperCase(), limit: "20" };
  const fetchHost = "shazam-core.p.rapidapi.com";

  return (
    <Link
      to={{
        pathname: `/${name}/playlist`,
        state: {
          urlParams: fetchParams,
          url: fetchURL,
          host: fetchHost,
        },
      }}
    >
      <div
        className="hum__genre-container"
        style={{ backgroundColor: bgColor }}
      >
        <div
          className="hum__genre-container__text"
          style={{ background: color }}
        >
          {name}
        </div>
      </div>
    </Link>
  );
};

export default Genre;
