import axios from "axios";
import { useState } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const sendRequest = async (fetchURL, fetchParams) => {
    setIsLoading(true);

    const options = {
      method: "GET",
      url: fetchURL,
      params: fetchParams,
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_XRAPIDAPI_KEY,
        "x-rapidapi-host": "shazam-core.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const responseData = await response.data;

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
