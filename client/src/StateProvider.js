import React, {createContext,useContext, useReducer} from 'react'
export const StateContext = createContext();

// setting up the data layer
export const StateProvider = ({ reducer, initialState, childern }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {childern}
    </StateContext.Provider>
)


// pulling info from data layer
export const useStateValue = () => useContext(StateContext);