import { CARD_POINTS, BUST_TRESHOLD, PLAYER_TYPES } from './constants';

/**
 * Calculations are made based on the rules.
 * 2 = 2pts, 3 = 3pts,...10 = 10pts, J, Q, K, A = 10pts each
 * @param {Array} cards
 * @returns {Number}
 */
export const calculateScore = (cards) => {
  if (!Array.isArray(cards)) return 0;

  return cards.reduce((acc, card) => {
    const points = CARD_POINTS[card.value] || 0;

    acc += points;

    return acc;
  }, 0);
};

/**
 * Returns a string based on the game conditions for winning.
 * Returns null if there is no winner.
 * @param {Object} dealer
 * @param {Object} player
 * @returns {String or null}
 */
export const determineWinner = ({ dealer, player }) => {
  const { score: dealerScore } = dealer;
  const { score: playerScore } = player;

  // No winner if both scores are above 21 or equal to each other.
  const areBothScoresBust =
    (dealerScore > BUST_TRESHOLD && playerScore > BUST_TRESHOLD) ||
    dealerScore === playerScore;

  if (areBothScoresBust) return null;

  if (dealerScore > BUST_TRESHOLD) {
    return PLAYER_TYPES.PLAYER;
  }

  if (playerScore > BUST_TRESHOLD) {
    return PLAYER_TYPES.DEALER;
  }

  return playerScore > dealerScore ? PLAYER_TYPES.PLAYER : PLAYER_TYPES.DEALER;
};

/**
 * Returns a random number between the specified values.
 * The returned value is no lower than (and may possibly equal) min, and is less than (and not equal) max.
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
export const getRandomArbitrary = (min, max) =>
  Math.random() * (max - min) + min;
