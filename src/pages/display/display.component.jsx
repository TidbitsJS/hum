import React, { useRef, useState, useEffect } from "react";
import Genre from "../../components/genre/genre.component";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { useHttpClient } from "../../hooks/HttpClient";
import Spinner from "../../components/spinner/spinner.component";
import { genresColorSchema } from "../../data/genreColor";
import randomColor from "randomcolor";
import TrackCard from "../../components/track/track-card.component";

import "./display.styles.css";

const DisplayPage = () => {
  const navRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [allGenres, setAllGenres] = useState([]);
  const { error, sendRequest } = useHttpClient();

  const fetchURL = "https://shazam.p.rapidapi.com/charts/list";
  const fetchHost = "shazam.p.rapidapi.com";

  // useEffect(() => {
  //   const fetchGenre = async () => {
  //     setIsLoading(true);
  //     let fetchedData = await sendRequest(fetchURL, null, fetchHost);
  //     console.log("Fetched genres", fetchedData);

  //     setAllGenres(fetchedData.global.genres);
  //     setIsLoading(false);
  //     console.log("All genres", allGenres);
  //   };

  //   fetchGenre();
  // }, [sendRequest]);

  const handleNav = (direction) => {
    if (direction === "left") {
      navRef.current.scrollLeft -= 200;
    } else {
      navRef.current.scrollLeft += 200;
    }
  };

  return (
    <div className="hum__display-page__container">
      <div className="hum__display-page__container__genres">
        <div className="hum__display-page__container__genres-text">
          <h1>
            Explore <span>genres</span>
          </h1>
        </div>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="hum__display-page__container__genre-navigation">
            <div className="hum__display-page__container__genre-navigation__back">
              <AiFillLeftCircle onClick={() => handleNav("left")} />
            </div>
            {/* <div
              className="hum__display-page__container__genres-box"
              ref={navRef}
            >
              {allGenres.map((genre, index) => (
                <Genre
                  genre={genre}
                  colors={genresColorSchema[index]}
                  key={genre.name + genre.urlPath}
                />
              ))}
            </div> */}
            <div className="hum__display-page__container__genre-navigation__next">
              <AiFillRightCircle onClick={() => handleNav("right")} />
            </div>
          </div>
        )}
      </div>
      <div className="hum__display-page__container__tracks">
        <div className="hum__display-page__container__genres-text">
          <h1>
            Browse <span>Tracks</span>
          </h1>
        </div>
        <div className="hum__display-page__container__tracks-box">
          <TrackCard
            name="something"
            color={randomColor()}
            img="https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/aa/02/57/aa025710-a0c6-90e9-4a18-2881efad4855/190296614316.jpg/400x400cc.jpg"
          />
          <TrackCard
            name="something"
            color={randomColor()}
            img="https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/aa/02/57/aa025710-a0c6-90e9-4a18-2881efad4855/190296614316.jpg/400x400cc.jpg"
          />
          <TrackCard
            name="something"
            color={randomColor()}
            img="https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/aa/02/57/aa025710-a0c6-90e9-4a18-2881efad4855/190296614316.jpg/400x400cc.jpg"
          />
          <TrackCard
            name="something"
            color={randomColor()}
            img="https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/aa/02/57/aa025710-a0c6-90e9-4a18-2881efad4855/190296614316.jpg/400x400cc.jpg"
          />
          <TrackCard
            name="something"
            color={randomColor()}
            img="https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/aa/02/57/aa025710-a0c6-90e9-4a18-2881efad4855/190296614316.jpg/400x400cc.jpg"
          />
          <TrackCard
            name="something"
            color={randomColor()}
            img="https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/aa/02/57/aa025710-a0c6-90e9-4a18-2881efad4855/190296614316.jpg/400x400cc.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default DisplayPage;
