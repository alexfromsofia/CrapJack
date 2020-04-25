import React from 'react';

import { useStoreValue } from '../store/StoreProvider';

function SystemMessage() {
  const [{ game }] = useStoreValue();

  return (
    <div className="system-message">
      <h1>{game.systemMessage}</h1>
    </div>
  );
}

export default SystemMessage;
