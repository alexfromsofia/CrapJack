import types from './types';
import { SYSTEM_MESSAGES } from '../utils/constants';

export const initialGameState = {
  gameId: 0,
  isPlaying: false,
  systemMessage: SYSTEM_MESSAGES.WELCOME,
  dealer: {
    name: 'Dealer',
    score: 0
  },
  player: {
    name: '',
    score: 0
  }
};

export default (state, action) => {
  switch (action.type) {
    case types.NEW_GAME: {
      return {
        ...state,
        gameId: state.gameId + 1,
        isPlaying: true
      };
    }
    case types.GET_NEW_DECK: {
      return state;
    }
    default:
      return state;
  }
};
