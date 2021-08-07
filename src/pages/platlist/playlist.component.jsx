import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PlayBar from "../../components/playbar/playbar.component";
import { useHttpClient } from "../../hooks/HttpClient";

import "./playlist.styles.css";

const PlaylistPage = () => {
  const linkData = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [playlist, setPlaylist] = useState(null);

  const { sendRequest } = useHttpClient();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await sendRequest(
        linkData.state.url,
        linkData.state.urlParams
      );

      console.log("Result", result);
      setPlaylist(result);
      setIsLoading(false);
    };

    fetchData();
  }, [linkData]);

  return (
    <div className="hum__song-result__container">
      {!isLoading ? (
        playlist ? (
          <div className="hum__song-result__container__playlist-box">
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
  );
};

export default PlaylistPage;
