import React from 'react';
import { useStoreValue } from '../store/StoreProvider';
import { handleToggleRules } from './Rules';
import types from '../store/types';

function GameButtons() {
  const [{ game }, dispatch] = useStoreValue();
  const { isPlaying } = game;
  const handleStartGame = () => dispatch({ type: types.NEW_GAME });

  return (
    <div className="game--buttons">
      <button onClick={handleStartGame}>
        {isPlaying ? 'New game' : 'Start game'}
      </button>
      <button onClick={handleToggleRules(dispatch, true)}>View Rules</button>
    </div>
  );
}

export default GameButtons;
