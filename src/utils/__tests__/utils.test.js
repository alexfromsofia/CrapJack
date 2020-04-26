import { calculateScore, determineWinner, getRandomArbitrary } from '../utils';
import { CARD_POINTS, PLAYER_TYPES } from '../constants';

const allCardValues = Object.keys(CARD_POINTS).map((cardValue) => ({
  value: cardValue
}));

describe('calculateScore', () => {
  it('Should calculate score based on an array of cards', () => {
    const score = calculateScore([{ value: 2 }, { value: 3 }]);

    expect(score).toBe(5);
  });
  it('Total Score should be 94', () => {
    const score = calculateScore(allCardValues);

    expect(score).toBe(94);
  });
  it('Should return 0 if no array is provided', () => {
    const score = calculateScore('test');

    expect(score).toBe(0);
  });
});

describe('getRandomArbitrary', () => {
  it('Should return number between a range', () => {
    const min = 5;
    const max = 10;
    const result = getRandomArbitrary(min, max);

    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });
});

describe('determineWinner', () => {
  it('Should determine nothing if both players scores are above 21', () => {
    const player = { score: 22 };
    const dealer = { score: 23 };

    const result = determineWinner({ dealer, player });

    expect(result).toBeNull();
  });
  it('Should determine nothing if both players scores are equal', () => {
    const player = { score: 22 };
    const dealer = { score: 22 };

    const result = determineWinner({ dealer, player });

    expect(result).toBeNull();
  });
  it('Should determine PLAYER as a winner if dealer score is above 21', () => {
    const player = { score: 21 };
    const dealer = { score: 22 };

    const result = determineWinner({ dealer, player });

    expect(result).toBe(PLAYER_TYPES.PLAYER);
  });
  it('Should determine DEALER as a winner if player score is above 21', () => {
    const player = { score: 22 };
    const dealer = { score: 21 };

    const result = determineWinner({ dealer, player });

    expect(result).toBe(PLAYER_TYPES.DEALER);
  });
  it('Should determine DEALER as a winner if has higher score, but less or euqal to 21', () => {
    const player = { score: 12 };
    const dealer = { score: 21 };

    const result = determineWinner({ dealer, player });

    expect(result).toBe(PLAYER_TYPES.DEALER);
  });
  it('Should determine PLAYER as a winner if has higher score, but less or euqal to 21', () => {
    const player = { score: 21 };
    const dealer = { score: 12 };

    const result = determineWinner({ dealer, player });

    expect(result).toBe(PLAYER_TYPES.PLAYER);
  });
});
