import { REQUEST_METHODS } from '../utils/constants';

/**
 * @param {String} method either GET,PUT,POST,DELETE
 * @param {String} endpoint the url from which to fetch from
 */
export const generateRequest = async ({
  method = REQUEST_METHODS.GET,
  endpoint = ''
}) => {
  try {
    const response = await fetch(
      // Hardcoding for the purpose of the task. Usually will be a environment variable or an argument.
      `https://deckofcardsapi.com/api/deck/${endpoint}`,
      {
        method
      }
    );

    const { status, ok } = response;

    if (ok) {
      return response.json();
    }

    if (status >= 400) {
      console.log(response);
    }
  } catch (error) {
    console.error(error);

    return error;
  }
};

export const getNewShuffledDeck = async () => {
  try {
    const deck = await generateRequest({
      endpoint: 'new/shuffle/?deck_count=1'
    });

    if (!deck.success) {
      return { error: 'Error getting deck.' };
    }

    return deck;
  } catch (error) {
    console.log(error);
  }
};

export const drawCards = async (deckId = null, numOfCards = 1) => {
  if (!deckId) {
    return console.log('Please provide deckId');
  }

  try {
    const cards = await generateRequest({
      endpoint: `${deckId}/draw/?count=${numOfCards}`
    });

    if (!cards.success) {
      return { error: 'Error getting cards.' };
    }

    return cards;
  } catch (error) {
    console.log(error);
  }
};
