import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import "./search-page.styles.css";

const SearchPage = (props) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    if (!search) return alert("Please enter something");

    const fetchURL = "https://shazam.p.rapidapi.com/search";
    const fetchParams = { term: search, locale: "en-US", limit: "20" };
    const fetchHost = "shazam.p.rapidapi.com";

    props.history.push({
      pathname: `/${search}/playlist`,
      state: {
        urlParams: fetchParams,
        url: fetchURL,
        host: fetchHost,
        song: true,
      },
    });

    setSearch("");
  };

  return (
    <div className="hum__search-container">
      <div className="hum__search-container__search-input">
        <input
          placeholder="Enter your song name"
          type="text"
          value={search}
          onChange={handleSearch}
        />
        <button onClick={handleClick}>Search</button>
      </div>
    </div>
  );
};

export default withRouter(SearchPage);
