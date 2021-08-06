import React from "react";
import { useHttpClient } from "../../hooks/HttpClient";

import "./genre.styles.css";

const Genre = ({ genre }) => {
  const { color, bgColor, name } = genre;
  const { isLoading, error, sendRequest } = useHttpClient();

  const handleRequest = async () => {
    const fetchGenres = await sendRequest();
    console.log("Fetched", fetchGenres);
  };

  return (
    <div
      className="hum__genre-container"
      style={{ backgroundColor: bgColor }}
      onClick={handleRequest}
    >
      <div className="hum__genre-container__text" style={{ background: color }}>
        {name}
      </div>
    </div>
  );
};

export default Genre;
