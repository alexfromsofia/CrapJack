import React from 'react';
import { StoreProvider } from './store/StoreProvider';
import { initialState, rootReducer, init } from './store';
import { StateInspector } from 'reinspect';
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
