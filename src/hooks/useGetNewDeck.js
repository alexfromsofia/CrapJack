import { useEffect } from 'react';
import { getNewShuffledDeck } from '../utils/ajaxUtil';
import { useStoreValue } from '../store/StoreProvider';
import types from '../store/types';

export default function useGetNewDeck() {
  const [{ game }, dispatch] = useStoreValue();
  const { gameId } = game;

  useEffect(() => {
    const getDeck = async () => {
      const deck = await getNewShuffledDeck();

      dispatch({
        type: types.GET_NEW_DECK,
        payload: deck
      });
    };

    getDeck();
  }, [dispatch, gameId]);
}
