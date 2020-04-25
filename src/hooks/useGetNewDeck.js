import { useEffect } from 'react';
import { getNewShuffledDeck, drawCards } from '../utils/ajaxUtil';
import { useStoreValue } from '../store/StoreProvider';
import types from '../store/types';
import { initialState } from '../store/gameReducer';

export default function useGetNewDeck() {
  const [{ gameId }, dispatch] = useStoreValue();

  useEffect(() => {
    // This means we haven't pressed New Game yet
    if (gameId === initialState.gameId) return;
    const getDeck = async () => {
      const deck = await getNewShuffledDeck();

      if (!deck || deck.error) {
        return;
      }

      const cards = await drawCards(deck.deck_id, 6);

      if (!cards || cards.error) {
        return;
      }

      dispatch({
        type: types.DRAW_CARDS,
        payload: cards
      });
    };

    getDeck();
  }, [dispatch, gameId]);
}
