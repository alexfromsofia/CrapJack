import { CARD_POINTS } from './constants';

export const calculateScore = (cards) =>
  cards.reduce((acc, card) => {
    const points = CARD_POINTS[card.value];

    acc += points;

    return acc;
  }, 0);
