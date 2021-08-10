import React, { createContext, useState } from "react";

const PlayContext = createContext(undefined);
const PlayDispatchContext = createContext(undefined);

function PlayProvider({ children }) {
  const [playDetails, setPlayDetails] = useState({
    title: "Mere Lite",
    subtitle: "Akhil sachdeva",
    image: null,
    audio: null,
    status: false,
  });

  return (
    <PlayContext.Provider value={playDetails}>
      <PlayDispatchContext.Provider value={setPlayDetails}>
        {children}
      </PlayDispatchContext.Provider>
    </PlayContext.Provider>
  );
}

export { PlayProvider, PlayContext, PlayDispatchContext };
