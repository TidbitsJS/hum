import React, { useState } from "react";
import DisplayPage from "../display/display.component";

import "./search-page.styles.css";

const SearchPage = () => {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log("Result", result, isLoading);

  return (
    <div className="hum__search-container">
      <div className="hum__search-container__search-input">
        <input placeholder="Enter your song name" type="text" />
      </div>
      <DisplayPage saveResult={setResult} loading={setIsLoading} />
      <div className="hum__search-result__container">
        {isLoading ? (
          <div className="hum__search-result__loader">
            <div class="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
        ) : result ? (
          result.map((item) => <div>{item.title}</div>)
        ) : null}
      </div>
    </div>
  );
};

export default SearchPage;
