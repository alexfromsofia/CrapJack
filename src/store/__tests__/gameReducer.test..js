import gameReducer, { initialState } from '../gameReducer';
import types from '../types';
import { BUST_TRESHOLD } from '../../utils/constants';

describe('gameReducer', () => {
  it('Should return initial state if no type is matching', () => {
    const action = { type: 'NOT_MATCHING' };
    const result = gameReducer(initialState, action);

    expect(result).toEqual(initialState);
  });

  it(`Should correctly handle ${types.NEW_GAME}`, () => {
    const action = { type: types.NEW_GAME };
    const result = gameReducer(initialState, action);

    expect(result).toMatchObject({
      gameId: initialState.gameId + 1,
      systemMessage: 'Dealing cards...',
      isPlaying: true,
      isCleaned: false
    });
  });
  it(`Should correctly handle ${types.CLEANUP_DECK}`, () => {
    const action = { type: types.CLEANUP_DECK };
    const state = {
      ...initialState,
      systemMessage: 'Some text',
      isPlaying: true,
      isRevealed: true,
      isCleaned: false,
      dealer: {
        ...initialState.dealer,
        isWinner: true
      },
      player: {
        ...initialState.player,
        isWinner: true
      }
    };

    const result = gameReducer(state, action);

    expect(result).toMatchObject({
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
    });
  });

  it(`Should correctly handle ${types.REVEAL_CARDS} if there is no winner`, () => {
    const action = { type: types.REVEAL_CARDS };
    const state = {
      ...initialState,
      dealer: {
        ...initialState.dealer,
        score: BUST_TRESHOLD + 1
      },
      player: {
        ...initialState.player,
        score: BUST_TRESHOLD + 1
      }
    };
    const result = gameReducer(state, action);

    expect(result).toMatchObject({
      isRevealed: true,
      systemMessage: 'And the winner is...'
    });
  });
  it(`Should correctly handle ${types.REVEAL_CARDS} if DEALER wins`, () => {
    const action = { type: types.REVEAL_CARDS };
    const state = {
      ...initialState,
      dealer: {
        ...initialState.dealer,
        score: BUST_TRESHOLD
      }
    };
    const result = gameReducer(state, action);
    expect(result).toMatchObject({
      isRevealed: true,
      systemMessage: 'And the winner is...',
      dealer: {
        isWinner: true,
        wins: 1
      }
    });
  });
  it(`Should correctly handle ${types.REVEAL_CARDS} if PLAYER wins`, () => {
    const action = { type: types.REVEAL_CARDS };
    const state = {
      ...initialState,
      player: {
        ...initialState.player,
        score: BUST_TRESHOLD
      }
    };
    const result = gameReducer(state, action);
    expect(result).toMatchObject({
      isRevealed: true,
      systemMessage: 'And the winner is...',
      player: {
        isWinner: true,
        wins: 1
      }
    });
  });
  it(`Should correctly handle ${types.DRAW_CARDS}`, () => {
    const dealerCards = [{ value: 2 }, { value: 3 }, { value: 4 }];
    const playerCards = [{ value: 5 }, { value: 6 }, { value: 7 }];
    const payload = {
      cards: [...dealerCards, ...playerCards]
    };

    const action = { type: types.DRAW_CARDS, payload };
    const result = gameReducer(initialState, action);

    expect(result).toMatchObject({
      dealer: {
        cards: dealerCards,
        score: 9
      },
      player: {
        cards: playerCards,
        score: 18
      }
    });
  });
  it(`Should correctly handle ${types.TOGGLE_RULES}`, () => {
    const action = { type: types.TOGGLE_RULES, payload: true };
    const result = gameReducer(initialState, action);

    expect(result).toMatchObject({ shouldDisplayRules: true });
  });
});
