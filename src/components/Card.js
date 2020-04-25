import React, { useState } from 'react';
import classNames from 'classnames';
import { getRandomArbitrary } from '../utils/utils';
import { useStoreValue } from '../store/StoreProvider';
import CardFront from '../img/card_front.svg';
import { PLAYER_TYPES } from '../utils/constants';

function Card({ card, playerType }) {
  const [loaded, setLoaded] = useState(false);
  const [{ game }] = useStoreValue();
  const { isRevealed } = game;
  const handleCardLoad = () => {
    setTimeout(() => {
      setLoaded(true);
      // Delay card animation to simulate separate card dealing.
    }, getRandomArbitrary(200, 500));
  };
  const isFlipped = playerType === PLAYER_TYPES.PLAYER || isRevealed;

  return (
    <div
      className={classNames('scene', playerType, {
        loaded
      })}
    >
      <div className={classNames('game__card', { 'is-flipped': isFlipped })}>
        <div className="game__card--face front">
          <img src={CardFront} />
        </div>
        <div className="game__card--face back">
          <img src={card.images.png} alt={card.code} onLoad={handleCardLoad} />
        </div>
      </div>
    </div>
  );
}

export default Card;
