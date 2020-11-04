import React, { createContext, useContext, useReducer } from "react";

// Prepare the data Layer
export const StateContent = createContext();

// Wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContent.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContent.Provider>
  );
};

// Pull information from the data layer
export const useStateValue = () => useContext(StateContent);
