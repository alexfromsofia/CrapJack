import React, { createContext, useContext } from 'react';

// Connect React state hooks (useState and useReducer) to redux dev tools.
import { useReducer } from 'reinspect';

import PropTypes from 'prop-types';
export const StateContext = createContext();

export const StoreProvider = ({ reducer, initialState, init, children }) => (
  <StateContext.Provider
    value={useReducer(reducer, initialState, init, 'Crap Jack')}
  >
    {children}
  </StateContext.Provider>
);
StoreProvider.propTypes = {
  reducer: PropTypes.func.isRequired,
  initialState: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired
};

export const useStoreValue = () => useContext(StateContext);
