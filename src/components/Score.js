import React from 'react';

import { useStoreValue } from '../store/StoreProvider';

function Score({ playerType }) {
  const [game] = useStoreValue();
  const player = game[playerType];

  return (
    <div className="game__score">
      {player.name}: {player.wins}
    </div>
  );
}

export default Score;
