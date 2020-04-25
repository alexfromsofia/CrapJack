import React from 'react';
import classNames from 'classnames';

import { useStoreValue } from '../store/StoreProvider';
import Card from './Card';

function Player({ playerType }) {
  const [game] = useStoreValue();
  const { deckId, isRevealed } = game;
  const player = game[playerType];
  const { cards } = player;

  if (!cards) return null;

  return (
    <div className={`game__player ${playerType}`}>
      <div
        className={classNames('game__player--score', {
          hidden: !isRevealed,
          visible: isRevealed
        })}
      >
        {player.name} score: {player.score}
      </div>
      <div className="game__player--cards">
        {cards.map((card, index) => (
          <Card
            key={`${card.code}-${deckId}`}
            card={card}
            index={index}
            playerType={playerType}
          />
        ))}
      </div>
    </div>
  );
}

export default Player;
