import React, { useState } from "react";

export const RegionsContext = React.createContext();

export const RegionsProvider = (props) => {

  const [regions, setRegions] = useState([]);
  const [loading, setLoading] =  useState(true);

  return (
    <RegionsContext.Provider value={{regions, setRegions, loading, setLoading}}>
      {props.children}
    </RegionsContext.Provider>
  )

}



