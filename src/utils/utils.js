import { CARD_POINTS } from './constants';

export const calculateScore = (cards) =>
  cards.reduce((acc, card) => {
    const points = CARD_POINTS[card.value];

    acc += points;

    return acc;
  }, 0);

/**
 * Returns a random number between the specified values.
 * The returned value is no lower than (and may possibly equal) min, and is less than (and not equal) max.
 * @param {Number} min
 * @param {Number} max
 */
export const getRandomArbitrary = (min, max) =>
  Math.random() * (max - min) + min;
