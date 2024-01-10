import { createContext, useContext, useState } from "react";

export const CoreContext = createContext();

export const CoreProvider = ({ children }) => {
  let [filteredCores, setFilteredCores] = useState([]);

  return (
    <CoreContext.Provider value={{ filteredCores, setFilteredCores }}>
      {children}
    </CoreContext.Provider>
  );
};

export const useCoreContext = () => useContext(CoreContext);
