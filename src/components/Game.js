import React from 'react';
import GameButtons from './GameButtons';
import Rules from './Rules';
import { useStoreValue } from '../store/StoreProvider';
import SystemMessage from './SystemMessage';

function Game() {
  const [{ settings }] = useStoreValue();

  return (
    <div className="game">
      <SystemMessage />
      <GameButtons />
      {settings.shouldDisplayRules && <Rules />}
    </div>
  );
}

export default Game;
