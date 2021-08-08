import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/spinner/spinner.component";
import { useLocation, Link } from "react-router-dom";

import "./lyrics.styles.css";

const LyricsPage = () => {
  const [lyrics, setLyrics] = useState("");
  const [loading, setIsLoading] = useState(false);
  const lyricsDetails = useLocation();

  console.log("Lyrc", lyricsDetails);

  const fetchURL = `https://cors-access-allow.herokuapp.com/http://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_artist=${lyricsDetails.state.artist}&q_track=${lyricsDetails.state.title}&apikey=${process.env.REACT_APP_MUSIX_API_KEY}`;

  const options = {
    method: "GET",
    url: fetchURL,
    headers: {
      "Content-type": "application/json",
    },
  };

  useEffect(() => {
    const fetchLyrics = async () => {
      setIsLoading(true);
      const response = await axios.request(options);
      const data = response.data;
      console.log("data", data, data.message.body.lyrics.lyrics_body);

      if (
        response.data &&
        data.message.body.lyrics &&
        data.message.body.lyrics.lyrics_body
      ) {
        setLyrics(data.message.body.lyrics.lyrics_body);
        setIsLoading(false);
      } else {
        setLyrics("no lyrics");
      }
    };

    if (lyricsDetails.state) {
      fetchLyrics();
    } else {
      setLyrics("Nothing here");
    }
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="hum__lyrics__container">
          <div className="hum__lyrics__container_homelink">
            <Link to="/">Go Home</Link>
          </div>
          <div className="hum__lyrics__container__song-info">
            <p>{lyricsDetails.state.title}</p>
            <img
              src={lyricsDetails.state.cover}
              alt={lyricsDetails.state.title}
            />
            <p>{lyricsDetails.state.artist}</p>
          </div>
          <p className="hum__lyrics__container__text">{lyrics}</p>
        </div>
      )}
    </div>
  );
};

export default LyricsPage;
