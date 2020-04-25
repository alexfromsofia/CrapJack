import types from './types';

export const initialGameState = {
  gameId: 0,
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
        gameId: state.gameId + 1
      };
    }
    case types.GET_NEW_DECK: {
      return state;
    }
    default:
      return state;
  }
};
