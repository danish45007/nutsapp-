import React, { createContext, useContext, useReducer } from 'react';
export const StateContext = createContext();

// setting up the data layer
export const StateProvider = ({ initalState, reducer, children }) => (
	<StateContext.Provider value={useReducer(reducer, initalState)}>
		{children}
	</StateContext.Provider>
);

// pulling info from data layer
export const useStateValue = () => useContext(StateContext);
