import axios from "axios";
import { useState } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const sendRequest = async () => {
    setIsLoading(true);

    const options = {
      method: "GET",
      url: "https://shazam-core.p.rapidapi.com/v1/charts/genre-world",
      params: { genre_code: "POP", limit: "10" },
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_XRAPIDAPI_KEY,
        "x-rapidapi-host": "shazam-core.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const responseData = await response.data;

      console.log("custom hook data", responseData);
      setIsLoading(false);
      return responseData;
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      throw err;
    }
  };

  return { isLoading, error, sendRequest };
};
