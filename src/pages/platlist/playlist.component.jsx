import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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

      setPlaylist(result);
      setIsLoading(false);
    };

    fetchData();
  }, [linkData]);

  return (
    <div className="hum__song-result__container">
      {!isLoading ? (
        playlist ? (
          playlist.map((play) => <div>{play.title}</div>)
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
