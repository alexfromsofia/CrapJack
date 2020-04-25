import React from 'react';
import GameButtons from './GameButtons';
import Rules from './Rules';
import { useStoreValue } from '../store/StoreProvider';

function Game() {
  const [{ settings }] = useStoreValue();

  return (
    <div className="game">
      <h1>Welcome to Crap Jack</h1>
      <GameButtons />
      {settings.shouldDisplayRules && <Rules />}
    </div>
  );
}

export default Game;
