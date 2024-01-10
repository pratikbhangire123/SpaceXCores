import { createContext, useContext, useState } from "react";

export const VisibilityContext = createContext();

export const VisibilityProvider = ({ children }) => {
  let [isVisible, setIsVisible] = useState(false);

  return (
    <VisibilityContext.Provider value={[isVisible, setIsVisible]}>
      {children}
    </VisibilityContext.Provider>
  );
};

export const useVisibilityContext = () => useContext(VisibilityContext);
