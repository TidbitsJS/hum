import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import PlayBar from "../../components/playbar/playbar.component";
import { useHttpClient } from "../../hooks/HttpClient";

import "./playlist.styles.css";

const PlaylistPage = () => {
  const { key } = useParams();
  const linkData = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [playlist, setPlaylist] = useState(null);

  const { error, sendRequest } = useHttpClient();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await sendRequest(
        linkData.state.url,
        linkData.state.urlParams,
        linkData.state.host
      );

      console.log("Result", result);
      if (Object.keys(result).length !== 0 || !result || error) {
        if (linkData.state.song) {
          let filterData = [];
          result.tracks.hits.forEach((list, index) =>
            filterData.push(list.track)
          );

          setPlaylist(filterData);
        } else {
          setPlaylist(result);
        }
      } else {
        setIsError("NO search found. Try something different.");
      }
      setIsLoading(false);
    };

    if (linkData.state) {
      fetchData();
    }
  }, [linkData]);

  return (
    <>
      {!linkData.state || isError ? (
        <div className="hum__song-exception__handling">
          <div>{isError ? isError : "Nothing here"}</div>
        </div>
      ) : (
        <div className="hum__song-result__container">
          <div className="hum__song-result__container_homelink">
            <Link to="/">Go Home</Link>
          </div>
          {!isLoading ? (
            playlist ? (
              <div className="hum__song-result__container__playlist-box">
                <p className="hum__song-result__container__playlist-box_showing">
                  Showing results for <span> {key} </span>
                </p>
                {playlist.map((play, index) => (
                  <PlayBar
                    title={play.title}
                    subtitle={play.subtitle}
                    img={play.images.coverart}
                    key={play.title + index}
                    playNo={index + 1}
                  />
                ))}
              </div>
            ) : null
          ) : (
            <div className="hum__song-result__loader">
              <div className="lds-ripple">
                <div></div>
                <div></div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PlaylistPage;
