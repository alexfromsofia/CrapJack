import types from './types';
import { SYSTEM_MESSAGES } from '../utils/constants';
import { calculateScore } from '../utils/score';

export const initialGameState = {
  gameId: 0,
  isPlaying: false,
  systemMessage: SYSTEM_MESSAGES.WELCOME,
  deckId: null,
  dealer: {
    name: 'Dealer',
    wins: 0,
    score: 0,
    cards: []
  },
  player: {
    name: 'Player',
    wins: 0,
    score: 0,
    cards: []
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
    case types.DRAW_CARDS: {
      const { cards, deck_id: deckId } = action.payload;
      const dealerCards = cards.slice(0, 3);
      const playerCards = cards.slice(3, 6);

      return {
        ...state,
        deckId,
        dealer: {
          ...state.dealer,
          cards: cards.slice(0, 3),
          score: calculateScore(dealerCards)
        },
        player: {
          ...state.dealer,
          cards: cards.slice(3, 6),
          score: calculateScore(playerCards)
        }
      };
    }
    default:
      return state;
  }
};
