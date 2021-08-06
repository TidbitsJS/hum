import React from "react";
import Genre from "../../components/genre/genre.component";

import "./display.styles.css";

const random = [
  {
    color: " #6DBFE7",
    bgColor: "#d7f8ff",
    name: "Jazz",
  },
  {
    color: "#E2C5C7",
    bgColor: "#FCE6F0",
    name: "pop",
  },
  {
    color: "#F1CC79",
    bgColor: "#FFEAB9",
    name: "dance",
  },
  {
    color: "#ff8c7d",
    bgColor: "#FDDFD8",
    name: "rock",
  },
  {
    color: "#7ce69d",
    bgColor: "#bfffd3",
    name: "folk",
  },
];

const DisplayPage = () => {
  return (
    <div className="hum__display-page__container">
      <div className="hum__display-page__container__genres">
        <div className="hum__display-page__container__genres-text">
          <h1>
            Explore <span>genres</span>
          </h1>
        </div>
        <div className="hum__display-page__container__genres-box">
          {random.map((genre) => (
            <Genre genre={genre} key={genre.name + genre.color} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayPage;
