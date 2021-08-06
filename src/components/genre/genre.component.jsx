import React from "react";

import "./genre.styles.css";

const Genre = ({ genre, setGenre }) => {
  const { color, bgColor, name } = genre;

  return (
    <div className="hum__genre-container" style={{ backgroundColor: bgColor }}>
      <div className="hum__genre-container__text" style={{ background: color }}>
        {name}
      </div>
    </div>
  );
};

export default Genre;
