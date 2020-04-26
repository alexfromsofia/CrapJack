import React from 'react';

import { StoreProvider } from '../store/StoreProvider';
import { initialState } from '../store/gameReducer';
import { rootReducer, init } from '../store';

export const withProvider = (Component, props = {}) => (
  <StoreProvider initialState={initialState} reducer={rootReducer} init={init}>
    <Component {...props} />
  </StoreProvider>
);
