import gameReducer, { initialState } from './gameReducer';

export const init = () => initialState;

export const rootReducer = (game, action) => {
  // middleware goes here, i.e calling analytics service, etc.
  return gameReducer(game, action);
};
