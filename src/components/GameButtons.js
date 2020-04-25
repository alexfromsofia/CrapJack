import React from 'react';
import { useStoreValue } from '../store/StoreProvider';
import { handleToggleRules } from './Rules';
import types from '../store/types';
import useGetNewDeck from '../hooks/useGetNewDeck';

function GameButtons() {
  const [, dispatch] = useStoreValue();

  // Attach Hook which is dependent to trigger on handleStartGame
  useGetNewDeck();
  const handleStartGame = () => dispatch({ type: types.NEW_GAME });

  return (
    <div className="game--buttons">
      <button onClick={handleStartGame}>New game</button>
      <button onClick={handleToggleRules(dispatch, true)}>View Rules</button>
    </div>
  );
}

export default GameButtons;
