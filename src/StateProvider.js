import React, { createContext, useContext, useReducer } from "react";

//prepare the dataLayer
export const StateContext = createContext();

//Wrap the app amd provide the Data layer to every component 
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    </StateContext.Provider>
);

//pull information from the data layer
export const useStateValue = () => useContext(StateContext);