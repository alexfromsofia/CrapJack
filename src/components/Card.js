import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { getRandomArbitrary } from '../utils/utils';
import { useStoreValue } from '../store/StoreProvider';

/**
 * The right way of importing a SVG in react is as ReactComponent:
 * import { ReactComponent as CardFront } from './../img/card_front.svg';
 * But in this case the parser throws an exception: React's JSX doesn't support namespace tags.
 * This is due to the SVG markup.
 */
import CardFront from '../img/card_front.svg';
import { PLAYER_TYPES } from '../utils/constants';

function Card({ card, playerType }) {
  const [loaded, setLoaded] = useState(false);
  const [{ isRevealed, isCleaned }] = useStoreValue();
  const handleCardLoad = () => {
    setTimeout(() => {
      setLoaded(true);
      // Delay card animation to simulate separate card dealing.
    }, getRandomArbitrary(200, 500));
  };
  useEffect(() => {
    if (isCleaned) {
      setLoaded(false);
    }

    return;
  }, [isCleaned]);
  const isFlipped = playerType === PLAYER_TYPES.PLAYER || isRevealed;

  return (
    <div
      className={classNames('scene', playerType, {
        loaded
      })}
    >
      <div className={classNames('game__card', { 'is-flipped': isFlipped })}>
        <div className="game__card--face front">
          <img src={CardFront} alt={card.code} />
        </div>
        <div className="game__card--face back">
          <img src={card.images.png} onLoad={handleCardLoad} alt={card.code} />
        </div>
      </div>
    </div>
  );
}

export default Card;
