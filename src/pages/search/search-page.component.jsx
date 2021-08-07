import React from "react";

import "./search-page.styles.css";

const SearchPage = () => {
  return (
    <div className="hum__search-container">
      <div className="hum__search-container__search-input">
        <input placeholder="Enter your song name" type="text" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchPage;
