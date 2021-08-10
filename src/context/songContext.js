import React, { createContext, useState } from "react";

const PlayContext = createContext(undefined);
const PlayDispatchContext = createContext(undefined);

const HideContext = createContext(undefined);
const HideDispatchContext = createContext(undefined);

function PlayProvider({ children }) {
  const [playDetails, setPlayDetails] = useState({
    title: "Mere Lite",
    subtitle: "Akhil sachdeva",
    image: null,
    audio: null,
    status: false,
  });

  const [hide, setHide] = useState(true);

  return (
    <HideContext.Provider value={hide}>
      <HideDispatchContext.Provider value={setHide}>
        <PlayContext.Provider value={playDetails}>
          <PlayDispatchContext.Provider value={setPlayDetails}>
            {children}
          </PlayDispatchContext.Provider>
        </PlayContext.Provider>
      </HideDispatchContext.Provider>
    </HideContext.Provider>
  );
}

export {
  PlayProvider,
  PlayContext,
  PlayDispatchContext,
  HideContext,
  HideDispatchContext,
};
