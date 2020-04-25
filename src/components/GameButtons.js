import React from 'react';
import { useStoreValue } from '../store/StoreProvider';
import { handleToggleRules } from './Rules';

function GameButtons() {
  const [, dispatch] = useStoreValue();

  return (
    <div className="game--buttons">
      <div className="buttons">
        <button onClick={() => {}}>Start game</button>
        <button onClick={handleToggleRules(dispatch, true)}>View Rules</button>
      </div>
    </div>
  );
}

export default GameButtons;
