import React from 'react';
import GameButtons from './GameButtons';
import Rules from './Rules';
import Player from './Player';
import SystemMessage from './SystemMessage';
import { PLAYER_TYPES } from '../utils/constants';

function Game() {
  return (
    <div className="game">
      <SystemMessage />
      <Rules />
      <Player playerType={PLAYER_TYPES.DEALER} />
      <Player playerType={PLAYER_TYPES.PLAYER} />
      <GameButtons />
    </div>
  );
}

export default Game;
