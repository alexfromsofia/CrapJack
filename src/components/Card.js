import React, { useState } from 'react';
import classNames from 'classnames';
import { getRandomArbitrary } from '../utils/utils';
import { useStoreValue } from '../store/StoreProvider';

function Card({ card, playerType }) {
  const [loaded, setLoaded] = useState(false);
  const [{ isRevealed }] = useStoreValue().game;
  const handleCardLoad = () => {
    setTimeout(() => {
      setLoaded(true);
    }, getRandomArbitrary(200, 500));
  };

  return (
    <div
      className={classNames('game__card', playerType, {
        loaded
      })}
    >
      <img src={card.images.png} alt={card.code} onLoad={handleCardLoad} />
    </div>
  );
}

export default Card;
