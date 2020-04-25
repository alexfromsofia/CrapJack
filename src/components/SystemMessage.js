import React from 'react';

import { useStoreValue } from '../store/StoreProvider';

function SystemMessage() {
  const [{ systemMessage }] = useStoreValue();

  return (
    <div className="system-message">
      <h1>{systemMessage}</h1>
    </div>
  );
}

export default SystemMessage;
