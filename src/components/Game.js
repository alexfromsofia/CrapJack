import React from 'react';
import GameButtons from './GameButtons';
import Rules from './Rules';
import SystemMessage from './SystemMessage';

function Game() {
  return (
    <div className="game">
      <SystemMessage />
      <GameButtons />
      <Rules />
    </div>
  );
}

export default Game;
