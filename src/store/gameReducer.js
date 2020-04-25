import types from './types';
import { SYSTEM_MESSAGES } from '../utils/constants';
import { calculateScore, determineWinner } from '../utils/utils';

// Player model
// updated by deck draw response
const playerModel = {
  name: '',
  cards: [],
  // Updated on cards reveal
  score: 0,
  wins: 0,
  isWinner: false
};

export const initialState = {
  // Incremented by one each time user clicks New Game and
  // Informs useGetNewDeck it needs to trigger again.
  gameId: 0,
  // Is true when user clicks on New Game and off when cleaning up table or on game load.
  isPlaying: false,
  // Dealers hand is hidden by default until user clicks the Reveal button
  isRevealed: false,
  // Flag for cleanup state - used to reverse card deal animations
  isCleaned: true,
  // Flag used for toggling rules modal
  shouldDisplayRules: false,
  // Used displaying for top system messages
  systemMessage: SYSTEM_MESSAGES.WELCOME,
  // Updated by the response from each deck draw - used for unique key in cards mapped render.
  deckId: null,
  // Player(dealer) model
  // updated by deck draw response
  dealer: {
    ...playerModel,
    name: 'Dealer'
  },
  player: {
    ...playerModel,
    name: 'You'
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
        isCleaned: true,
        dealer: {
          ...state.dealer,
          isWinner: false
        },
        player: {
          ...state.player,
          isWinner: false
        }
      };
    }
    case types.REVEAL_CARDS: {
      const { dealer, player } = state;
      const winnerKey = determineWinner({ dealer, player });
      let winnerObject = {};

      // There may be no winner, so update conditionally
      if (winnerKey) {
        winnerObject = {
          [winnerKey]: {
            ...state[winnerKey],
            isWinner: true,
            wins: state[winnerKey].wins + 1
          }
        };
      }

      return {
        ...state,
        isRevealed: true,
        systemMessage: 'And the winner is...',
        ...winnerObject
      };
    }
    case types.DRAW_CARDS: {
      const { cards, deck_id: deckId } = action.payload;
      // Draw api call draws 6 cards - 3 per player
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
