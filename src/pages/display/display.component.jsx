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
  const [allTracks, setAllTracks] = useState([]);
  const { sendRequest } = useHttpClient();

  const fetchURL = "https://shazam.p.rapidapi.com/charts/list";
  const trackURL = "https://shazam.p.rapidapi.com/charts/track";
  const trackParams = { locale: "en-US", pageSize: "20", startFrom: "0" };
  const fetchHost = "shazam.p.rapidapi.com";

  useEffect(() => {
    const fetchGenre = async () => {
      setIsLoading(true);
      let fetchedData = await sendRequest(fetchURL, null, fetchHost);

      setAllGenres(fetchedData.global.genres);
      setIsLoading(false);
    };

    const fetchTracks = async () => {
      let trackData = await sendRequest(trackURL, trackParams, fetchHost);

      setAllTracks(trackData.tracks);
    };

    fetchGenre();
    fetchTracks();
  }, [sendRequest]);

  const handleNav = (direction) => {
    if (direction === "left") {
      navRef.current.scrollLeft -= 200;
    } else {
      navRef.current.scrollLeft += 200;
    }
  };

  return (
    <div className="hum__display-page__container">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="hum__display-page__container__genres">
            <div className="hum__display-page__container__genres-text">
              <h1>
                Explore <span>genres</span>
              </h1>
            </div>

            <div className="hum__display-page__container__genre-navigation">
              <div className="hum__display-page__container__genre-navigation__back">
                <AiFillLeftCircle onClick={() => handleNav("left")} />
              </div>
              <div
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
              </div>
              <div className="hum__display-page__container__genre-navigation__next">
                <AiFillRightCircle onClick={() => handleNav("right")} />
              </div>
            </div>
          </div>
          <div className="hum__display-page__container__tracks">
            <div className="hum__display-page__container__genres-text">
              <h1>
                Browse <span>Tracks</span>
              </h1>
            </div>
            <div className="hum__display-page__container__tracks-box">
              {allTracks.map((track) => (
                <TrackCard
                  name={track.title}
                  color={randomColor()}
                  key={track.name + track.subtitle + track.key}
                  img={track.images.coverart}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DisplayPage;
