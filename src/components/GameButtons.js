import React from 'react';
import classNames from 'classnames';
import { useStoreValue } from '../store/StoreProvider';
import { handleToggleRules } from './Rules';
import types from '../store/types';
import useGetNewDeck from '../hooks/useGetNewDeck';
import { CLEANUP_TIME } from '../utils/constants';

function GameButtons() {
  const [{ isRevealed, isPlaying }, dispatch] = useStoreValue();

  // Attach Hook which is dependent to trigger on handleStartGame
  useGetNewDeck();
  const cleanupDeck = async () =>
    new Promise((resolve) => {
      dispatch({ type: types.CLEANUP_DECK });
      setTimeout(() => {
        resolve();
      }, CLEANUP_TIME);
    });

  const handleStartGame = async () => {
    if (!isPlaying) {
      // First time user click New game
      dispatch({ type: types.NEW_GAME });
    } else if (isRevealed) {
      // Every other time user clicks New game.
      // Also make sure to revert deck to clean and then start a new game
      await cleanupDeck();
      dispatch({ type: types.NEW_GAME });
    } else {
      dispatch({ type: types.REVEAL_CARDS });
    }
  };

  return (
    <div className="game__buttons">
      <button
        onClick={handleStartGame}
        className={classNames('button__main', {
          reveal: !isRevealed && isPlaying
        })}
      >
        {isRevealed || !isPlaying ? 'New game' : 'Reveal Cards'}
      </button>
      <button
        className="button__rules"
        onClick={handleToggleRules(dispatch, true)}
      >
        View Rules
      </button>
    </div>
  );
}

export default GameButtons;
