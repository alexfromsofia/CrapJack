import React from 'react';
import GameButtons from './GameButtons';
import Rules from './Rules';
import Player from './Player';
import SystemMessage from './SystemMessage';

function Game() {
  return (
    <div className="game">
      <SystemMessage />
      <Rules />
      <Player playerType="dealer" />
      <Player playerType="player" />
      <GameButtons />
    </div>
  );
}

export default Game;
