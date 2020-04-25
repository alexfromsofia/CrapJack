import gameReducer, { initialGameState } from './gameReducer';
import settingsReducer, { initialSettingsState } from './settingsReducer';

export const initialState = {
  game: initialGameState,
  settings: initialSettingsState
};

export const init = () => initialState;

export const rootReducer = ({ game, settings }, action) => {
  // middleware goes here, i.e calling analytics service, etc.
  return {
    game: gameReducer(game, action),
    settings: settingsReducer(settings, action)
  };
};
