import React from 'react';
import classNames from 'classnames';

import { ReactComponent as CloseIcon } from '../img/close.svg';
import types from '../store/types';
import { useStoreValue } from '../store/StoreProvider';

export const handleToggleRules = (dispatch, toggle) => (event) => {
  dispatch({
    type: types.TOGGLE_RULES,
    payload: toggle
  });
};

function Rules() {
  const [{ settings }, dispatch] = useStoreValue();

  return (
    <div
      className={classNames('modal', {
        hidden: !settings.shouldDisplayRules,
        visible: settings.shouldDisplayRules
      })}
    >
      <div className="rules">
        <h2>Rules</h2>
        Single player vs Dealer <br />
        Each player dealt 3 Cards <br />
        Dealer Hand will be dealt Face Down <br />
        Player hand dealt facing up <br />
        When the player clicks the Reveal button, the Dealer Hand will be shown,
        both hands scored, and a winner declared. <br />
        <h2>Scoring </h2>
        Each card is scored as follows: <br />
        2 = 2, 3 = 3 …. 10 = 10,
        <br />
        Picture Cards J / Q / K / A = 10 <br />
        A hand scoring over 21 = Bust <br />
        The player with the hand closest to, but less than or equal to 21 wins
        <button
          className="modal--close"
          onClick={handleToggleRules(dispatch, false)}
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}

export default Rules;
