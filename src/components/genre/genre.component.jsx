import React from "react";
import { useHttpClient } from "../../hooks/HttpClient";

import "./genre.styles.css";

const Genre = ({ genre, saveResult, loading }) => {
  const { color, bgColor, name } = genre;
  const { sendRequest } = useHttpClient();

  const handleRequest = async () => {
    loading(true);
    const fetchURL = "https://shazam-core.p.rapidapi.com/v1/charts/genre-world";
    const fetchParams = { genre_code: genre.code.toUpperCase(), limit: "20" };
    const fetchedData = await sendRequest(fetchURL, fetchParams);

    loading(false);
    saveResult(fetchedData);
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
