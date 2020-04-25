import React from 'react';
import { StateInspector } from 'reinspect';

import { StoreProvider } from './store/StoreProvider';
import { rootReducer, init } from './store';
import { initialState } from './store/gameReducer';
import Game from './components/Game';

function App() {
  return (
    <StateInspector name="Crap Jack Game">
      <StoreProvider
        initialState={initialState}
        reducer={rootReducer}
        init={init}
      >
        <div className="wrapper">
          <Game />
        </div>
      </StoreProvider>
    </StateInspector>
  );
}

export default App;
