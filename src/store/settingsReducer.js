import types from './types';

export const initialSettingsState = {
  shouldDisplayRules: false
};

export default (state, action) => {
  switch (action.type) {
    case types.TOGGLE_RULES: {
      return {
        ...state,
        shouldDisplayRules: action.payload
      };
    }
    default:
      return state;
  }
};
