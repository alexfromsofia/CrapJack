import types from './types';
import { SYSTEM_MESSAGES } from '../utils/constants';
import { calculateScore } from '../utils/utils';

export const initialState = {
  gameId: 0,
  isPlaying: false,
  isRevealed: false,
  isCleaned: true,
  shouldDisplayRules: false,
  systemMessage: SYSTEM_MESSAGES.WELCOME,
  deckId: null,
  dealer: {
    name: 'Dealer',
    wins: 0,
    score: 0,
    cards: []
  },
  player: {
    name: 'You',
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
        systemMessage: 'Dealing cards...',
        isPlaying: true,
        isCleaned: false
      };
    }
    case types.CLEANUP_DECK: {
      return {
        ...state,
        systemMessage: 'Starting a new game...',
        isPlaying: false,
        isRevealed: false,
        isCleaned: true
      };
    }
    case types.REVEAL_CARDS: {
      return {
        ...state,
        isRevealed: true
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
          ...state.player,
          cards: cards.slice(3, 6),
          score: calculateScore(playerCards)
        }
      };
    }
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
