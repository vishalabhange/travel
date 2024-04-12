// EmailContext.js
import React, { createContext, useContext, useState } from "react";

const ClickedEmailContext = createContext();

export const useClickedEmail = () => useContext(ClickedEmailContext);

export const ClickedEmailProvider = ({ children }) => {
  const [clickedEmail, setClickedEmail] = useState(null);

  return (
    <ClickedEmailContext.Provider value={{ clickedEmail, setClickedEmail }}>
      {children}
    </ClickedEmailContext.Provider>
  );
};
