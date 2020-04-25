import React from 'react';
import { useStoreValue } from '../store/StoreProvider';
import { handleToggleRules } from './Rules';
import types from '../store/types';
import useGetNewDeck from '../hooks/useGetNewDeck';

function GameButtons() {
  const [{ game }, dispatch] = useStoreValue();
  const { isRevealed, isPlaying } = game;

  // Attach Hook which is dependent to trigger on handleStartGame
  useGetNewDeck();
  const handleStartGame = () => {
    if (!isPlaying || isRevealed) {
      dispatch({ type: types.NEW_GAME });
    } else {
      dispatch({ type: types.REVEAL_CARDS });
    }
  };

  return (
    <div className="game__buttons">
      <button onClick={handleStartGame}>
        {isRevealed || !isPlaying ? 'New game' : 'Reveal Cards'}
      </button>
      <button onClick={handleToggleRules(dispatch, true)}>View Rules</button>
    </div>
  );
}

export default GameButtons;
